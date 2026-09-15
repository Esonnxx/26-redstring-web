"use client";

import { useEffect } from "react";
import { ROUTE_CONTENT_READY_EVENT } from "@/components/routeLoadingEvents";

function waitForImage(image: HTMLImageElement) {
  const decodeImage = () => image.decode().catch(() => undefined);
  if (image.complete) return decodeImage();

  return new Promise<void>((resolve) => {
    image.addEventListener("load", () => {
      void decodeImage().then(resolve);
    }, { once: true });
    image.addEventListener("error", () => resolve(), { once: true });
  });
}

function waitForBackgroundImage(url: string) {
  return new Promise<void>((resolve) => {
    const image = new Image();
    image.addEventListener("load", () => {
      void image.decode().catch(() => undefined).then(resolve);
    }, { once: true });
    image.addEventListener("error", () => resolve(), { once: true });
    image.src = url;
  });
}

function getBackgroundImageUrls(container: HTMLElement) {
  const elements = [container, ...container.querySelectorAll<HTMLElement>("*")];
  const urls = new Set<string>();

  for (const element of elements) {
    const backgroundImage = window.getComputedStyle(element).backgroundImage;
    for (const match of backgroundImage.matchAll(/url\(["']?(.*?)["']?\)/g)) {
      if (match[1] && !match[1].startsWith("data:")) urls.add(match[1]);
    }
  }

  return urls;
}

export default function RouteContentReady() {
  useEffect(() => {
    let cancelled = false;

    const notifyWhenReady = async () => {
      const container = document.querySelector<HTMLElement>("[data-route-content]");
      if (!container) return;

      const imagePromises = Array.from(
        container.querySelectorAll<HTMLImageElement>("img"),
        waitForImage,
      );
      const backgroundImagePromises = Array.from(
        getBackgroundImageUrls(container),
        waitForBackgroundImage,
      );

      await Promise.all([
        document.fonts?.ready ?? Promise.resolve(),
        ...imagePromises,
        ...backgroundImagePromises,
      ]);
      await new Promise<void>((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
      );

      if (!cancelled) window.dispatchEvent(new Event(ROUTE_CONTENT_READY_EVENT));
    };

    void notifyWhenReady();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}

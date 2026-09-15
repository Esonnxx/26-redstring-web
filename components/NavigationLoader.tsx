"use client";

import { useEffect, useRef, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { ROUTE_CONTENT_READY_EVENT } from "@/components/routeLoadingEvents";

const MINIMUM_DISPLAY_TIME = 300;
const MAXIMUM_WAIT_TIME = 20_000;

export default function NavigationLoader({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isLoading, setIsLoading] = useState(false);
  const startedAtRef = useRef<number | null>(null);
  const fallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finishTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const clearTimers = () => {
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }

      if (finishTimerRef.current) {
        clearTimeout(finishTimerRef.current);
        finishTimerRef.current = null;
      }
    };

    const stopLoading = () => {
      clearTimers();
      startedAtRef.current = null;
      setIsLoading(false);
    };

    const startLoading = () => {
      clearTimers();
      startedAtRef.current = performance.now();
      setIsLoading(true);
      fallbackTimerRef.current = setTimeout(stopLoading, MAXIMUM_WAIT_TIME);
    };

    const finishLoading = () => {
      const startedAt = startedAtRef.current;
      if (startedAt === null) return;

      const remainingTime = Math.max(
        0,
        MINIMUM_DISPLAY_TIME - (performance.now() - startedAt),
      );
      finishTimerRef.current = setTimeout(stopLoading, remainingTime);
    };

    const handleDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (
        !link ||
        link.hasAttribute("download") ||
        (link.target && link.target !== "_self")
      ) {
        return;
      }

      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin) return;

      const current = new URL(window.location.href);
      if (
        destination.pathname === current.pathname &&
        destination.search === current.search
      ) {
        return;
      }

      startLoading();
    };

    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("popstate", startLoading);
    window.addEventListener(ROUTE_CONTENT_READY_EVENT, finishLoading);

    return () => {
      clearTimers();
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("popstate", startLoading);
      window.removeEventListener(ROUTE_CONTENT_READY_EVENT, finishLoading);
    };
  }, []);

  return (
    <>
      {children}
      {isLoading && <LoadingScreen />}
    </>
  );
}

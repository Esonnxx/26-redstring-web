"use client";

import AOS from "aos";
import { useEffect } from "react";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return null;
}

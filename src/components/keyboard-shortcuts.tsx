"use client";

import { useEffect } from "react";
import { useLocale } from "@/components/locale-provider";

export function KeyboardShortcuts() {
  const { locale } = useLocale();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isMod = event.metaKey || event.ctrlKey;

      if (isMod && event.key === "p") {
        event.preventDefault();
        window.print();
      }

      if (isMod && event.key === "d") {
        event.preventDefault();
        window.open(`/api/pdf?lang=${locale}`, "_blank");
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [locale]);

  return null;
}

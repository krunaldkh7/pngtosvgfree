"use client";
import { useEffect } from "react";

// Page-specific interactive logic, loaded only on the page that needs it.
const SCRIPTS = {
  home: () => import("@/lib/scripts/home"),
  bulk: () => import("@/lib/scripts/bulk"),
  gallery: () => import("@/lib/scripts/gallery"),
  contact: () => import("@/lib/scripts/contact"),
};

export default function PageScript({ name }) {
  useEffect(() => {
    const ctrl = new AbortController();
    SCRIPTS[name]().then((m) => {
      if (!ctrl.signal.aborted) m.default(ctrl.signal);
    });
    return () => ctrl.abort();
  }, [name]);
  return null;
}

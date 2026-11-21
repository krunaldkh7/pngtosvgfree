"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Cookie() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try { setShow(!localStorage.getItem("ck")); } catch { setShow(true); }
  }, []);
  const accept = () => {
    try { localStorage.setItem("ck", "1"); } catch {}
    setShow(false);
  };
  return (
    <div className={"cookie" + (show ? " on" : "")} id="cookie">
      <span>We use cookies to analyse traffic and show ads. See our <Link href="/privacy-policy">Privacy Policy</Link>.</span>
      <button className="cta" style={{ padding: "9px 14px" }} onClick={accept}>Got it</button>
    </div>
  );
}

import Link from "next/link";

export default function Logo({ style }) {
  return (
    <Link className="logo" href="/" style={style}>
      <img src="/logo.svg" alt="" width="28" height="28" style={{ borderRadius: "7px" }} />
      PNG to SVG Free
    </Link>
  );
}

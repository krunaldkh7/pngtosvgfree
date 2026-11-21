import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <title>Page not found | PNG TO SVG</title>
      {" "}
      <header className="phead" style={{ "paddingTop": "110px" }}>
        <span className="tag">
          {"404"}
        </span>
        <h1>
          {"Page "}
          <em>
            {"not found"}
          </em>
        </h1>
        <p>
          {"The page you are looking for may have moved or no longer exists."}
        </p>
        <div style={{ "display": "flex", "gap": "10px", "justifyContent": "center", "marginTop": "24px" }}>
          <Link className="cta" href="/">
            {"Go to converter"}
          </Link>
          <Link className="btn2" href="/blog">
            {"Read the blog"}
          </Link>
        </div>
      </header>
      {" "}
    </>
  );
}

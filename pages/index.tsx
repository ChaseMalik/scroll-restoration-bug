import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: 4000 }}>
      {new Array(1000).fill("Scroll down").map((el, index) => (
        <div key={index}>{el}</div>
      ))}

      <Link href="/anotherPage">
        <a style={{ marginTop: "auto" }}>Go to Another page</a>
      </Link>
    </div>
  );
}

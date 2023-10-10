import Link from "next/link";

export default function Posts() {
  return (
    <div>
      <h1>Posts</h1>
      <h2>
        eu <Link href="/posts/first-post">First post</Link>
      </h2>
      <h1>
        Back <Link href="/">home</Link>
      </h1>
    </div>
  );
}

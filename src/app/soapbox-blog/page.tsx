import Link from "next/link";
import { Post, getSortedPostData } from "../../lib/post-fetch";

export default function ProjectBlogPage() {
  // Placeholder project blogs, turn this into a state?
  // const projects = [
  //   { id: "project-1", title: "Project 1" },
  //   { id: "project-2", title: "Project 2" },
  // ];
  const posts = getSortedPostData("/src/content/blogs/soapbox");

  return (
    <div>
      <h1>Welcome to Konan's Soapbox!</h1>
      <br />
      <p>Where I write about anything on my mind :D</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/soapbox-blog/${post.id}`}>
              {post.title} ({post.date})
            </Link>
          </li>
        ))}
      </ul>
      <br />
      <Link href="/">Back to Home</Link>
    </div>
  );
}

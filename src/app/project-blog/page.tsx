import Link from "next/link";
import { Post, getSortedPostData } from "../../lib/post-fetch";

export default function ProjectBlogPage() {
  // Placeholder project blogs
  const projects = [
    { id: "project-1", title: "Project 1" },
    { id: "project-2", title: "Project 2" },
  ];

  return (
    <div>
      <h1>Project Blog</h1>
      <br />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/project-blog/${project.id}`}>{project.title}</Link>
          </li>
        ))}
        <li>
          <Link href="/project-blog/web-development">
            Web Development Projects
          </Link>
        </li>
      </ul>
      <br />
      <Link href="/">Back to Home</Link>
    </div>
  );
}

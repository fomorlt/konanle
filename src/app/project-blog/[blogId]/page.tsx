import Link from "next/link";

export default function ProjectBlogDetailPage({
  params: { blogId },
}: {
  params: { blogId: string };
}) {
  return (
    <div>
      <h1>{`Blog: ${blogId}`}</h1>
      <p>Content for {blogId}</p>
      <Link href="/project-blog">Back to Project Blog</Link>
      <p>
        later, going to be a big ol list of each project and all their blog
        entries available
      </p>
    </div>
  );
}

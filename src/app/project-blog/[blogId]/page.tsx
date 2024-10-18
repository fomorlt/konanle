import Link from "next/link";

export default function ProjectBlogDetailPage({
  params: { blogId },
}: {
  params: { blogId: string };
}) {
  //just for self note, params: {blogId} is destructuring blogid out of params so I don't ahve to type params.blogid
  // the stuff after colon is just typescript, making sure that blogid is a string

  
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

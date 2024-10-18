import { getPostById } from "../../../lib/post-fetch";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";

export default function PostPage({
  params: { blogId },
}: {
  params: { blogId: string };
}) {
  //   const router = useRouter();
  const post = getPostById("src/content/blogs/soapbox", blogId as string);

  if (!post) {
    return <div>Post not found</div>;
  }

  //variable naming conventions lmao
  const sanitized_content = DOMPurify.sanitize(post.content);

  // dangerously setting innerHTML should be ok as long as we don't source images externally, or if we just sanitize the input.
  //
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: sanitized_content }} />
    </div>
  );
}

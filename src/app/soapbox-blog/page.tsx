import Link from "next/link";
import { Box, VStack, Heading, Text, Badge, HStack } from "@chakra-ui/react";
import { Post, getSortedPostData } from "../../lib/post-fetch";

export default function ProjectBlogPage() {
  // Placeholder project blogs, turn this into a state?
  // const projects = [
  //   { id: "project-1", title: "Project 1" },
  //   { id: "project-2", title: "Project 2" },
  // ];
  const posts = getSortedPostData("/src/content/blogs/soapbox");

  return (
    // <div>
    //   <h1>Welcome to Konan's Soapbox!</h1>
    //   <br />
    //   <p>Where I write and wax sentimental about anything on my mind :D</p>
    //   <ul>
    //     {posts.map((post) => (
    //       <li key={post.id}>
    //         <Link href={`/soapbox-blog/${post.id}`}>
    //           {post.title} ({post.date})
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    //   <br />
    //   <Link href="/">Back to Home</Link>
    // </div>

    <Box bg="black.50" minHeight="100vh" p={8}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        Welcome to Konan's Soapbox!
      </Heading>

      <VStack align="center">
        {posts.map((post) => (
          <Box
            key={post.id}
            p={6}
            bg="white"
            borderRadius="md"
            boxShadow="sm"
            _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
            transition="all 0.2s"
          >
            {/* Blog Title */}
            <Link href={`/soapbox-blog/${post.id}`} passHref>
              <Heading
                as="h2"
                size="md"
                mb={2}
                color="black"
                cursor="pointer"
                _hover={{ color: "teal.500" }}
              >
                {post.title}
              </Heading>
            </Link>

            {/* Date and Tags */}
            <HStack mb={2}>
              <Text fontSize="sm" color="gray.500">
                {post.date}
              </Text>
              {post.tags?.map((tag) => (
                <Badge key={tag} colorScheme="teal">
                  {tag}
                </Badge>
              ))}
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

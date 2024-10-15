/*
Script to fetch blog posts and convert them into json data
*/

import fs from "fs";
import path from "path";
import matter from "gray-matter";

//careful, this could be wrong
export interface Post {
  id: string;
  title: string;
  date: string;
  // can convert to date object later if necessary
  tags: string[];
}

export interface PostIndividual {
  id: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
}

// Directory should be relative to the path of lib folder. So if we want to get to our markdown content,
// needs to be ../content/blogs/wherever else
export function getSortedPostData(directory: string): Post[] {
  const postsDirectory = path.join(process.cwd(), directory);
  const fileNames = fs.readdirSync(postsDirectory); //outputs an array of filename strings
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); //replaces .md extension with nothing

    const fullPath = path.join(postsDirectory, fileName); //creates filepath
    const fileContents = fs.readFileSync(fullPath, "utf8"); //grabs all data from markdown file

    const matterResult = matter(fileContents); //returns an object with properties 'data', 'content', etc.

    const { title, date, tags } = matterResult.data as {
      title: string;
      date: string;
      tags: string[];
    };
    // TODO: check if any of these don't exist. if it doesn't, then pass over. markdown files should be properly formatted.

    return {
      id,
      title,
      date,
      tags,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByTag(tag: string, directory: string) {
  const allPosts = getSortedPostData(directory);
  return allPosts.filter((post) => post.tags && post.tags.includes(tag));
}

export function getPostById(
  directory: string,
  id: string
): PostIndividual | null {
  const postsDirectory = path.join(process.cwd(), directory);
  const fullPath = path.join(postsDirectory, `${id}.md`);

  if (!fs.existsSync(fullPath)) {
    return null; // Return null if the post doesn't exist
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const { title, date, tags } = matterResult.data as {
    title: string;
    date: string;
    tags: string[];
  };

  return {
    id,
    title,
    date,
    tags,
    content: matterResult.content, // Include content
  };
}

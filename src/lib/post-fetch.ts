/*
Script to fetch blog posts and convert them into json data
*/

import fs from "fs";
import path from "path";
import matter from "gray-matter";

//careful, this could be wrong
const postsDirectory = path.join(process.cwd(), "content/blog");

interface Post {
  id: string;
  title: string;
  date: string;
  // can convert to date object later if necessary
  tags: string[];
}

export function getSortedPostData() {
  //TODO: make this return the post interface

  const fileNames = fs.readdirSync(postsDirectory); //outputs an array of filename strings
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); //replaces .md extension with nothing

    const fullPath = path.join(postsDirectory, "fileName"); //creates filepath
    const fileContents = fs.readFileSync(fullPath, "utf8"); //grabs all data from markdown file

    const matterResult = matter(fileContents); //returns an object with properties 'data', 'content', etc.
    // alternatively, look at the documentation
    // https://www.npmjs.com/package/gray-matter
    // look at the '.read' section
    // that way, we wouldn't have to do all this .md stuff - maybe we could just start with the top stuff
    // wait, this script is still necessary to populate the list of posts... hm how do we do this?
    // ok

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
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1)); //can't do this, data doesn't necessarily have a date property. How do we ...
}

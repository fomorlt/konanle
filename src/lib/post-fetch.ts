/*
Script to fetch blog posts and convert them into json data
*/

import fs from "fs";
import path from "path";
import matter from "gray-matter";

//careful, this could be wrong
const postsDirectory = path.join(process.cwd(), "content/blog");

export function getSortedPostData() {
  // new plan: function will return 2 things - list of posts, and parsed tags. 
  // tags will be used for the type of post we want
  // list of posts will be used for the actual display of stuff
  const fileNames = fs.readdirSync(postsDirectory); //outputs an array of filename strings
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); //replaces .md extension with nothing

    const fullPath = path.join("postsDirectory, fileName"); //creates filepath
    const fileContents = fs.readFileSync(fullPath, "utf8"); //grabs all data from markdown file

    const matterResult = matter(fileContents); //returns an object with properties 'data', 'content', etc. 
    // alternatively, look at the documentation
    // https://www.npmjs.com/package/gray-matter
    // look at the '.read' section
    // that way, we wouldn't have to do all this .md stuff - maybe we could just start with the top stuff
    // wait, this script is still necessary to populate the list of posts... hm how do we do this?
    // ok 

    //returns id (the filename), and the data from the markdown file (just the frontmatter, like title and tags (which will be an array))
    return {
      id,
      ...matterResult.data
    };
  });

  
  //return posts by date 
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));  //can't do this, data doesn't necessarily have a date property. How do we ...
}

/*
chatgpt code, double check everything
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getSortedPostsData() {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
*/

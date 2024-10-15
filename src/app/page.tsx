import Link from "next/link";

// Define the LandingPage component
export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to Konan Le's Portfolio & Blog</h1>
      <p>
        Humble beginnings! I'll probably start grabbing some MUI components in a
        bit.
      </p>
      <p>but first, layout! and also how to make blog posts.</p>
      <p>
        Idea: setup some kind of format for markdown or other technology,
        database is way overkill. Just need to have the website grab all .md
        files from a folder or something
      </p>
      <br />
      <nav>
        <ul>
          <li>
            <Link href="/project-blog">Project Blog</Link>
          </li>
          <li>
            <Link href="/soapbox-blog">Soapbox Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

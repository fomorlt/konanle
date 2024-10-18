import Link from "next/link";

// Define the LandingPage component
export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to Konan Le's Portfolio & Blog</h1>
      <br />
      <nav>
        <ul>
          <li>
            <Link href="/soapbox-blog">Soapbox Blog</Link>
          </li>
          <li>
            <Link href="/project-blog">Project Blog (UNDER CONSTRUCTION)</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

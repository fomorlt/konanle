import { Provider } from "@/components/ui/provider";
import { MainContent } from "../components/MainContent"; // Import the factored-out component

export default function LandingPage() {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <MainContent />
        </Provider>
      </body>
    </html>
  );
}

// import Link from "next/link";
// import { Provider } from "@/components/ui/provider";
// import { Button } from "@/components/ui/button";
// import { HStack } from "@chakra-ui/react";
// import { Box, Text, VStack } from "@chakra-ui/react";

// // Define the LandingPage component
// export default function LandingPage() {
//   return (
//     <html suppressHydrationWarning>
//       <body>
//         <Provider>
//           <div>
//             <h1>Welcome to Konan Le's Portfolio & Blog</h1>
//             <br />
//             <nav>
//               <ul>
//                 <li>
//                   <Link href="/soapbox-blog">Soapbox Blog</Link>
//                 </li>
//                 <li>
//                   <Link href="/project-blog">
//                     Project Blog (UNDER CONSTRUCTION)
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>

//           <HStack>
//             <Button>Click me</Button>
//             <Button>Click me</Button>
//           </HStack>
//         </Provider>
//       </body>
//     </html>
//   );
// }

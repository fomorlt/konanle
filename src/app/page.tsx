// import Link from "next/link";
// // import { Button } from "@/components/ui/button";
// import {
//   Box,
//   Heading,
//   Text,
//   Button,
//   VStack,
//   Highlight,
//   HStack,
// } from "@chakra-ui/react";

// // Define the LandingPage component
// export default function LandingPage() {
//   return (

//     <Box
//       bg="black.100"
//       minHeight="100vh"
//       display="flex"
//       flexDirection="column"
//       justifyContent="center"
//       alignItems="center"
//       p={8}
//     >

//       <Box
//         as="header"
//         bg="gray.900"
//         color="white"
//         px={6}
//         py={4}
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//         position="sticky"
//         top={0}
//         zIndex={10}
//       >
//         <Text fontSize="xl" fontWeight="bold">
//           Konan Le
//         </Text>
//         <HStack>
//           <Link href="https://linkedin.com/in/konan-kd-le">
//             <Text _hover={{ textDecoration: "underline" }}>LinkedIn</Text>
//           </Link>
//           <Link href="/soapbox-blog">
//             <Text _hover={{ textDecoration: "underline" }}>Blog</Text>
//           </Link>
//           <Link href="https://github.com/fomorlt">
//             <Text _hover={{ textDecoration: "underline" }}>GitHub</Text>
//           </Link>
//         </HStack>
//       </Box>

//       {/* link to the Soapbox */}
//       <Box mt={0}>
//         <Link href="/soapbox-blog">
//           <Button size="lg" colorScheme="teal">
//             Visit My Blog
//           </Button>
//         </Link>
//       </Box>
//     </Box>
//   );
// }

import Link from "next/link";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";

export default function LandingPage() {
  return (
    <Box
      bg="#0B3D91" // Main navy background
      color="white" // White text color
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={8}
    >
      {/* Top Navigation Bar */}
      <Box
        as="header"
        bg="#081F44" // Slightly darker shade for the header
        px={6}
        py={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="sticky"
        top={0}
        w="100%"
        zIndex={10}
      >
        <Text fontSize="xl" fontWeight="bold">
          Konan Le
        </Text>
        <HStack>
          <Link href="https://linkedin.com/in/konan-kd-le" passHref>
            <Text _hover={{ textDecoration: "underline" }}>LinkedIn</Text>
          </Link>
          <Link href="/soapbox-blog" passHref>
            <Text _hover={{ textDecoration: "underline" }}>Blog</Text>
          </Link>
          <Link href="https://github.com/fomorlt" passHref>
            <Text _hover={{ textDecoration: "underline" }}>GitHub</Text>
          </Link>
        </HStack>
      </Box>

      {/* Main Content */}
      <VStack mt={6} w="100%" maxW="4xl" align="stretch">
        {/* About Me Section */}
        <Box bg="#0D2955" p={6} borderRadius="md">
          <Heading size="md" mb={2}>
            About Me
          </Heading>
          <Text>
            I’m currently studying networking and IT skills by preparing for the
            CCNA exam, pursuing a real estate license, and dabbling with EDA
            tools. Please check out my blog for updates on all of that!
          </Text>
        </Box>

        {/* Companies Section */}
        <Box bg="#0D2955" p={6} borderRadius="md">
          <Heading size="md" mb={4}>
            Companies I&apos;ve Worked For
          </Heading>
          <HStack>
            {/* Acronics */}
            <VStack>
              <Image
                src="https://acronics.com/wp-content/uploads/2018/11/acronicslogo.jpg"
                alt="Acronics Logo"
                boxSize="200px"
                objectFit="fill"
                borderRadius="md"
              />
              <Text>Acronics</Text>
            </VStack>
            {/* Do Le CPA & Company */}
            <VStack>
              <Image
                src="https://img1.wsimg.com/isteam/ip/0a99d5ef-7583-4cc5-9a09-6d1721069ac6/Logoemail11.JPG/:/rs=h:1000,cg:true,m"
                alt="Do Le CPA & Company Logo"
                boxSize="200px"
                objectFit="fill"
                borderRadius="md"
              />
              <Text>Do Le CPA &amp; Company</Text>
            </VStack>
          </HStack>
        </Box>

        {/* Skills Section (Horizontal scroll) */}
        <Box bg="#0D2955" p={6} borderRadius="md">
          <Heading size="md" mb={4}>
            Skills
          </Heading>
          {/* The container for horizontal scrolling */}
          <Box overflowX="auto" whiteSpace="nowrap">
            <HStack>
              {/* Example Skill */}
              <VStack minW="100px">
                <Image
                  src="https://via.placeholder.com/80?text=JS"
                  alt="JavaScript"
                  boxSize="80px"
                  objectFit="cover"
                />
                <Text textAlign="center">JavaScript</Text>
              </VStack>

              {/* Example Skill */}
              <VStack minW="100px">
                <Image
                  src="https://via.placeholder.com/80?text=HTML5"
                  alt="HTML5"
                  boxSize="80px"
                  objectFit="cover"
                />
                <Text textAlign="center">HTML5</Text>
              </VStack>

              {/* Example Skill */}
              <VStack minW="100px">
                <Image
                  src="https://via.placeholder.com/80?text=C%2B%2B"
                  alt="C++"
                  boxSize="80px"
                  objectFit="cover"
                />
                <Text textAlign="center">C++</Text>
              </VStack>

              {/* Example Skill */}
              <VStack minW="100px">
                <Image
                  src="https://via.placeholder.com/80?text=Python"
                  alt="Python"
                  boxSize="80px"
                  objectFit="cover"
                />
                <Text textAlign="center">Python</Text>
              </VStack>
              {/* Add more skills as needed */}
            </HStack>
          </Box>
        </Box>

        {/* Link to the Soapbox (Blog) */}
        <Box textAlign="center">
          <Link href="/soapbox-blog" passHref>
            <Button size="lg" colorScheme="teal" variant="solid">
              Visit My Blog
            </Button>
          </Link>
        </Box>
      </VStack>
    </Box>
  );
}

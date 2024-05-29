import { Box, Container, VStack, Text, Image, Heading, SimpleGrid, Link, Flex, Spacer, HStack, IconButton, Input } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with high-end features",
    price: "$699",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: "$999",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stylish smartwatch with various features",
    price: "$199",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$299",
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="gray.800" color="white" py={4}>
        <Flex align="center" px={4}>
          <Heading size="lg">ElectroShop</Heading>
          <Spacer />
          <HStack spacing={4}>
            <Link href="#">Home</Link>
            <Link href="#">Products</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Contact Us</Link>
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              bg="white"
              color="black"
              borderRadius="md"
              px={4}
              py={2}
            />
          </HStack>
        </Flex>
      </Box>
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8}>
          <Heading>Welcome to ElectroShop</Heading>
          <Text>Find the best electronic products here!</Text>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {filteredProducts.map((product) => (
              <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Image src={product.image} alt={product.name} />
                <Heading size="md" mt={4}>{product.name}</Heading>
                <Text mt={2}>{product.description}</Text>
                <Text fontWeight="bold" mt={2}>{product.price}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Flex align="center" px={4}>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <Spacer />
          <HStack spacing={4}>
            <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
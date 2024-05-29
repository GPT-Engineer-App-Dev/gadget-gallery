import { Box, Container, VStack, Text, Image, Heading, SimpleGrid, Link, Flex, Spacer, HStack, IconButton, Input, Select } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with high-end features",
    price: 699,
    image: "https://via.placeholder.com/150",
    category: "smartphone",
    brand: "brandA"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for professionals",
    price: 999,
    image: "https://via.placeholder.com/150",
    category: "laptop",
    brand: "brandB"
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stylish smartwatch with various features",
    price: 199,
    image: "https://via.placeholder.com/150",
    category: "smartwatch",
    brand: "brandC"
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: 299,
    image: "https://via.placeholder.com/150",
    category: "headphones",
    brand: "brandA"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRangeFilter, setPriceRangeFilter] = useState([0, 1000]);
  const [brandFilter, setBrandFilter] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    const [min, max] = event.target.value.split("-");
    setPriceRangeFilter([parseInt(min), parseInt(max)]);
  };

  const handleBrandChange = (event) => {
    setBrandFilter(event.target.value);
  };

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
    const matchesPriceRange = product.price >= priceRangeFilter[0] && product.price <= priceRangeFilter[1];
    const matchesBrand = brandFilter ? product.brand === brandFilter : true;
    return matchesCategory && matchesPriceRange && matchesBrand && product.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

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
          <HStack spacing={4} mb={4}>
            <Select placeholder="Select category" value={categoryFilter} onChange={handleCategoryChange}>
              <option value="smartphone">Smartphone</option>
              <option value="laptop">Laptop</option>
              <option value="smartwatch">Smartwatch</option>
              <option value="headphones">Headphones</option>
            </Select>
            <Select placeholder="Select price range" value={priceRangeFilter.join("-")} onChange={handlePriceRangeChange}>
              <option value="0-200">$0 - $200</option>
              <option value="200-500">$200 - $500</option>
              <option value="500-1000">$500 - $1000</option>
            </Select>
            <Select placeholder="Select brand" value={brandFilter} onChange={handleBrandChange}>
              <option value="brandA">Brand A</option>
              <option value="brandB">Brand B</option>
              <option value="brandC">Brand C</option>
            </Select>
          </HStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {filteredProducts.map((product) => (
              <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Image src={product.image} alt={product.name} />
                <Heading size="md" mt={4}>{product.name}</Heading>
                <Text mt={2}>{product.description}</Text>
                <Text fontWeight="bold" mt={2}>${product.price}</Text>
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
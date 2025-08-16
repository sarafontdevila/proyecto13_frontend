import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  HStack,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"

const Logo = () => (
  <Flex align="center" gap={2}>
    <Box
      w={8}
      h={8}
      bg="brand.500" 
      borderRadius="md"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="section.darkText" 
      fontWeight="bold"
      fontSize="lg"
    >
      🚛
    </Box>
    <Text fontSize="xl" fontWeight="bold" color="section.darkText"> 
      Tutigruas
    </Text>
  </Flex>
)

const NavLink = ({ children, isActive, onClick }) => (
  <Button
    variant="ghost"
    color={isActive ? "brand.400" : "section.darkText"} 
    _hover={{
      color: "brand.400",
      bg: "gray.800",
    }}
    fontSize="md"
    fontWeight="medium"
    px={4}
    onClick={onClick}
  >
    {children}
  </Button>
)

export default function Header() {
  const [activeLink, setActiveLink] = useState("inicio")
  const { onOpen, onClose } = useDisclosure()

  const navItems = [
    { label: "Inicio", key: "inicio" },
    { label: "Camiones en Stock", key: "stock" },
    { label: "Servicios", key: "servicios" },
    { label: "Contacto", key: "contacto" },
  ]

  const handleNavClick = (key) => {
    setActiveLink(key)
    onClose()
  }

  return (
    <Box
      as="header"
      bg="section.dark" 
      color="section.darkText" 
      py={4}
      position="sticky"
      top={0}
      zIndex={1000}
      borderBottom="1px solid"
      borderColor="gray.700"
    >
      <Container maxW="7xl">
        <Flex justify="space-between" align="center">
          <Logo />

          <HStack gap={1} display={{ base: "none", lg: "flex" }}>
            {navItems.map((item) => (
              <NavLink key={item.key} isActive={activeLink === item.key} onClick={() => handleNavClick(item.key)}>
                {item.label}
              </NavLink>
            ))}
          </HStack>

          <HStack gap={3} display={{ base: "none", lg: "flex" }}>
            <Button
              variant="outline"
              borderColor="section.darkText" 
              color="section.darkText" 
              _hover={{ bg: "section.darkText", color: "section.dark" }} 
              size="sm"
            >
              Login
            </Button>
            <Button
              bg="brand.500" 
              _hover={{ bg: "brand.600" }} 
              color="section.darkText" 
              size="sm"
            >
              Registro
            </Button>
          </HStack>

          <IconButton
            aria-label="Abrir menú"
            icon={<Icon as={GiHamburgerMenu} />}
            variant="ghost"
            color="section.darkText" 
            _hover={{ bg: "gray.800" }}
            display={{ base: "flex", lg: "none" }}
            onClick={onOpen}
          />
        </Flex>
      </Container>
    </Box>
  )
}
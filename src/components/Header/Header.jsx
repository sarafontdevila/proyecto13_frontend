import { useMemo } from "react"
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
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../customHook/useAuth";
import MobileMenu from "../MobileMenu/MobileMenu.jsx"

const Logo = () => (
  <Link to="/">
    <Flex align="center" gap={2} cursor="pointer">
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
  </Link>
)

const NavLink = ({ children, to, isActive }) => (
  <Link to={to}>
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
    >
      {children}
    </Button>
  </Link>
)

export default function Header() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const location = useLocation()
  const navigate = useNavigate();

  const { user, logout, loading } = useAuth();
  const isLoggedIn = !!user && !loading
  const isAdmin = user?.rol=== "admin"

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const ItemsVisibles = useMemo(()=>([
    { label: "Inicio", path: "/" },
    { label: "Camiones en Stock", path: "/stock" },
    { label: "Servicios", path: "/servicios" },
    { label: "Contacto", path: "/contacto" },
  ]), [])

  const navItems = useMemo (() =>([
    ...ItemsVisibles,
    ...(isLoggedIn ? [ { label: "Mi Espacio", path:"/miespacio"}]: [])
  ]), [ItemsVisibles, isLoggedIn])
  
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
              <NavLink 
                key={item.path} 
                to={item.path}
                isActive={location.pathname === item.path}
              >
                {item.label}
              </NavLink>
            ))}
          </HStack>

          <HStack gap={3} display={{ base: "none", lg: "flex" }}>
            {isLoggedIn ? (
              <Button
          
                color="section.lightText"
                _hover={{ bg: "brand.600" }}
                size="sm"
                onClick={handleLogout}
              >
                Cerrar Sesión
              </Button>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="outline"
                    borderColor="section.darkText"
                    color="section.darkText"
                    _hover={{ bg: "section.darkText", color: "section.dark" }}
                    size="sm"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    bg="brand.500"
                    _hover={{ bg: "brand.600" }}
                    color="section.darkText"
                    size="sm"
                  >
                    Registro
                  </Button>
                </Link>
              </>
            )}
          </HStack>

          <IconButton
            aria-label="Abrir menú"
            icon={<Icon as={GiHamburgerMenu} />}
            variant="ghost"
            color="section.darkText" 
            text= "Menu"
            _hover={{ bg: "gray.800" }}
            display={{ base: "flex", lg: "none" }}
            onClick={onOpen}
          />
        </Flex>
      </Container>
      <MobileMenu isOpen={isOpen} onClose={onClose} navItems={navItems} />
    </Box>
  )
}
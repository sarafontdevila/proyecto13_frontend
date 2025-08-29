import { VStack, Button, Divider } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

export default function MobileMenu({ isOpen, onClose, navItems, isLoggedIn, handleLogout  }) {
  if (!isOpen) return null 

  return (
    <VStack
      bg="section.dark"
      color="section.darkText"
      p={4}
      spacing={3}
      align="stretch"
    >
      {navItems.map((item) => (
        <Button
          key={item.path}
          as={RouterLink}
          to={item.path}
          variant="ghost"
          justifyContent="flex-start"
          color="section.darkText"
          _hover={{ bg: "brand.500", color: "white" }}   
          fontWeight="medium"  
          onClick={onClose}
        >
          {item.label}
        </Button>
      ))}
      <Divider borderColor="gray.700" />
      {isLoggedIn ? (
        <Button
          onClick={() => {
            handleLogout()
            onClose()
          }}
          bg="buttonBg"
          color="buttonText"
          _hover={{ bg: "brand.600" }}
          fontWeight="medium"
        >
          Cerrar Sesión
        </Button>
      ) : (
        <>
          <Button
            as={RouterLink}
            to="/login"
            onClick={onClose}
            variant="outline"
            borderColor="section.darkText"
            color="section.darkText"
            _hover={{ bg: "section.darkText", color: "section.dark" }}
            fontWeight="medium"
          >
            Login
          </Button>
          <Button
            as={RouterLink}
            to="/register"
            onClick={onClose}
            bg="buttonBg"
            color="buttonText"
            _hover={{ bg: "brand.600" }}
            fontWeight="medium"
          >
            Registro
          </Button>
        </>
      )}
    </VStack>
  )
}
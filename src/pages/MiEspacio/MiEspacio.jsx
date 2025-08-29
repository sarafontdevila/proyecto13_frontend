import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Spinner, Center, Text } from "@chakra-ui/react";
import VistaCompra from "../../components/VistaCompra/VistaCompra.jsx";
import VistaVenta from "../../components/VistaVenta/VistaVenta.jsx";
import { useAuth} from "../../customHook/useAuth";

export default function MiEspacio() {
  const { user, loading: authLoading } = useAuth();
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const isAdmin = user?.rol === "admin";

  useEffect(() => {
    if (authLoading) return;
    const fetchVentas = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("http://localhost:3000/api/v1/ventas", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setVentas(data || []);
      } catch (error) {
        console.error("Error cargando ventas:", error);
        setVentas([]);
      } finally {
        setLoading(false);
      }
    };
    fetchVentas();
  }, [authLoading, isAdmin]);

  if (authLoading ||loading) return <Spinner size="xl" />;
  if (!user) {
    return (
      <Center minH="50vh">
        <Text>No estás autenticado.</Text>
      </Center>
    );
  }

  return (
    <Box p={6} pt={10} minH="100vh" bg="section.light">
      {isAdmin ? (
        <VistaVenta ventas={ventas} loading={loading}/>
      ) : (
        <VistaCompra ventas={ventas} />
      )}
    </Box>
  );
}

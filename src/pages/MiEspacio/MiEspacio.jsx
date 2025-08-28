import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Spinner } from "@chakra-ui/react";
import VistaCompra from "../../components/VistaCompra/VistaCompra.jsx";
import VistaVenta from "../../components/VistaVenta/VistaVenta.jsx";

export default function MiEspacio() {
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const isAdmin = user.rol === "admin";

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/ventas", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setVentas(res.data || []);
      } catch (error) {
        console.error("Error cargando ventas:", error);
        setVentas([]);
      } finally {
        setLoading(false);
      }
    };
    fetchVentas();
  }, []);

  if (loading) return <Spinner size="xl" />;

  return (
    <Box p={6} pt={10} minH="100vh" bg="section.light">
      {isAdmin ? (
        <VistaVenta ventas={ventas} />
      ) : (
        <VistaCompra ventas={ventas} />
      )}
    </Box>
  );
}

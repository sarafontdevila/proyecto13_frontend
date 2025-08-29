import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.js";

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return ctx;
};
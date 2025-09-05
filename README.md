🚛 Plataforma de Gestión de Camiones Grúa – Frontend

Este repositorio contiene el **frontend** de la plataforma de camiones grúa.  
Permite a los usuarios explorar productos (camiones grúa), autenticarse, realizar compras y visualizar sus ventas en  "mi espacio". Los administradores pueden gestionar productos, usuarios y todas las ventas y verlas en "mi espacio".

---

## 🚀 Características
- **Home**: listado de camiones grúa disponibles.
- **Usuarios autenticados**:
  - Comprar productos.
  - Ver historial de compras propias.
- **Administradores**:
  - Crear, actualizar y eliminar productos.
  - Gestionar usuarios.
  - Ver todas las ventas registradas.

---

## 🛠️ Tecnologías
- **Frontend**: React
- **Estilos**: Chakra 
- **Comunicación con backend**: fetch API/axios  
- **Seguridad**: CORS (desde backend)  

---

## 🔧 Instalación
```bash
git clone https://github.com/sarafontdevila/proyecto13_frontend.git
cd proyecto13_frontend
npm install
npm run dev

📋 Flujo de la App

Pantalla principal (Home): muestra tres camiones grúa y ofrece al usuario rellenar formulario para pedir o ir al listado de camiones en venta

Registro e inicio de sesión: autenticación vía JWT con backend.

Gestión de productos:

Usuarios → consultar productos y comprarlos. Tiene "mi espacio" para consultar compras.

Admin → crear, editar y eliminar productos. Tiene "mi espacio" para crear producto y ver listado de ventas. Tambien pueden borrar o editar en la ficha  de producto en el inventario 

Gestión de ventas:

Usuarios → comprar productos y consultar sus compras.

Admin → ver todas las ventas.

Gestión de usuarios (solo admin).

📄 Licencia
Copyright © 2025 Sara Fontdevila

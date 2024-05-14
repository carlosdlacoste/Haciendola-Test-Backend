# Backend de la Aplicación de Gestión de Usuarios y Productos

Este es el backend de una aplicación de gestión de usuarios y productos, desarrollado en Node.js con Express y Sequelize ORM. Proporciona una API RESTful para la gestión de usuarios y productos, incluyendo autenticación de usuarios y encriptación de contraseñas.

## Requisitos

- Node.js
- PostgreSQL
- bcrypt
- jsonwebtoken
- sequelize
- express
- xlsx

## Instalación

1. Clona este repositorio en tu máquina local:

    git clone https://github.com/carlosdlacoste/Haciendola-Test-Backend.git

2. Instala las dependencias del proyecto:

    npm install

## Configuración de la Base de Datos

1. Crea una base de datos PostgreSQL en tu servidor local o en la nube.

2. Abre el archivo `utils/db.js` y configura los parámetros de conexión a tu base de datos PostgreSQL.

```javascript function
const sequelize = new Sequelize({
    dialect: 'postgres',
    database: 'db-name',
    username: 'tu usuario',
    password: 'tu contraseña',
    host: 'localhost',
    port: 5432,
});

```

## Ejecución del Servidor

1. Ejecuta el siguiente comando para iniciar el servidor:

    node .\src\server.js

    El servidor se ejecutará en http://localhost:3000 por defecto.

## Uso de la API

### Autenticación de Usuarios

1. Crear un Nuevo Usuario

    POST /api/users
    Crea un nuevo usuario en la base de datos.

2. Iniciar Sesión (Autenticar Usuario)

    POST /api/auth/login
    Inicia sesión con un usuario existente y devuelve un token de autenticación.

### Gestión de Productos
1. Crear un Nuevo Producto

    POST /api/products

    Crea un nuevo producto en la base de datos.

2. Obtener Todos los Productos

    GET /api/products

    Obtiene todos los productos de la base de datos.

3. Obtener un Producto por ID

    GET /api/products/:id

    Obtiene un producto específico por su ID.

4. Actualizar un Producto por ID

    PUT /api/products/:id

    Actualiza un producto específico por su ID.

5. Eliminar un Producto por ID

    DELETE /api/products/:id

    Elimina un producto específico por su ID.


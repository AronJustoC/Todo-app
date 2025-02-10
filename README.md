# PERN To-Do App

Este es un proyecto de aplicación de tareas (To-Do App) construido con el stack PERN (PostgreSQL, Express, React, Node.js). Permite a los usuarios gestionar sus tareas con autenticación, almacenamiento en base de datos y una interfaz moderna.

## Tecnologías utilizadas

- **PostgreSQL**: Base de datos relacional para almacenar usuarios y tareas.
- **Express.js**: Framework backend para manejar la API y autenticación.
- **React.js**: Frontend interactivo para la gestión de tareas.
- **Node.js**: Entorno de ejecución para el servidor.
- **React-Cookie**: Manejo de autenticación mediante cookies.
- **JWT (JSON Web Token)**: Seguridad y gestión de sesiones de usuario.

## Características

- Autenticación de usuarios (Registro y Login).
- Gestión de tareas (Crear, Leer, Actualizar y Eliminar - CRUD).
- Persistencia de datos en PostgreSQL.
- Manejo de cookies para autenticación.
- Diseño responsivo y moderno con React.

## Instalación

### Prerrequisitos
- Tener instalado [Node.js](https://nodejs.org/) y [PostgreSQL](https://www.postgresql.org/).
- Configurar un archivo `.env` en el backend con las credenciales de la base de datos y la clave secreta para JWT.

### Clonar el repositorio
```sh
 git clone https://github.com/AronJustoC/Todo-app
 cd pern-todo-app
```

### Instalación del Backend
```sh
 cd server
 npm install
```

### Configuración de la Base de Datos
Ejecutar las migraciones o scripts SQL en PostgreSQL para crear las tablas necesarias.
```sh
 psql -U tu_usuario -d tu_base_de_datos -f database/schema.sql
```

### Iniciar el Backend
```sh
 npm run start
```

### Instalación del Frontend
```sh
 cd ../client
 npm install
```

### Iniciar el Frontend
```sh
 npm run dev
```

## Uso
1. Accede a la aplicación en el navegador (`http://localhost:5173` o el puerto configurado en Vite).
2. Regístrate o inicia sesión.
3. Agrega, edita y elimina tareas.





# AS241S5_PRS4_SISCARITAS

Sistema de Gestión Integral - SisCaritas

## 📋 Descripción

Frontend desarrollado en Angular 17+ para el sistema de gestión integral SisCaritas. Este proyecto consume microservicios para la gestión de:

- 👥 **Usuarios** (ms-users)
- 🏥 **Pacientes** (ms-patients)
- 👨‍⚕️ **Doctores** (ms-doctors)
- 💊 **Medicamentos** (ms-medications)
- 📦 **Productos** (ms-products)
- 🚚 **Proveedores** (ms-suppliers)
- 🩺 **Especialidades** (ms-specialties)

## 🏗️ Arquitectura

```
AS241S5_PRS4_SISCARITAS/
├── src/
│   ├── app/
│   │   ├── core/                    # Servicios singleton, guards, interceptors
│   │   │   ├── services/            # Servicios HTTP para cada microservicio
│   │   │   ├── guards/              # auth.guard, role.guard
│   │   │   ├── interceptors/        # token.interceptor, error.interceptor
│   │   │   └── models/              # Interfaces y modelos TypeScript
│   │   ├── shared/                  # Componentes, pipes, directivas reutilizables
│   │   │   ├── components/          # navbar, sidebar, modal, data-table
│   │   │   ├── pipes/               # date-format, role-label
│   │   │   └── directives/          # has-role
│   │   ├── layouts/                 # Contenedores de layout
│   │   │   ├── admin-layout/        # Layout con sidebar y navbar
│   │   │   └── public-layout/       # Layout para login
│   │   ├── features/                # Módulos por funcionalidad (lazy loaded)
│   │   │   ├── dashboard/
│   │   │   ├── users/
│   │   │   ├── patients/
│   │   │   ├── doctors/
│   │   │   ├── medications/
│   │   │   ├── products/
│   │   │   ├── suppliers/
│   │   │   └── specialties/
│   │   ├── app.routes.ts            # Rutas con lazy loading y guards
│   │   └── app.config.ts            # Configuración de providers
│   └── environments/                # Variables de entorno
└── angular.json
```

## 🚀 Tecnologías

- **Angular 17+** - Framework principal
- **TypeScript** - Lenguaje de programación
- **SCSS** - Preprocesador CSS
- **RxJS** - Programación reactiva
- **Standalone Components** - Arquitectura moderna de Angular

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm start

# Build producción
npm run build

# Tests
npm test
```

## 🔧 Configuración

### Environments

Configurar las URLs de los microservicios en:

- `src/environments/environment.ts` (desarrollo)
- `src/environments/environment.prod.ts` (producción)

```typescript
export const environment = {
  production: false,
  services: {
    users: 'http://localhost:8081',
    suppliers: 'http://localhost:8082',
    patients: 'http://localhost:8083',
    doctors: 'http://localhost:8084',
    medications: 'http://localhost:8085',
    products: 'http://localhost:8086',
    specialties: 'http://localhost:8087'
  }
};
```

## 🔐 Autenticación

El sistema utiliza JWT (JSON Web Tokens) para autenticación:

- **Token Interceptor**: Inyecta automáticamente el token en cada request
- **Error Interceptor**: Maneja errores 401/403 y redirige al login
- **Auth Guard**: Protege rutas que requieren autenticación
- **Role Guard**: Protege rutas según el rol del usuario

### Roles disponibles:

- `SUPER_ADMIN` - Acceso total al sistema
- `ORG_ADMIN` - Administrador de organización
- `DOCTOR` - Médico
- `NURSE` - Enfermera
- `PHARMACIST` - Farmacéutico
- `SUPPLIER` - Proveedor
- `TEACHER` - Profesor
- `STUDENT` - Estudiante
- `PARENT` - Padre/Tutor

## 📱 Características

### Core Features

- ✅ Autenticación JWT
- ✅ Guards por rol
- ✅ Interceptors HTTP
- ✅ Manejo centralizado de errores
- ✅ Lazy loading de módulos
- ✅ Standalone components

### Módulos Funcionales

- **Dashboard**: Panel de control con estadísticas
- **Usuarios**: CRUD de usuarios con roles
- **Pacientes**: Gestión de pacientes e historial médico
- **Doctores**: Gestión de doctores y horarios
- **Medicamentos**: Control de inventario y prescripciones
- **Productos**: Catálogo de productos
- **Proveedores**: Gestión de proveedores
- **Especialidades**: Especialidades médicas

## 🎨 Estilos

El proyecto utiliza SCSS con una paleta de colores consistente:

- **Primary**: #3498db (Azul)
- **Success**: #2ecc71 (Verde)
- **Danger**: #e74c3c (Rojo)
- **Warning**: #f39c12 (Naranja)
- **Dark**: #2c3e50 (Gris oscuro)

## 📝 Convenciones

### Nomenclatura

- **Components**: `kebab-case` (user-list.component.ts)
- **Services**: `kebab-case` (user.service.ts)
- **Guards**: `kebab-case` (auth.guard.ts)
- **Models**: `PascalCase` (user.model.ts)
- **Interfaces**: `PascalCase` (User, Patient, Doctor)

### Estructura de archivos

```
feature/
├── feature-list/
│   ├── feature-list.component.ts
│   ├── feature-list.component.html
│   └── feature-list.component.scss
└── feature-form/
    ├── feature-form.component.ts
    ├── feature-form.component.html
    └── feature-form.component.scss
```

## 🔗 Microservicios Backend

| Microservicio | Puerto | Base de Datos | Responsable |
|--------------|--------|---------------|-------------|
| ms-users | 8081 | MongoDB | JESUS SANCHEZ |
| ms-suppliers | 8082 | PostgreSQL | MARYLIN VILCAPUMA |
| ms-patients | 8083 | MongoDB | MARCO INFANTE |
| ms-doctors | 8084 | PostgreSQL | JESUS HUARIPAUCAR |
| ms-medications | 8085 | MongoDB | LUIS RIVAS / LIONEL HUAMANI |
| ms-products | 8086 | PostgreSQL | ASUMI PEÑAFIEL |
| ms-specialties | 8087 | MongoDB | ALONSO SAAVEDRA VICENTE |

## 👥 Equipo

**Proyecto**: AS241S5_PRS4_SISCARITAS  
**Curso**: Programación de Servicios  
**Institución**: [Tu institución]

## 📄 Licencia

Este proyecto es privado y de uso exclusivo para fines académicos.

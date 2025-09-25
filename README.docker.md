# Docker

Este proyecto usa Vite para construir una SPA React. El Dockerfile incluido es multi-stage: construye los assets con Node y sirve los archivos estáticos con nginx:alpine para mantener la imagen final ligera.

Construir la imagen (desde la raíz del repo):

```powershell
docker build -t bowl-harmony-catalog:latest .
```

Ejecutar contenedor:

```powershell
docker run --rm -p 8080:80 bowl-harmony-catalog:latest
```

Notas:
- El Dockerfile intenta usar cache de dependencias copiando `package.json` y lockfiles primero.
- Si usas `bun` o `pnpm` ajusta los pasos de instalación: el archivo actual usa `npm ci` si existe `package-lock.json`.
- Para desarrollo local prefiere `npm run dev` en host o usar una imagen con `node` y `vite` en modo dev.

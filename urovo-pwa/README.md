# LogEnvios PWA — Instrucciones de instalación

## Archivos del proyecto
- index.html — app principal
- manifest.json — configuración PWA
- sw.js — service worker (offline)
- icon-192.png / icon-512.png — íconos

---

## Opción A — Hosting en Google Drive (más simple)

1. Subí todos los archivos a una carpeta pública de Google Drive
2. Usá un servicio como https://drv.tw para generar una URL pública
3. Abrí esa URL en Chrome del UROVO

---

## Opción B — Hosting propio (recomendado)

Necesitás un servidor web con HTTPS. Opciones gratuitas:

### Netlify (más fácil)
1. Andá a https://netlify.com y creá una cuenta gratuita
2. Arrastrá la carpeta completa al panel de Netlify
3. Te da una URL tipo https://logenvios.netlify.app
4. Abrí esa URL en el UROVO

### GitHub Pages
1. Creá un repo en GitHub
2. Subí los archivos
3. En Settings → Pages → activá desde main branch
4. URL: https://tuusuario.github.io/logenvios

---

## Instalar en el UROVO

1. Abrí Chrome en el UROVO
2. Navegá a la URL de la app
3. Chrome muestra un banner "Agregar a pantalla de inicio" — tap
4. La app aparece como ícono en el launcher del UROVO
5. Desde ese momento funciona como app nativa

---

## Configuración de Google Drive API

Para que la app pueda guardar en Drive necesitás agregar el dominio
donde está hosteada como URI autorizado en Google Cloud Console:

1. Andá a console.cloud.google.com → proyecto UROVO LogEnvios
2. APIs y servicios → Credenciales → UROVO LogEnvios Android
3. En "Orígenes de JavaScript autorizados" agregá la URL de tu hosting
4. Guardá

---

## Primer uso

Al abrir la app por primera vez:
1. Seleccioná una logística
2. Tocá "Iniciar escaneo"
3. Google te pide autorización para acceder a Drive y Gmail — aceptá
4. Listo

La autorización se guarda y no vuelve a pedirla.

---

## Actualizar la app

Si hay cambios, simplemente reemplazá el index.html en el hosting.
La próxima vez que el UROVO tenga WiFi, la app se actualiza sola.

App: UROVO LogEnvios PWA
Logísticas:
1. Colecta - barras - lectura directa
2. Flex - QR - extraer valor de campo "id" en JSON {"id":"VALOR",...}
3. Envio Pack - barras - extraer antes del primer "-"
4. Moova - QR - extraer antes del primer "-"
5. OCA - QR - extraer antes del primer "-"

Google Drive folder ID: 1HSgbQbYgdYm2sqeF0a-g_lsLOTS9m6F9
OAuth client_id: 551110610187-f2gkcqe9e69766qshnh3m58421aoe3e9.apps.googleusercontent.com
Mail destino: info@lafranco.com.ar

Flujo:
- Seleccionar logística → escanear → cierre manual → guardar Drive + mail
- Offline obligatorio (IndexedDB)
- Duplicado: sonido error + vibración + no suma
- Correcto: sonido ok + suma

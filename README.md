# restaurantes.ecuanomia.com

Benchmark gratuito para dueños de restaurantes en Ecuador. El usuario ingresa sus costos de un mes y se compara con 821 restaurantes formales (Supercias 2025) y con la estructura de costos del INEC (ENESEM 2024). El diagnóstico completo se desbloquea con datos de contacto, y la sección de proveedores con WhatsApp y correo.

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app completa. Los datos de referencia van incluidos dentro del archivo. |
| `CNAME` | Dominio propio para GitHub Pages. |
| `apps_script.gs` | Código para guardar los contactos en Google Sheets. |
| `embed_ghost.html` | Código para pegar en una tarjeta HTML de Ghost. |

## Puesta en marcha

1. Crea un repositorio público en GitHub (por ejemplo `restaurantes`) y sube estos archivos.
2. **Settings → Pages:** *Deploy from a branch*, rama `main`, carpeta `/ (root)`.
3. En GoDaddy, DNS de ecuanomia.com, agrega un registro `CNAME`: nombre `restaurantes`, valor `TU-USUARIO.github.io`.
4. En **Settings → Pages → Custom domain** escribe `restaurantes.ecuanomia.com`. Cuando aparezca el check verde, activa *Enforce HTTPS*.
5. Configura Google Sheets con `apps_script.gs` (instrucciones dentro del archivo) y pega la URL en `index.html`, constante `LEADS_URL`.
6. En Ghost, crea una página con una tarjeta HTML y pega `embed_ghost.html`.

## Datos

- Supercias, estados financieros 2025: restaurantes CIIU I5610 con ventas mayores a $100 mil. Utilidad declarada y ventas por empleado.
- INEC, Encuesta Estructural Empresarial 2024: comida, personal, arriendo y servicios como % de ventas (40 restaurantes medianos y grandes).

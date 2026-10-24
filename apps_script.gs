// Google Apps Script: guarda en una hoja de cálculo los contactos que deja la gente en restaurantes.ecuanomia.com
// 1. Crea una hoja de Google Sheets llamada "Leads restaurantes".
// 2. Extensiones -> Apps Script. Borra lo que haya y pega este código.
// 3. Implementar -> Nueva implementación -> Tipo: Aplicación web.
//    Ejecutar como: Yo. Quién tiene acceso: Cualquier usuario.
// 4. Copia la URL que termina en /exec y pégala en index.html, en la constante LEADS_URL.

const COLUMNAS = ['fecha','fuente','nombre','restaurante','whatsapp','email','ciudad','tipo',
  'aportaNumeros','ventas','comida','personal','arriendo','servicios','otros','empleados','pedido','consentimiento','pagina'];

function doPost(e) {
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (hoja.getLastRow() === 0) hoja.appendRow(COLUMNAS);
  const d = JSON.parse(e.postData.contents || '{}');
  const n = d.numeros || {};
  const fila = COLUMNAS.map(function (c) {
    if (['ventas','comida','personal','arriendo','servicios','otros','empleados'].indexOf(c) >= 0) return n[c] === undefined ? '' : n[c];
    const v = d[c];
    return v === undefined || v === null ? '' : String(v).slice(0, 300);
  });
  hoja.appendRow(fila);
  return ContentService.createTextOutput('ok');
}

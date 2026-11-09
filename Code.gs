// Google Apps Script — receptor simple para el prototipo Escuadrón Verificador
const SPREADSHEET_ID = "PEGA_AQUI_EL_ID_DE_TU_HOJA";
const SHEET_NAME = "Respuestas";

function setup() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow(["Fecha de recepción","Alias/código","Modalidad","Integrantes","Nivel sugerido",
      "Diagnóstico","Desafíos correctos","Credibilidad final","Viralidad simulada",
      "Modo sin tiempo","Conclusión","Duración (segundos)","Registro JSON"]);
  }
}

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) { setup(); sh = ss.getSheetByName(SHEET_NAME); }
  sh.appendRow([
    new Date(), data.alias || "", data.modalidad || "", data.integrantes || 1,
    data.nivelSugerido || "", data.diagnostico || "", data.desafiosCorrectos || "",
    data.credibilidadFinal ?? "", data.viralidadSimuladaFinal ?? "",
    data.modoSinTiempo ? "Sí" : "No", data.conclusion || "",
    data.tiempoSegundos ?? "", JSON.stringify(data)
  ]);
  return ContentService.createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}

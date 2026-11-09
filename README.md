# Escuadrón Verificador — prototipo inicial

## Contenido
- `index.html`: simulador autocontenido (HTML, CSS y JavaScript).
- `apps-script/Code.gs`: receptor opcional para registrar resultados en Google Sheets.

## Ejecutar localmente
Abre `index.html` en un navegador actualizado. No requiere instalación ni servidor.
La lectura en voz alta utiliza la función de síntesis de voz del navegador; su disponibilidad depende del dispositivo y sus voces instaladas.

## Publicar en GitHub Pages
1. Crea un repositorio en GitHub, por ejemplo `escuadron-verificador`.
2. Sube `index.html` a la raíz del repositorio.
3. En **Settings → Pages**, selecciona **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
4. Guarda y espera la publicación. GitHub mostrará la URL del sitio.

## Registro de resultados
El simulador permite descargar cada informe en JSON y CSV. Para activar Google Sheets:
1. Crea una hoja de cálculo y abre **Extensiones → Apps Script**.
2. Copia el contenido de `apps-script/Code.gs` al editor.
3. En el código, reemplaza `PEGA_AQUI_EL_ID_DE_TU_HOJA` por el ID de la hoja.
4. Ejecuta `setup` una vez y autoriza el acceso. La pestaña `Respuestas` se creará automáticamente.
5. Implementa como **Aplicación web**: ejecutar como tú; acceso según las políticas de tu institución/cuenta. Para una actividad escolar, acuerda previamente el acceso con el administrador.
6. Copia la URL de la aplicación web terminada en `SHEETS_WEB_APP_URL` al inicio del bloque JavaScript de `index.html`.
7. Vuelve a subir `index.html` a GitHub.

El envío desde el navegador usa `no-cors`: el simulador no puede confirmar la respuesta de Google. Comprueba en la hoja que el registro llegó. Si la política institucional impide una aplicación web pública, utiliza por ahora la descarga CSV/JSON y carga manual.

## Privacidad y uso
- No solicita nombres completos ni correos.
- Utiliza alias/códigos de equipo; evita datos que identifiquen a estudiantes.
- Los resultados permanecen en el dispositivo hasta descargarlos o enviarlos a la hoja.
- La hoja de cálculo debe tener acceso restringido y cumplir las normas de protección de datos del establecimiento.
- Los datos de viralidad y la noticia son ficticios y solo tienen finalidad didáctica.

## Alcance del prototipo 0.1
Incluye pantalla de inicio, instrucciones, modalidad individual/equipo, diagnóstico orientador de tres preguntas, apoyos de lectura, lectura opcional en voz alta, glosario, tres desafíos de Caso 1, pistas, ejemplo modelado, medidores, conclusión y exportación de resultados.
Queda para iteraciones posteriores: casos 2–4, tablero docente consolidado, coevaluación/Padlet, multimedia de lanzamiento, gestión de roles rotativos y una evaluación más extensa de la escritura argumentativa.

## Nota pedagógica
El nivel diagnóstico es una orientación basada en tres ítems creados para el prototipo; no es una medición estandarizada ni debe utilizarse para etiquetar estudiantes. La retroalimentación y los apoyos deben ser mediados por el docente.

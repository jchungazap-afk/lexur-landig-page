const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const HTMLToDOCX = require('html-to-docx');
const puppeteer = require('puppeteer');

async function convert() {
  const mdPath = 'C:\\Users\\JEFFERSON\\.gemini\\antigravity\\brain\\f962c17c-05b8-49c7-9601-a7cabbf4ea05\\landing_web_documentation.md';
  const docxPath = 'F:\\LUXER CORP\\landing_web_documentation.docx';
  const pdfPath = 'F:\\LUXER CORP\\landing_web_documentation.pdf';

  const mdContent = fs.readFileSync(mdPath, 'utf-8');
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Documentación QA</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; color: #333; }
        h1, h2, h3 { color: #0A1E45; }
        code { background: #f4f4f4; padding: 2px 5px; border-radius: 4px; font-family: monospace; }
        pre { background: #f4f4f4; padding: 15px; border-radius: 8px; overflow-x: auto; }
        table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
      </style>
    </head>
    <body>
      ${marked.parse(mdContent)}
    </body>
    </html>
  `;

  // DOCX
  console.log('Generando DOCX...');
  const docxBuffer = await HTMLToDOCX(htmlContent, null, {
    table: { row: { cantSplit: true } },
    footer: true,
    pageNumber: true
  });
  fs.writeFileSync(docxPath, docxBuffer);
  console.log(`Guardado DOCX en: ${docxPath}`);

  // PDF
  console.log('Generando PDF...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
  await page.pdf({ path: pdfPath, format: 'A4', printBackground: true, margin: { top: '2cm', right: '2cm', bottom: '2cm', left: '2cm' } });
  await browser.close();
  console.log(`Guardado PDF en: ${pdfPath}`);
}

convert().catch(console.error);

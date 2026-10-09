/**
 * Archivos del logo (Manual de identidad LEXUR v2 · §13 Archivos).
 * Copia la carpeta svg/ del paquete de marca a /public/brand/ con estos nombres
 * (o cambia las rutas aquí). Si un archivo no existe, el sitio usa el logo anterior.
 */
export const BRAND_LOGO = {
  /** Horizontal a color: sobre fondos claros */
  horizontal: "/brand/lexur-horizontal.svg",
  /** Horizontal en negativo: sobre navy y fondos oscuros */
  horizontalNegative: "/brand/lexur-horizontal-negativo.svg",
  /** Símbolo pequeño (hasta 48 px) */
  symbolSmall: "/brand/lexur-simbolo-pequeno.svg",
  /** Respaldo mientras no estén los archivos */
  fallback: "/assets/logo.webp",
};

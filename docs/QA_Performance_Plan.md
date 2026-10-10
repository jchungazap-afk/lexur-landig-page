# Plan de Calidad, Rendimiento y Pruebas (Next.js + Playwright)

Este documento define la estrategia de pruebas automatizadas y los criterios de evaluación de rendimiento y UI/UX para el proyecto **lexurpe-web**. 

## 1. Criterios de Evaluación y Pruebas Automatizadas (Playwright)

El entorno de Playwright configurado en el proyecto se encargará de validar los siguientes pilares técnicos:

### A. Vistas en Múltiples Dispositivos (Responsividad)
Playwright ejecutará matrices de pruebas emulando diferentes viewports y densidades de píxeles:
- **Mobile (Smartphones):** iPhone 13/14/15, Android High-End (375x812, 414x896).
- **Tablets:** iPad (768x1024), iPad Pro (1024x1366).
- **Desktop/Ultrawide:** 1280x720, 1920x1080 y resoluciones 4K.
- **Validación:** Comprobación del Menú Hamburguesa (`Navbar`), apilamiento de grillas (CSS Grid/Flexbox) y que ningún elemento genere *overflow* horizontal.

### B. Formularios y Manejo de Interacciones (Handling)
- **Validación de Entradas:** Pruebas E2E sobre `<ContactSection />` verificando la captura de correos, números y campos requeridos.
- **Manejo de Errores (Error Handling):** Asegurar que se renderizan mensajes de validación al introducir datos erróneos.
- **Estados de Interfaz:** Verificar que los botones muestren el estado `loading` al enviar el formulario (previniendo dobles envíos).

### C. Diseño y Estilos (Visual Regression Testing)
- Comparación de capturas de pantalla (Snapshots) para garantizar la consistencia del sistema de diseño (Colores Precision Dark, tipografías).
- **Accesibilidad:** Pruebas de contraste (`axe-core` + Playwright) y validación de atributos ARIA y navegación por teclado.

---

## 2. Optimización de Rendimiento y Tiempos de Carga

Para asegurar que la experiencia sea fluida y de grado empresarial, se aplican los siguientes criterios:

### A. Compresión y Formato de Imágenes
Se propone una refactorización de las imágenes estáticas (`.png`, `.jpg`):
- **Adopción de formatos Next-Gen:** Conversión de *assets* pesados a **WebP** y **AVIF**, lo cual reduce el tamaño hasta un 60-70% sin pérdida de calidad visual perceptible.
- **Next.js Image Component (`next/image`):** Reemplazar las etiquetas `<img>` clásicas. Esto garantiza:
  - *Lazy-loading* nativo (solo cargan al entrar al viewport).
  - Escaneo y entrega de tamaños responsivos (`srcset`) automáticos.
  - Pre-carga del hero image (`priority=true`) para optimizar el **LCP (Largest Contentful Paint)**.

### B. Soporte para 120Hz (120 FPS / Rendimiento Visual)
Para cumplir con la fluidez requerida de **120 hercios (mhz/Hz)**, especialmente en pantallas premium (ProMotion de Apple, paneles alta tasa de refresco en Android y Desktop):
- **Animaciones por Hardware:** Todas las animaciones (Cinematic Scroll, el `<ParticleField />` y `<LiquidGlassFx />`) usarán `transform` y `opacity` en lugar de alterar propiedades de layout (como `margin` o `top`), forzando al navegador a usar la GPU.
- **requestAnimationFrame (rAF):** Lógica que deba sincronizarse con la pantalla usará el ciclo natural de renderizado para evitar bloqueos y *frame drops* a 120 FPS.
- **CSS `will-change`:** Aplicar optimización `will-change: transform` a los elementos pesados como el fondo y las partículas durante la interacción de scroll, liberando la CPU del cálculo del Main Thread.

### C. Métricas Core Web Vitals (CWV)
1. **LCP (Largest Contentful Paint):** Debe ser menor a 2.5s. El `<Hero />` no debe tener JavaScript que bloquee el render inicial.
2. **FID / INP (Interaction to Next Paint):** Debe ser menor a 200ms. Evitaremos el bloqueo del hilo principal dividiendo las tareas pesadas de los componentes.
3. **CLS (Cumulative Layout Shift):** Cercano a 0. Las imágenes y videos tendrán dimensiones explícitas (`width` y `height`) para evitar saltos en la pantalla al cargar.

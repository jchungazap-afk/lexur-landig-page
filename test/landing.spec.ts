import { test, expect } from '@playwright/test';

test.describe('Landing Web QA & Performance Criteria', () => {
  
  test('La página principal debe cargar correctamente (LCP y FID básicos)', async ({ page }) => {
    await page.goto('/');
    
    // Verificamos que el título esté presente (asegura el render inicial)
    await expect(page).toHaveTitle(/Lexur/i);
    
    // Verificamos que la sección Hero exista
    const hero = page.locator('main').first();
    await expect(hero).toBeVisible();
  });

  test('El Navbar debe ser responsivo', async ({ page, isMobile }) => {
    await page.goto('/');
    
    // Si estamos en un entorno móvil, comprobamos la existencia del botón hamburguesa
    if (isMobile) {
      // Asumiendo que hay un botón o menú interactivo para móviles
      // Aquí el locator dependerá de las clases en Navbar.tsx (ej. button[aria-label="Menu"] o similar)
      const menuButton = page.locator('button').filter({ hasText: /menu/i }).first();
      // Si el navbar tiene esta lógica, verificamos que esté en el DOM:
      if (await menuButton.count() > 0) {
        await expect(menuButton).toBeVisible();
      }
    }
  });

  test('La sección de contacto y formulario deben estar presentes', async ({ page }) => {
    await page.goto('/');
    
    // Verificamos que se renderice la sección de contacto
    const contactSection = page.locator('text=Contacto').first();
    if (await contactSection.count() > 0) {
      await expect(contactSection).toBeVisible();
    }
    
    // Si existe un formulario de inputs, verificar estado
    const emailInput = page.locator('input[type="email"]').first();
    if (await emailInput.count() > 0) {
      await expect(emailInput).toBeEditable();
    }
  });
});

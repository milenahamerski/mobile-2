import { test, expect } from "@playwright/test";

test("clica no botão LET'S GO e espera Welcome Back!", async ({ page }) => {
  await page.goto("http://localhost:8082");

  const botao = page.locator("div.r-cursor-1loqt21", { hasText: "LET'S GO" });
  await expect(botao).toBeVisible({ timeout: 15000 });

  await botao.click();

  const welcome = page.locator("text=Welcome Back!");
  await expect(welcome).toBeVisible({ timeout: 15000 });

  await page.pause();
});

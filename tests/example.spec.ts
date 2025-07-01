import { test, expect } from "@playwright/test";

test.describe("Fluxo LET'S GO + login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:8082");

    const botao = page.locator("div.r-cursor-1loqt21", { hasText: "LET'S GO" });
    await expect(botao).toBeVisible({ timeout: 5000 });
    await botao.click();

    const welcome = page.locator("text=Welcome Back!");
    await expect(welcome).toBeVisible({ timeout: 5000 });
  });

  //? Login com credenciais corretas
  test("login com email e senha corretos", async ({ page }) => {
    await page.fill('input[placeholder="Email"]', "teste@email.com");
    await page.fill('input[placeholder="Password"]', "123456");

    const signInBtn = page.locator(
      'div.r-transitionProperty-1i6wzkk:has-text("SIGN IN")'
    );
    await expect(signInBtn).toBeVisible({ timeout: 5000 });
    await signInBtn.click();

    await expect(page).toHaveURL("http://localhost:8082/users/1", {
      timeout: 5000,
    });
  });

  //? Login com credenciais incorretas
  test("login com email e senha incorretos", async ({ page }) => {
    await page.fill('input[placeholder="Email"]', "errado@email.com");
    await page.fill('input[placeholder="Password"]', "senhaerrada");

    const signInBtn = page.locator(
      'div.r-transitionProperty-1i6wzkk:has-text("SIGN IN")'
    );
    await expect(signInBtn).toBeVisible({ timeout: 5000 });
    await signInBtn.click();

    // Verifica se mensagem de erro aparece
    const erro = page.locator("text=Usuário ou senha inválidos");
    await expect(erro).toBeVisible({ timeout: 5000 });
  });

  //? Verifica imagem de perfil, texto do usuário e se pelo menos 1 card aparece
  test("valida se usuário, imagem e card de viagens aparecem após login", async ({
    page,
  }) => {
    await page.goto("http://localhost:8082/users/1");

    const userText = page.locator("text=Viagens do usuário ID: 1");
    await expect(userText).toBeVisible({ timeout: 5000 });

    const profileImage = page.locator(
      'img[src*="https://mighty.tools/mockmind-api/content/human/125.jpg"]'
    );
    await expect(profileImage).toBeVisible({ timeout: 5000 });

    const travelCard = page.locator(
      'div.r-alignItems-1awozwy.r-backgroundColor-gbtiil:has(div:text("Trip to Paris"))'
    );
    await expect(travelCard).toHaveCount(1, { timeout: 5000 });
    await expect(travelCard).toBeVisible({ timeout: 5000 });
  });

  //? Verifica se mais de um card é renderizado na tela do usuário
  test("lista de cards de viagem tem múltiplos itens", async ({ page }) => {
    await page.goto("http://localhost:8082/users/1");

    const travelCards = page.locator('a[href^="/users/trips/"]');
    const count = await travelCards.count();

    expect(count).toBeGreaterThan(1);
  });

  //? Clica no card "Trip to Paris" redireciona para os detalhes da viagem
  test("clicar no card Trip to Paris e navegar para detalhes da viagem", async ({
    page,
  }) => {
    await page.goto("http://localhost:8082/users/1");

    const tripLink = page.locator(
      'a[href="/users/trips/1"]:has(div:text("Trip to Paris"))'
    );
    await expect(tripLink).toBeVisible({ timeout: 5000 });

    await tripLink.click();

    await expect(page).toHaveURL("http://localhost:8082/users/trips/1");

    const tripTitle = page.locator(
      'div.r-fontSize-1x35g6.r-fontWeight-vw2c0b:has-text("Trip to Paris")'
    );
    await expect(tripTitle).toBeVisible({ timeout: 5000 });
  });

  //? Teste do botão "Voltar para a Home"
  test("clicar no botão 'Voltar para a Home' redireciona para /", async ({
    page,
  }) => {
    await page.goto("http://localhost:8082/users/1");

    const voltarBtn = page.locator(
      'a[href="/"]:has-text("Voltar para a Home")'
    );
    await expect(voltarBtn).toBeVisible({ timeout: 5000 });

    await voltarBtn.click();

    await expect(page).toHaveURL("http://localhost:8082/");
  });
});

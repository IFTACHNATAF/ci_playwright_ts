import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


// test('test', async ({ page }) => {
//   await page.goto('http://uitestingplayground.com/');
//   await page.getByRole('link', { name: 'Scrollbars' }).click();
//   await page.getByRole('button', { name: 'Hiding Button' }).click();
// });


test('test navigate \"Automation\"', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'אוטומציה' }).click();
  await page.getByRole('heading', { name: 'אוטומציה' }).click();

});


test('test navigate \"Fullstack\"', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'פולסטאק' }).click();
  await page.getByRole('heading', { name: 'פולסטאק' }).click();

});

test('test navigate \"Consult and support\"', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'ייעוץ ותמיכה' }).click();
  await page.getByRole('heading', { name: 'ייעוץ ותמיכה' }).click();

});

test('test navigate \"Clien area\" and check show-password', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'אזור לקוחות' }).click();
  await page.getByRole('checkbox').check();
});

test('test navigate \"Clien area\" and navigate back home page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'אזור לקוחות' }).click();
  await page.getByRole('button', { name: 'go-home-button' }).click();
});


test('test navigate \"Read more about RPA\" and expad exlpain ', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'ראו עוד על RPA' }).click();
  await page.getByRole('button', { name: 'כפתור-לקרוא-עוד' }).click();

});



test('test fill contact with form and verify its send by click toast\'s', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'see-more-button' }).click();
  await page.getByRole('textbox', { name: 'שם מלא' }).click();
  await page.getByRole('textbox', { name: 'שם מלא' }).fill('test');
  await page.getByRole('textbox', { name: 'כתובת מייל' }).click();
  await page.getByRole('textbox', { name: 'כתובת מייל' }).fill('mail@mail.com');
  await page.getByRole('textbox', { name: 'מספר טלפון' }).click();
  await page.getByRole('textbox', { name: 'מספר טלפון' }).fill('0535555521');
  await page.getByRole('textbox', { name: 'הודעה' }).click();
  await page.getByRole('textbox', { name: 'הודעה' }).fill('yest');
  await page.getByRole('button', { name: 'submit-contact-form' }).click();
  await page.getByText('הטופס נשלח בהצלחה !').click();
  await page.getByText('אצור קשר בהקדם').click();
});
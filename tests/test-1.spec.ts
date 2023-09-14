import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/');
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Enter email').click();
  await page.getByPlaceholder('Enter email').fill('admin@admin.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('123455');
  await page.getByRole('button', { name: 'Submit' }).click();
});
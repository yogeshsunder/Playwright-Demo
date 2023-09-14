import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.whatsapp.com/');
  await page.getByRole('link', { name: 'Android' }).click();
  await page.goto('https://www.whatsapp.com/');
  await page.getByRole('button', { name: 'Features' }).click();
  await page.getByTestId('whatsapp_www_header').getByRole('link', { name: 'Download' }).click();
  await page.getByText('Who we areAbout usCareersBrand CenterPrivacy').click();
  await page.getByText('Use WhatsAppAndroidiPhoneMac/PCWhatsApp Web').click();
  await page.getByText('Need help?Contact UsHelp CenterCoronavirusSecurity Advisories').click();
  await page.goBack();
});
import { test, expect } from '@playwright/test';

test('ブログ一覧を確認できる', async ({ page }) => {
  // Go to http://localhost:3001/b/page/1
  await page.goto('http://localhost:3001/b/page/1');

  await expect(page.locator('div')).toContainText(['ブログタイトル']);
});

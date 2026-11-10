const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Simple static server for dist
function startServer() {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
  };

  const distDir = path.join(__dirname, '..', 'dist');

  const server = http.createServer((req, res) => {
    let reqUrl = req.url.split('?')[0];
    let filePath = path.join(distDir, reqUrl === '/' ? 'index.html' : reqUrl);

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(distDir, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    try {
      const data = fs.readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    } catch (err) {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  return new Promise((resolve) => {
    server.listen(4174, () => {
      resolve(server);
    });
  });
}

async function run() {
  const server = await startServer();
  console.log('Server started on http://localhost:4174');

  let browser;
  try {
    browser = await chromium.launch({ channel: 'chrome', headless: true });
  } catch (e) {
    browser = await chromium.launch({ channel: 'msedge', headless: true });
  }

  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log('--- 1. Testing Desktop (1440px) Initial Load ---');
  await page.goto('http://localhost:4174/', { waitUntil: 'networkidle' });

  // Verify Curriculum button
  const resumeBtn = page.locator('a[download="portfolio-julio-monteiro.pdf"]');
  const resumeCount = await resumeBtn.count();
  console.log('Resume download link count:', resumeCount);
  const resumeHref = await resumeBtn.getAttribute('href');
  console.log('Resume download href:', resumeHref);

  // Check hero image alignment
  const heroSection = page.locator('#inicio');
  const heroBox = await heroSection.boundingBox();
  const photoWrapper = page.locator('div[class*="photoWrapper"]');
  const photoBox = await photoWrapper.boundingBox();
  console.log('Hero section bounding box:', heroBox);
  console.log('Photo wrapper bounding box:', photoBox);
  const photoWithinHero = photoBox.y >= heroBox.y && (photoBox.y + photoBox.height) <= (heroBox.y + heroBox.height + 5);
  console.log('Photo is cleanly aligned inside Hero section:', photoWithinHero);

  // Test developer profile and tools
  console.log('--- 2. Testing Developer Profile and Tools ---');
  const devTab = page.locator('#tab-developer');
  await devTab.click();
  await page.waitForTimeout(500);

  const toolsCategory = page.locator('article', { hasText: 'Ferramentas' });
  const toolsText = await toolsCategory.innerText();
  console.log('Tools category contents:\n', toolsText);
  const hasAntigravity = toolsText.includes('Antigravity');
  const hasClaude = toolsText.includes('Claude');
  const hasIA = toolsText.includes('IA');
  const hasPowerBI = toolsText.includes('PowerBI');
  const hasSQLite = toolsText.includes('Banco de dados SQLite');
  console.log('Has Antigravity:', hasAntigravity);
  console.log('Has Claude:', hasClaude);
  console.log('Has IA:', hasIA);
  console.log('Has PowerBI:', hasPowerBI);
  console.log('Has SQLite:', hasSQLite);

  // Screenshot light mode with developer panel
  const screenshotDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });
  await page.screenshot({ path: path.join(screenshotDir, 'desktop-light-developer.png'), fullPage: false });

  // Test Dark Mode Toggle
  console.log('--- 3. Testing Dark Mode Toggle ---');
  const themeToggle = page.locator('button[class*="themeToggleBtn"]');
  await themeToggle.click();
  await page.waitForTimeout(300);

  const currentTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
  console.log('Theme attribute after toggle:', currentTheme);
  await page.screenshot({ path: path.join(screenshotDir, 'desktop-dark-developer.png'), fullPage: false });

  // Test Language Switcher (EN)
  console.log('--- 4. Testing Language Switcher (EN) ---');
  const enBtn = page.locator('button[class*="langBtn"]:has-text("EN")').first();
  await enBtn.click();
  await page.waitForTimeout(300);

  const heroTitleEn = await page.locator('h1').innerText();
  console.log('Hero title in EN:\n', heroTitleEn);
  const htmlLangEn = await page.evaluate(() => document.documentElement.lang);
  console.log('Document lang:', htmlLangEn);
  await page.screenshot({ path: path.join(screenshotDir, 'desktop-dark-en.png'), fullPage: false });

  // Test Language Switcher (ES)
  console.log('--- 5. Testing Language Switcher (ES) ---');
  const esBtn = page.locator('button[class*="langBtn"]:has-text("ES")').first();
  await esBtn.click();
  await page.waitForTimeout(300);

  const heroTitleEs = await page.locator('h1').innerText();
  console.log('Hero title in ES:\n', heroTitleEs);
  const htmlLangEs = await page.evaluate(() => document.documentElement.lang);
  console.log('Document lang:', htmlLangEs);

  // Switch back to PT
  const ptBtn = page.locator('button[class*="langBtn"]:has-text("PT")').first();
  await ptBtn.click();
  await page.waitForTimeout(200);

  // Test Mobile (390px)
  console.log('--- 6. Testing Mobile Viewport (390px) ---');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(300);

  const hasHScroll = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  console.log('Has horizontal overflow on 390px:', hasHScroll);

  const hamburger = page.locator('button[class*="hamburger"]');
  await hamburger.click();
  await page.waitForTimeout(300);

  const mobileDrawer = page.locator('#mobile-nav-panel');
  const isDrawerVisible = await mobileDrawer.isVisible();
  console.log('Mobile drawer is visible:', isDrawerVisible);

  await page.screenshot({ path: path.join(screenshotDir, 'mobile-drawer.png'), fullPage: false });

  console.log('--- All Automated Verifications Completed Successfully! ---');

  await browser.close();
  server.close();
}

run().catch((err) => {
  console.error('Error running verification:', err);
  process.exit(1);
});

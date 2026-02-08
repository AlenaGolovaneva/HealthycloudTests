import { test as base, expect } from '@playwright/test';

const BLOCK_PATTERNS = [
    /usercentrics/i,
    /consent/i,
    /cookie/i,
    /googletagmanager/i,
    /google-analytics/i,
    /doubleclick/i,
    /hotjar/i,
    /facebook\.net/i,
];

function shouldBlock(url) {
    return BLOCK_PATTERNS.some(re => re.test(url));
}

export const test = base.extend({
    context: async ({ browser }, use) => {
        const context = await browser.newContext();

        await context.route('**/*', route => {
            const url = route.request().url();
            if (shouldBlock(url)) return route.abort();
            return route.continue();
        });

        await use(context);
        await context.close();
    },

    page: async ({ context }, use) => {
        const page = await context.newPage();
        page.setDefaultTimeout(10_000);

        await use(page);
        await page.close();
    },
});

export { expect };

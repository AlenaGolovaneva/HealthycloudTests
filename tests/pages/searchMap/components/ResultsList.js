import { expect } from '@playwright/test';
export class ResultsList {
    constructor(page) {
        this.page = page;
        this.cards = page.locator('[data-item-id]');
    }

    async waitForAny(timeout = 10_000) {
        await this.cards.first().waitFor({ state: 'visible', timeout });
    }

    cardByText(textOrRegex) {
        return this.cards.filter({ hasText: textOrRegex });
    }

    first() {
        return this.cards.first();
    }
}

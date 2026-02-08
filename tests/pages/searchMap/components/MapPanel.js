import { expect } from '@playwright/test';

export class MapPanel {
    constructor(page) {
        this.page = page;
        this.container = page.locator('.leaflet-container');
        this.tiles = page.locator('img.leaflet-tile');
    }
}


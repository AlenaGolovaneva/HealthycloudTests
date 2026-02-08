import { test, expect } from '../../fixtures/pages';

test.describe('Smoke: Search & Map', () => {
    test.beforeEach(async ({ searchMap }) => {
        await searchMap.open();
    });

    test('Page loads and main elements are visible', async ({ searchMap }) => {
        await expect(searchMap.searchBar.input).toBeVisible();
        await expect(searchMap.searchBar.button).toBeVisible();
        
        await expect(searchMap.filters.container).toBeVisible();
        await expect(searchMap.filters.filterAlterLabel).toBeVisible();
        await expect(searchMap.filters.filterVerfahrenLabel).toBeVisible();
        await expect(searchMap.filters.filterVersicherungsartLabel).toBeVisible();

        await expect(searchMap.results.first()).toBeVisible();
        await expect(searchMap.map.container).toBeVisible();
        await expect(searchMap.map.tiles.first()).toBeVisible();
    });

    test('Search returns results card contains city', async ({ searchMap }) => {
        await searchMap.searchBar.search('Berlin');
        await searchMap.results.waitForAny();
        await expect(searchMap.results.cardByText(/berlin/i).first()).toBeVisible();
    });
});

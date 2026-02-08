import { test as envTest, expect } from './testEnv';
import { SearchMapPage } from '../pages/searchMap/SearchMapPage';

export const test = envTest.extend({
    searchMap: async ({ page }, use) => {
        await use(new SearchMapPage(page));
    },
});

export { expect };

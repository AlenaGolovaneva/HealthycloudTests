export class SearchBar {
    constructor(page) {
        this.page = page;
        this.input = page.getByRole('combobox');
        this.button = page.getByRole('button', { name: /Gruppen suchen/i });
    }

    async search(query) {
        await this.input.fill(query);
        await this.button.click();
    }
}

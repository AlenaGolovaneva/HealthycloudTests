import {expect} from "@playwright/test";
export class FiltersPanel {
    constructor(page) {
        this.page = page;
        
        this.container = page.locator('#b4-b1-FiltersContainer');
        this.filterAlterLabel = this.container.getByText('Alter', { exact: true });
        this.filterVerfahrenLabel = this.container.getByText('Verfahren', { exact: true });
        this.filterVersicherungsartLabel = this.container.getByText('Versicherungsart', { exact: true });
    }
}

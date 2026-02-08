import { SearchBar } from './components/SearchBar';
import { FiltersPanel } from './components/FiltersPanel';
import { ResultsList } from './components/ResultsList';
import { MapPanel } from './components/MapPanel';

export class SearchMapPage {
    constructor(page) {
        this.page = page;
        
        this.urlSearchMapPage = '/HC_GP_Public_Pages/';

        this.searchBar = new SearchBar(page);
        this.filters = new FiltersPanel(page);
        this.results = new ResultsList(page);
        this.map = new MapPanel(page);
    }
    
    async open() {
        await this.page.goto(this.urlSearchMapPage);
    }
}

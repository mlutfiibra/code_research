import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    
    // Method
    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/'
        const key = '0d456616b299aae1aaa9e8e1834d5646';
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
        } catch (error) {
            alert(error);   
        }
    }
    
}

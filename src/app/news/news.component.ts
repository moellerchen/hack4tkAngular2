import {Component, Input, OnInit} from "@angular/core";
import {NewsService} from "./news.service";
import {News} from "./news";

@Component({
    selector: 'news',
    templateUrl: 'news.component.html'
})
export class NewsComponent implements OnInit{
    constructor(private newsService: NewsService) {}

    @Input() short: boolean = false;
    @Input() filter: string = "";
    news: News[];
    oneFilter: string;

    ngOnInit() {
        this.getNews();
    }

    getNews() {
        if(this.filter === "") {
            this.news = this.newsService.getNews(this.short);
        } else {
            this.news = this.newsService.getFilteredNews(this.short, this.filter);
        }
    }
}
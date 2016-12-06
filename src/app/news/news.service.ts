import{ Injectable } from '@angular/core';
import { NEWS } from './mock-news';
import { News } from './news';

@Injectable()
export class NewsService {
    getNews(short: boolean) {
        if(short) {
            return NEWS.slice(0,3);
        }
        return NEWS;
    }

    getFilteredNews(short: boolean, filter: string) {
        var allNews: News[] = this.getNews(false);
        var returnNews: News[] = [];
        for(var i = 0; i < allNews.length; i++) {
            for(var j = 0; j < allNews[i].categories.length; j++) {
                if(allNews[i].categories[j].toLowerCase() == filter.toLowerCase()) {
                    returnNews.push(allNews[i]);
                    j = allNews[i].categories.length;
                    break;
                }
            }
        }
        if(short) {
            return returnNews.slice(0,3);
        }
        return returnNews;

    }
}
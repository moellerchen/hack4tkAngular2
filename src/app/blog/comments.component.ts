import {Component, Input} from "@angular/core";
import { Comment } from './comments';

@Component({
    selector: 'comments',
    templateUrl: 'comments.component.html'
})
export class CommentsComponent {

    @Input() comments: Comment[];
    showComments: boolean = false;

    toggleComments() {
        this.showComments = !this.showComments;
    }
}
import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name: 'toHtml'
})
export class ToHtmlPipe implements PipeTransform{
    transform(content) {
        return `<div>${content}</div>`;
    }
}
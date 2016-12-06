/**
 * Created by nbovenkerk on 06.12.2016.
 */
import { Comment } from './comments';

export class Blog {
  constructor(
      public headline: string,
      public subheadline: string,
      public content: string,
      public author: string,
      public date: Date,
      public comments: Comment[]
  ) { }
}

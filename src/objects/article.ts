import { ActivityObject, Link } from '../core';
import { ObjectType } from '../extended';
import { ContentObject } from './content-object';

/**
 * https://www.w3.org/ns/activitystreams#Article
 */
export class Article extends ContentObject {
  public readonly attributedTo?: ActivityObject | Link | URL | Array<ActivityObject | URL>;

  constructor(params: {
    name?: string;
    nameMap?: { [key: string]: string };
    content?: string;
    contentMap?: { [key: string]: string };
    id?: URL;
    attributedTo?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  }) {
    super(ObjectType.ARTICLE, params);

    if (params.attributedTo != null) {
      this.attributedTo = params.attributedTo;
    }
  }
}

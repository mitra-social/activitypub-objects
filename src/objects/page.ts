import { Link } from '../core';
import { ObjectType } from '../extended';
import { NameObject } from './name-object';

/**
 * https://www.w3.org/ns/activitystreams#Page
 */
export class Page extends NameObject {
  public readonly url: Link | URL | Array<Link | URL>;

  constructor(params: {
    name?: string;
    nameMap?: { [key: string]: string };
    url: Link | URL | Array<Link | URL>;
    id?: URL;
  }) {
    super(ObjectType.PAGE, params);
    this.url = params.url;
  }
}

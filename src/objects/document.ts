import { Link } from '../core';
import { ObjectType } from '../extended';
import { NameObject } from './name-object';

/**
 * https://www.w3.org/ns/activitystreams#Document
 */
export class Document extends NameObject {
  public readonly url: Link | URL | Array<Link | URL>;

  constructor(params: {
    url: Link | URL | Array<Link | URL>;
    id?: URL;
    name?: string;
    nameMap?: { [key: string]: string };
  },
    type?: string) {
    super(type || ObjectType.DOCUMENT, params);
    this.url = params.url;
  }
}

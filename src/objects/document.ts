import { Link } from '../core';
import { Objects } from '../extended';
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
    super(type || Objects.DOCUMENT, params);
    this.url = params.url;
  }
}

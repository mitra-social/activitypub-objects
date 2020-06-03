import { Link } from '../core';
import { Objects } from '../extended';
import { Document } from "./document"

/**
 * https://www.w3.org/ns/activitystreams#Image
 */
export class Image extends Document {
  constructor(params: {
    name?: string;
    nameMap?: { [key: string]: string };
    url: Link | URL | Array<Link | URL>;
    id?: URL;
  }) {
    super(params, Objects.IMAGE)
  }
}

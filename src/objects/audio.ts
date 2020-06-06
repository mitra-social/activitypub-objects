import { Link } from '../core';
import { ObjectType } from '../extended';
import { Document } from "./document"

/**
 * https://www.w3.org/ns/activitystreams#Audio
 */
export class Audio extends Document {
  constructor(
    params: {
      name?: string;
      nameMap?: { [key: string]: string };
      url: Link | URL | Array<Link | URL>;
      id?: URL;
    }) {
    super(params, ObjectType.AUDIO)
  }
}

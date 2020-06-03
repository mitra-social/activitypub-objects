import { Link } from '../core';
import { Objects } from '../extended';
import { Document } from "./document"

/**
 * https://www.w3.org/ns/activitystreams#Audio
 */
export class Audio extends Document {
  public type = Objects.AUDIO;

  constructor(
    params: {
      name?: string;
      nameMap?: { [key: string]: string };
      url: Link | URL | Array<Link | URL>;
      id?: URL;
    }) {
    super(params, Objects.AUDIO)
  }
}

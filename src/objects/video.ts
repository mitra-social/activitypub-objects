import { NameObject } from './name-object';
import { Objects } from '../extended';
import { Link } from '../core';

/**
 * https://www.w3.org/ns/activitystreams#Video
 */
export class Video extends NameObject {
  public readonly type = Objects.VIDEO;
  public readonly url: Link | URL | Array<Link | URL>;
  public readonly duration: string;

  constructor(params: {
    name?: string;
    nameMap?: { [key: string]: string };
    url: Link | URL | Array<Link | URL>;
    duration: string;
    id?: URL;
  }) {
    super(Objects.VIDEO, params);
    this.url = params.url;
    this.duration = params.duration;
  }
}

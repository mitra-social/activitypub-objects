import { Link, ActivityObject } from '../core';
import { Activities } from '../extended';
import { MediaType } from '../param-types/media-type';
import { LanguageTag } from '../param-types/language-tag';

/**
 * https://www.w3.org/ns/activitystreams#Mention
 */
export class Mention implements Link {
  public readonly type = Activities.MENTION;
  public readonly href: URL;
  public readonly rel?: string;
  public readonly mediaType?: MediaType;
  public readonly name?: string;
  public readonly nameMap?: { [key: string]: string };
  public readonly hreflang?: LanguageTag;
  public readonly height?: number;
  public readonly width?: number;
  public readonly preview?: ActivityObject | Link | URL | Array<ActivityObject | URL>;

  constructor(params: {
    href: URL;
    rel?: string;
    mediaType?: MediaType;
    name?: string;
    nameMap?: { [key: string]: string };
    hreflang?: LanguageTag;
    height?: number;
    width?: number;
    preview?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  }) {
    this.href = params.href;
    this.rel = params.rel;
    this.mediaType = params.mediaType;
    this.name = params.name;
    this.nameMap = params.nameMap;
    this.hreflang = params.hreflang;
    this.height = params.height;
    this.width = params.width;
    this.preview = params.preview;
  }
}

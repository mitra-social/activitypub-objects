import { ActivityObject } from "./object";
import { MediaType } from "../param-types/media-type";
import { LanguageTag } from "../param-types/language-tag";

/**
 *  https://www.w3.org/ns/activitystreams#Link
 */
export interface Link {
  type: string;
  href: URL;
  rel?: string;
  mediaType?: MediaType;
  name?: string;
  nameMap?: { [key: string]: string };
  hreflang?: LanguageTag;
  height?: number;
  width?: number;
  preview?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
}

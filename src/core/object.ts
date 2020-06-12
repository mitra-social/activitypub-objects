import { Collection } from "./collection";
import { Image } from "../objects/image";
import { Link } from "./link";
import { MediaType } from "../param-types/media-type";

/**
 *  https://www.w3.org/TR/activitystreams-vocabulary/#dfn-activity
 */
export interface ActivityObject {
  type: string;
  attachment?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  attributedTo?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  audience?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  bcc?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  bto?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  cc?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  content?: string;
  contentMap?: { [key: string]: string };
  context?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  duration?: string;
  name?: string;
  nameMap?: { [key: string]: string };
  endTime?: Date;
  generator?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  id?: URL;
  icon?: Link | Image | URL | Array<Link | Image | URL>;
  image?: Image;
  inReplyTo?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  location?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  mediaType?: MediaType;
  preview?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  published?: Date;
  replies?: Collection;
  startTime?: Date;
  summary?: string;
  summaryMap?: { [key: string]: string };
  tag?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  to?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  updated?: Date;
  url?: URL | Link | Array<URL | Link>;
}

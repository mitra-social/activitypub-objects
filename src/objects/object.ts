import { Link } from "../link";
import { MediaType } from "./param-types/media-type";
import { Image } from "./image";
import { Collection } from "../collection";

export interface ActivityObject {
  type: string;
  id?: URL;
  attachment?: ActivityObject | Link;
  attributedTo?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  audience?: ActivityObject | Link;
  content?: string;
  contentMap?: { [key: string]: string; }
  context?: ActivityObject | Link;
  name?: string;
  nameMap?: { [key: string]: string; }
  generator?: ActivityObject | Link;
  icon?: Link | Image | Array<Link | Image>;
  location?: ActivityObject | URL | Link;
  preview?: ActivityObject | Link;
  endTime?: Date;
  startTime?: Date;
  published?: Date;
  updated?: Date;
  inReplyTo?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  to?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  bto?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  cc?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  bcc?: ActivityObject | Link | URL | Array<ActivityObject | URL>;
  replies?: Collection;
  summary?: string;
  summaryMap?: { [key: string]: string; }
  tag?: ActivityObject | Link | Array<ActivityObject | Link>;
  url?: URL | Link | Array<URL | Link>;
  mediaType?: MediaType;
  duration?: string;
}

export enum Objects {
  ARTICLE = "Article",
  AUDIO = "Audio",
  DOCUMENT = "Document",
  EVENT = "Event",
  IMAGE = "Image",
  NOTE = "Note",
  PAGE = "Page",
  PLACE = "Place",
  PROFILE = "Profile",
  RELATIONSHIP = "Relationship",
  TOMBSTONE = "Tombstone",
  VIDEO = "Video",
}

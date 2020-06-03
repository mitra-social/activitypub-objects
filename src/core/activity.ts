import { Actor } from "../actors/actor";
import { Link } from "./link";
import { ActivityObject } from "./object";

/**
 * https://www.w3.org/ns/activitystreams#Activity
 */
export interface Activity extends ActivityObject {
  actor?: Actor | URL | Array<Actor | URL>;
  object?: ActivityObject | URL;
  target?: ActivityObject | URL | Link | Array<ActivityObject | URL>;
  result?: ActivityObject | URL | Link | Array<ActivityObject | URL>;
  origin?: ActivityObject | URL | Link | Array<ActivityObject | URL>;
  instrument?: ActivityObject | URL | Link | Array<ActivityObject | URL>;
}

/**
 * https://www.w3.org/ns/activitystreams#IntransitiveActivity
 */
export type IntransitiveActivity = Activity;

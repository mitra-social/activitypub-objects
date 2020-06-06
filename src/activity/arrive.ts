import { ActivityObject, Link, IntransitiveActivity } from '../core';
import { ActivityType } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-arrive
 */
export class Arrive implements IntransitiveActivity {
  public readonly type = ActivityType.ARRIVE;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly location: ActivityObject | Link | URL | Array<ActivityObject | URL>,
    public readonly origin?: ActivityObject | URL | Link | Array<ActivityObject | URL>
  ) { }
}

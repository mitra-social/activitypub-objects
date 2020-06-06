import { Activity, ActivityObject, Link } from '../core';
import { ActivityType } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-announce
 */
export class Announce implements Activity {
  public readonly type = ActivityType.ANNOUNCE;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: Activity | URL,
    public readonly target?: ActivityObject | URL | Link | Array<ActivityObject | URL>
  ) { }
}

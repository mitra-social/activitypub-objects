import { ActivityObject, Activity, Link } from '../core';
import { Activities } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-remove
 */
export class Remove implements Activity {
  public readonly type = Activities.REMOVE;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: ActivityObject | URL,
    public readonly origin?: ActivityObject | URL | Link | Array<ActivityObject | URL>
  ) { }
}

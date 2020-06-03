import { Activity, ActivityObject, Link } from '../core';
import { Activities } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-add
 */
export class Add implements Activity {
  public readonly type = Activities.ADD;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: ActivityObject | URL,
    public readonly target?: ActivityObject | URL | Link | Array<ActivityObject | URL>,
    public readonly origin?: ActivityObject | URL | Link | Array<ActivityObject | URL>
  ) { }
}

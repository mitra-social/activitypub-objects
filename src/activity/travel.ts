import { ActivityObject, IntransitiveActivity, Link } from '../core';
import { Activities } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-travel
 */
export class Travel implements IntransitiveActivity {
  public readonly type = Activities.TRAVEL;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly origin: ActivityObject | URL,
    public readonly target: ActivityObject | URL | Link | Array<ActivityObject | URL>
  ) { }
}

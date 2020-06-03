import { Activity, ActivityObject, Link } from '../core';
import { Activities } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-accept
 */
export class Accept implements Activity {
  public readonly type: string;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: ActivityObject | URL,
    public readonly target?: ActivityObject | URL | Link | Array<ActivityObject | URL>,
    type?: string
  ) {
    this.type = type || Activities.ACCEPT;
  }
}

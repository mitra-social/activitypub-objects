import { Activity, ActivityObject } from '../core';
import { Activities } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-leave
 */
export class Leave implements Activity {
  public readonly type = Activities.LEAVE;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: ActivityObject | URL
  ) { }
}

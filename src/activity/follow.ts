import { Activity, ActivityObject } from '../core';
import { Activities } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-follow
 */
export class Follow implements Activity {
  public readonly type = Activities.FOLLOW;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: ActivityObject | URL
  ) { }
}

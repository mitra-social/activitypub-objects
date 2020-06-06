import { Activity, ActivityObject } from '../core';
import { ActivityType } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-like
 */
export class Like implements Activity {
  public readonly type = ActivityType.LIKE;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: ActivityObject | URL
  ) { }
}

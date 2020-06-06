import { Activity, ActivityObject } from '../core';
import { ActivityType } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-listen
 */
export class Listen implements Activity {
  public readonly type = ActivityType.LISTEN;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: ActivityObject | URL
  ) { }
}

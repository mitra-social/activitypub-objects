import { Activity, ActivityObject } from '../core';
import { ActivityType } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-flag
 */
export class Flag implements Activity {
  public readonly type = ActivityType.FLAG;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: ActivityObject | URL
  ) { }
}

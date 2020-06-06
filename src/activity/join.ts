import { Activity, ActivityObject } from '../core';
import { ActivityType } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-join
 */
export class Join implements Activity {
  public readonly type = ActivityType.JOIN;

  constructor(
    public readonly actor?: Actor | URL | Array<Actor | URL>,
    public readonly object?: ActivityObject | URL
  ) { }
}

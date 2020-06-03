import { Activity, ActivityObject } from '../core';
import { Activities } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-create
 */
export class Create implements Activity {
  public readonly type = Activities.CREATE;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: ActivityObject | URL
  ) { }
}

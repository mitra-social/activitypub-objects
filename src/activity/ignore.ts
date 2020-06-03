import { Activity, ActivityObject } from '../core';
import { Activities } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-ignore
 */
export class Ignore implements Activity {
  public readonly type: string;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: ActivityObject | URL,
    type?: string
  ) {
    this.type = type || Activities.IGNORE;
  }
}

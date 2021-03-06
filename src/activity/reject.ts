import { ActivityObject, Activity } from '../core';
import { ActivityType } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-reject
 */
export class Reject implements Activity {
  public readonly type: string;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: ActivityObject | URL,
    type?: string
  ) {
    this.type = type || ActivityType.REJECT;
  }
}

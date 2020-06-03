import { ActivityObject, Activity } from '../core';
import { Activities } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-read
 */
export class Read implements Activity {
  public readonly type = Activities.READ;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: ActivityObject | URL
  ) { }
}

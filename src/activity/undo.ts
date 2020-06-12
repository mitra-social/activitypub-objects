import { Activity } from '../core';
import { ActivityType } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-undo
 */
export class Undo implements Activity {
  public readonly type = ActivityType.UNDO;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: Activity | URL
  ) { }
}

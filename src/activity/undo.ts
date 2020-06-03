import { Activity } from '../core';
import { Activities } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-undo
 */
export class Undo implements Activity {
  public readonly type = Activities.UNDO;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: Activity | URL
  ) { }
}

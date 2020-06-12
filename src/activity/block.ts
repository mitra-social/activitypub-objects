import { ActivityObject } from '../core';
import { ActivityType } from '../extended'
import { Actor } from '../actors';
import { Ignore } from './ignore';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-block
 */
export class Block extends Ignore {
  constructor(
    actor: Actor | URL | Array<Actor | URL>,
    object: ActivityObject | URL
  ) {
    super(actor, object, ActivityType.BLOCK);
  }
}

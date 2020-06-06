import { ActivityObject } from '../core';
import { ActivityType } from '../extended';
import { Actor } from '../actors';
import { Reject } from './reject';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tentativereject
 */
export class TentativeReject extends Reject {
  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: ActivityObject | URL
  ) {
    super(actor, object, ActivityType.TENTATIVE_REJECT);
  }
}

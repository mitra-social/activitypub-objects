import { ActivityObject } from '../core';
import { Activities } from '../extended';
import { Accept } from './accept';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-tentativeaccept
 */
export class TentativeAccept extends Accept {
  constructor(
    public readonly actor: Actor | URL,
    public readonly object: ActivityObject | URL,
    public readonly target?: ActivityObject | URL
  ) {
    super(actor, object, target, Activities.TENTATIVE_ACCEPT);
  }
}

import { ActivityObject, Link } from '../core';
import { Activities } from '../extended';
import { Actor } from '../actors';
import { Offer } from './offer';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-invite
 */
export class Invite extends Offer {
  constructor(
    actor: Actor | URL | Array<Actor | URL>,
    object: ActivityObject | URL,
    target: Actor | URL | Link | Array<Actor | URL>
  ) {
    super(actor, object, target, Activities.INVITE);
  }
}

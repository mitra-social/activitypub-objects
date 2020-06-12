import { Activity, ActivityObject, Link } from '../core';
import { ActivityType } from '../extended';
import { Actor } from '../actors';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-offer
 */
export class Offer implements Activity {
  public readonly type: string;

  constructor(
    public readonly actor: Actor | URL | Array<Actor | URL>,
    public readonly object: ActivityObject | URL,
    public readonly target?: Actor | URL | Link | Array<Actor | URL>,
    type?: string
  ) {
    this.type = type || ActivityType.OFFER;
  }
}

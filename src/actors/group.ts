import { ActorType } from '../extended';
import { Actor } from './actor';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-group
 */
export class Group implements Actor {
  public readonly type = ActorType.GROUP;
  constructor(public readonly name: string) { }
}

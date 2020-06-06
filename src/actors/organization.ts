import { ActorType } from '../extended';
import { Actor } from './actor';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-organization
 */
export class Organization implements Actor {
  public readonly type = ActorType.ORGANIZATION;
  constructor(public readonly name: string) { }
}

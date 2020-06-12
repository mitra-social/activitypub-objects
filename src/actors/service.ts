import { ActorType } from '../extended';
import { Actor } from './actor';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-service
 */
export class Service implements Actor {
  public readonly type = ActorType.SERVICE;
  constructor(public readonly name: string) { }
}

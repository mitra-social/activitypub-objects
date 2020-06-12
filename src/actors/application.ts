import { ActorType } from '../extended';
import { Actor } from './actor';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-application
 */
export class Application implements Actor {
  public readonly type = ActorType.APPLICATION;
  constructor(public readonly name: string) { }
}

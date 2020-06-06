import { ActorType } from '../extended';
import { Actor } from './actor';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-person
 */
export class Person implements Actor {
  public readonly type = ActorType.PERSON;
  constructor(public readonly name: string) { }
}

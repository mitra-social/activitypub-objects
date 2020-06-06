import { ObjectType } from '../extended';
import { Actor } from '../actors';
import { BaseObject } from './base-object';

/**
 * https://www.w3.org/ns/activitystreams#Relationship
 */
export class Relationship extends BaseObject {
  public readonly type = ObjectType.RELATIONSHIP;
  public readonly id?: URL;
  public readonly relationship: Relation;
  public readonly subject: Actor;
  public readonly object: Actor;

  constructor(params: {
    relationship: Relation;
    subject: Actor;
    object: Actor;
    id?: URL;
  }) {
    super(ObjectType.RELATIONSHIP, params);
    this.relationship = params.relationship;
    this.subject = params.subject;
    this.object = params.object;
  }
}

export enum Relation {
  FRIEND_OF = "http://purl.org/vocab/relationship/friendOf"
}

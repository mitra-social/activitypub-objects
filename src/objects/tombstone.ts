import { ObjectType } from '../extended';
import { NameObject } from './name-object';

/**
 * https://www.w3.org/ns/activitystreams#Tombstone
 */
export class Tombstone extends NameObject {
  public readonly type = ObjectType.TOMBSTONE;
  public readonly formerType: ObjectType;
  public readonly deleted: Date;

  constructor(params: {
    name?: string;
    nameMap?: { [key: string]: string };
    formerType: ObjectType;
    deleted: Date;
    id?: URL;
  }) {
    super(ObjectType.TOMBSTONE, params);
    this.formerType = params.formerType;
    this.deleted = params.deleted;
  }
}

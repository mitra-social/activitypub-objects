import { Objects } from '../extended';
import { NameObject } from './name-object';

/**
 * https://www.w3.org/ns/activitystreams#Tombstone
 */
export class Tombstone extends NameObject {
  public readonly type = Objects.TOMBSTONE;
  public readonly formerType: Objects;
  public readonly deleted: Date;

  constructor(params: {
    name?: string;
    nameMap?: { [key: string]: string };
    formerType: Objects;
    deleted: Date;
    id?: URL;
  }) {
    super(Objects.TOMBSTONE, params);
    this.formerType = params.formerType;
    this.deleted = params.deleted;
  }
}

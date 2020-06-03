import { BaseObject } from './base-object';

export class NameObject extends BaseObject {
  public readonly name?: string;
  public readonly nameMap?: { [key: string]: string };

  constructor(
    type: string,
    params: {
      id?: URL,
      name?: string;
      nameMap?: { [key: string]: string };
    }) {
    super(type, params);
    this.name = params.name;
    this.nameMap = params.nameMap;
  }
}
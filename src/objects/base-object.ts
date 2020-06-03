import { ActivityObject } from '../core';

export class BaseObject implements ActivityObject {
  public readonly type: string;
  public readonly id?: URL;

  constructor(
    type: string,
    params: {
      id?: URL
    }) {
    this.type = type;

    if (params.id != null) {
      this.id = params.id;
    }
  }
}
import { Objects } from '../extended';
import { NameObject } from './name-object';

/**
 * https://www.w3.org/ns/activitystreams#Event
 */
export class Event extends NameObject {
  public readonly startTime?: Date;
  public readonly endTime?: Date;

  constructor(params: {
    name?: string;
    nameMap?: { [key: string]: string };
    id?: URL;
    startTime?: Date;
    endTime?: Date;
  }) {
    super(Objects.EVENT, params)
    if (params.startTime != null) {
      this.startTime = params.startTime;
    }
    if (params.endTime != null) {
      this.endTime = params.endTime;
    }
  }
}

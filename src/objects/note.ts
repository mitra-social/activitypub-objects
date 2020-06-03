import { Objects } from '../extended';
import { ContentObject } from './content-object';

/**
 * https://www.w3.org/ns/activitystreams#Note
 */
export class Note extends ContentObject {
  constructor(params: {
    name?: string;
    nameMap?: { [key: string]: string };
    content?: string;
    contentMap?: { [key: string]: string }
    id?: URL
  }) {
    super(Objects.NOTE, params);
  }
}

import { Objects } from '../extended';
import { Actor } from '../actors';
import { BaseObject } from './base-object';

/**
 * https://www.w3.org/ns/activitystreams#Profile
 */
export class Profile extends BaseObject {
  public readonly summary: string;
  public readonly describes: Actor;

  constructor(params: { summary: string; describes: Actor; id?: URL }) {
    super(Objects.PROFILE, params);
    this.summary = params.summary;
    this.describes = params.describes;
  }
}

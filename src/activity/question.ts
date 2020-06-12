import { ActivityObject, Link, IntransitiveActivity } from '../core';
import { ActivityType } from '../extended';

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-question
 */
export class Question implements IntransitiveActivity {
  public readonly type = ActivityType.QUESTION;
  public readonly name: string;
  public readonly content?: string;
  public readonly contentMap?: { [key: string]: string };
  public readonly anyOf?: ActivityObject | URL | Link | Array<ActivityObject | URL>;
  public readonly oneOf?: ActivityObject | URL | Link | Array<ActivityObject | URL>;
  public readonly closed?: ActivityObject | URL | Link | Date | boolean | Array<ActivityObject | URL>;

  constructor(params: {
    name: string;
    id?: URL;
    content?: string;
    contentMap?: { [key: string]: string };
    anyOf?: ActivityObject | URL | Link | Array<ActivityObject | URL>;
    oneOf?: ActivityObject | URL | Link | Array<ActivityObject | URL>;
    closed?: ActivityObject | URL | Link | Date | boolean | Array<ActivityObject | URL>;
  }) {
    this.name = params.name;
    this.closed = params.closed;
    if (
      params.content == null &&
      params.anyOf == null &&
      params.oneOf == null
    ) {
      throw new Error(
        "Question object must not have both properties. (content, anyOf, oneOf)"
      );
    }
    this.content = params.content;
    this.anyOf = params.anyOf;
    this.oneOf = params.oneOf;
  }
}

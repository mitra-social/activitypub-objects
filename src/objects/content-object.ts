import { NameObject } from './name-object';

export class ContentObject extends NameObject {
  public readonly content?: string;
  public readonly contentMap?: { [key: string]: string };

  constructor(
    type: string,
    params: {
      id?: URL,
      name?: string;
      nameMap?: { [key: string]: string };
      content?: string;
      contentMap?: { [key: string]: string }
    }) {
    super(type, params);
    this.content = params.content;
    this.contentMap = params.contentMap;
  }
}
import { ActivityObject } from '../core';
import { ActorType } from '../extended';

export interface Actor extends ActivityObject {
  type: ActorType;
  preferredUsername?: string;
}

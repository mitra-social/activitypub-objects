import { ActivityObject } from '../core';
import { Actors } from '../extended';

export interface Actor extends ActivityObject {
  type: Actors;
  preferredUsername?: string;
}

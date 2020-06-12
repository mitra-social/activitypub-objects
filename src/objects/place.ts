import { ObjectType } from '../extended';
import { NameObject } from './name-object';

/**
 * https://www.w3.org/ns/activitystreams#Place
 */
export class Place extends NameObject {
  public readonly accuracy?: number;
  public readonly altitude?: number;
  public readonly latitude?: number;
  public readonly longitude?: number;
  public readonly radius?: number;
  public readonly units?: string;

  constructor(params: {
    name?: string;
    nameMap?: { [key: string]: string };
    id?: URL;
    accuracy?: number;
    altitude?: number;
    latitude?: number;
    longitude?: number;
    radius?: number;
    units?: string;
  }) {
    super(ObjectType.PLACE, params);

    if (params.accuracy != null) {
      this.accuracy = params.accuracy;
    }
    if (params.altitude != null) {
      this.altitude = params.altitude;
    }
    if (params.latitude != null) {
      this.latitude = params.latitude;
    }
    if (params.longitude != null) {
      this.longitude = params.longitude;
    }
    if (params.radius != null) {
      this.radius = params.radius;
    }
    if (params.units != null) {
      this.units = params.units;
    }
  }
}

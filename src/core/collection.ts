import { ActivityObject } from "./object";
import { Link } from "./link";

interface CollectionBase extends ActivityObject {
  totalItems: number;
  current?: CollectionPage | Link | URL;
  first?: CollectionPage | Link | URL;
  last?: CollectionPage | Link | URL;
}

/**
 * https://www.w3.org/ns/activitystreams#Collection
 */
export interface Collection extends CollectionBase {
  items: Array<ActivityObject | Link | URL>;
}

/**
 * https://www.w3.org/ns/activitystreams#OrderedCollection
 */
export interface OrderedCollection extends Collection {
  orderedItems: Array<ActivityObject | Link | URL>;
}

interface CollectionPageBase extends CollectionBase {
  partOf?: Collection | Link | URL;
  next?: CollectionPage | Link | URL;
  prev?: CollectionPage | Link | URL;
}

/**
 *  https://www.w3.org/ns/activitystreams#CollectionPage
 */
export interface CollectionPage extends CollectionPageBase, Collection { }

/**
 *  https://www.w3.org/ns/activitystreams#OrderedCollectionPage
 */
export interface OrderedCollectionPage
  extends CollectionPageBase,
  OrderedCollection {
  startIndex: number;
}

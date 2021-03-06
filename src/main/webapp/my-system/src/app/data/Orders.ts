import {Book} from "./Book";
import {Reader} from "./Reader";
import {Library} from "./Library";
import {OrderId} from "./OrderId";

export class Orders {
  id: OrderId;
  reader: number;
  createDate: string;
  execDate: string;
  library: number;
  status: string;
}

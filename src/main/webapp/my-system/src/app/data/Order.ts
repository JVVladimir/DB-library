import {Reader} from "./Reader";
import {Library} from "./Library";
import {OrdId} from "./OrdId";

export class Order {
  orderId: OrdId;
  reader: Reader;
  createDate: string;
  execDate: string;
  library: Library;
  status: string;
}

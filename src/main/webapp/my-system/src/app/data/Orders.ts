import {Book} from "./Book";
import {Reader} from "./Reader";
import {Library} from "./Library";
import {OrderId} from "./OrderId";

export class Orders {
  id: OrderId;
  reader: number;
  book: Book;
  createDate: string;
  execDate: string;
  library: Library;
  status: string;
}

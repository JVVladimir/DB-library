import {Library} from "./Library";
import {Reader} from "./Reader";
import {BooksInLibrary} from "./BooksInLibrary";
import {MAccountingId} from "./MAccountingId";

export class MAccounting {
  id:	MAccountingId;
  book: BooksInLibrary;
  dateExt:	string;
  dateRet:	string;
  status:	string;
  fine:	number;
}

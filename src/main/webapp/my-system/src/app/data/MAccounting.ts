import {Library} from "./Library";
import {Reader} from "./Reader";
import {BooksInLibrary} from "./BooksInLibrary";
import {MAccountingId} from "./MAccountingId";

export class MAccounting {
  accountingId:	MAccountingId;
  book: BooksInLibrary;
  dateExt:	string;
  dateRet:	string;
  status:	string;
  fine:	number;
}

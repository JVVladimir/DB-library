import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../data/User';
import {LoginAndRegistrate} from '../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Library} from "../data/Library";
import {MainLibraryService} from "../services/ManLibraryService";
import {Book} from "../data/Book";
import {Work} from "../data/Work";
import {Publisher} from "../data/Publisher";
import {Type} from "../data/Type";
import {Genre} from "../data/Genre";
import {Author} from "../data/Author";
import {Reader} from "../data/Reader";
import {Orders} from "../data/Orders";
import {Accounting} from "../data/Accounting";
import {MAccounting} from "../data/MAccounting";
import {MAccountingId} from "../data/MAccountingId";
import {BooksInLibrary} from "../data/BooksInLibrary";
import {BooksInLibraryId} from "../data/BooksInLibraryId";

@Component({
  selector: 'app-main-window',
  templateUrl: './main-accounting-window.component.html',
  styleUrls: ['./main-accounting-window.component.css']
})
export class MainAccountingWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  status='issued';
  user: User = null;

  accounts: MAccounting[] = null;
  accountColumns: string[] = ['id', 'library_name', 'library_address', 'book_name', 'publisher_name', 'isbn',
    'reader_name', 'reader_pasp', 'reader_mail', 'reader_library_name',
    'dateExt', 'dateRet', 'status', 'fine'];



  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private service: LoginAndRegistrate, private mainLibraryService: MainLibraryService, private router: Router) {
    this.user =  this.service.getData();
    if (this.user == null || this.user === undefined) {
      this.router.navigateByUrl('/');
    }
  }

  ngOnInit(): void {
    this.tableForm = this.formBuilder.group({
      table: ['', Validators.compose([
        Validators.required
      ])],
      reader_id: [''],
      library_id: [''],
      book_id: [''],
      status: [''],
      fine: ['']
    });
  }

  get logn() { return this.tableForm.controls; }

  getData() {
    this.submitted = true;
    this.accounts = null;
    if (this.tableForm.invalid) {
      return;
    }  else if (this.selected === 'get') {
      this.getAccountsFromDB();
    }  else if (this.selected === 'add') {
      const account = new MAccounting();
      account.accountingId = new MAccountingId();
      account.accountingId.reader = new Reader();
      account.accountingId.reader.id = this.tableForm.value['reader_id'];
      account.book = new BooksInLibrary()
      account.book.booksInLibraryId = new BooksInLibraryId();
      account.book.booksInLibraryId.id = this.tableForm.value['book_id'];
      account.book.booksInLibraryId.library = new Library();
      account.book.booksInLibraryId.library.id = this.tableForm.value['library_id'];
      account.status = this.status;
      if (account.status === 'issued') {
        account.dateExt = this.dateAsYYYYMMDDHHNNSS(new Date());
        this.clear();
        this.mainLibraryService.addAccounts(account).subscribe((answer: MAccounting[]) => {
          this.getAccountsFromDB();
        });
      }
    } else if (this.selected === 'update') {
      const account = new MAccounting();
      account.accountingId = new MAccountingId();
      account.accountingId.reader = new Reader();
      account.accountingId.reader.id = this.tableForm.value['reader_id'];
      account.book = new BooksInLibrary()
      account.book.booksInLibraryId = new BooksInLibraryId();
      account.book.booksInLibraryId.id = this.tableForm.value['book_id'];
      account.book.booksInLibraryId.library = new Library();
      account.book.booksInLibraryId.library.id = this.tableForm.value['library_id'];
      account.status = this.status;
      if  (account.status === 'returned') {
        account.dateRet = this.dateAsYYYYMMDDHHNNSS(new Date());
        account.fine  = this.tableForm.value['fine'];
        this.clear();
        this.mainLibraryService.updateAccount(account).subscribe((answer: MAccounting[]) => {
          this.getAccountsFromDB();
        });
      } else if (account.status === 'lost') {
        account.fine  = this.tableForm.value['fine'];
        account.dateRet = this.dateAsYYYYMMDDHHNNSS(new Date());
        this.clear();
        this.mainLibraryService.updateAccount(account).subscribe((answer: MAccounting[]) => {
          this.getAccountsFromDB();
        });
      }
    }


    this.submitted = false;
  }

  dateAsYYYYMMDDHHNNSS(date): string {
    return date.getFullYear()
      + '-' + this.leftpad(date.getMonth() + 1, 2)
      + '-' + this.leftpad(date.getDate(), 2);
  }

  leftpad(val, resultLength = 2, leftpadChar = '0'): string {
    return (String(leftpadChar).repeat(resultLength)
      + String(val)).slice(String(val).length);
  }


  private getAccountsFromDB() {
    this.mainLibraryService.getMAccounts().subscribe((answer: MAccounting[]) => {
      if (answer != null) {
        this.accounts = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.accounts = null;
  }

  goLibraries() {
    this.router.navigateByUrl('/mainLibrary');
  }

  goBooks() {
    this.router.navigateByUrl('/mainBookLibrary');
  }

  goWorks() {
    this.router.navigateByUrl('/mainWorkLibrary');
  }

  goAuthors() {
    this.router.navigateByUrl('/mainAuthorLibrary');
  }

  goPublishers() {
    this.router.navigateByUrl('/mainPublisherLibrary');
  }

  goTypes() {
    this.router.navigateByUrl('/mainTypeLibrary');
  }

  goGenres() {
    this.router.navigateByUrl('/mainGenreLibrary');
  }
  goReaders() {
    this.router.navigateByUrl('/mainReaderLibrary');
  }

  goOrders() {
    this.router.navigateByUrl('/mainOrdersLibrary');
  }
  goAccounting() {
    this.router.navigateByUrl('/mainAccountingLibrary');
  }

  goAuthorsOfBooks() {
    this.router.navigateByUrl('/mainAuthorsOfBooksLibrary');
  }

  goAuthorsOfWorks() {
    this.router.navigateByUrl('/mainAuthorsOfWorksLibrary');
  }

  goMainBooksInLib() {
    this.router.navigateByUrl('/mainBooksInLibLibrary');
  }

  goPublishedWorks() {
    this.router.navigateByUrl('/mainPublishedWorksLibrary');
  }
}

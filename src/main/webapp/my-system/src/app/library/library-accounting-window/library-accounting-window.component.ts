import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../data/User';
import {LoginAndRegistrate} from '../../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Accounting} from "../../data/Accounting";
import {LibraryService} from "../../services/LibraryService";
import {Order} from "../../data/Order";
import {Reader} from "../../data/Reader";
import {OrdId} from "../../data/OrdId";
import {Book} from "../../data/Book";
import {MAccounting} from "../../data/MAccounting";
import {BooksInLibrary} from "../../data/BooksInLibrary";
import {BooksInLibraryId} from "../../data/BooksInLibraryId";
import {MAccountingId} from "../../data/MAccountingId";
import {Library} from "../../data/Library";

@Component({
  selector: 'app-main-window',
  templateUrl: './library-accounting-window.component.html',
  styleUrls: ['./library-accounting-window.component.css']
})
export class LibraryAccountingWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  status='issued';
  user: User = null;

  accounts: MAccounting[] = null;
  accountColumns: string[] = ['id', 'library_name', 'library_address', 'book_name', 'publisher_name', 'isbn',
    'reader_name', 'reader_pasp', 'reader_mail', 'reader_library_name',
    'dateExt', 'dateRet', 'status', 'fine'];


  constructor(public dialog: MatDialog, private formBuilder: FormBuilder, private service: LoginAndRegistrate, private mainLibraryService: LibraryService, private router: Router) {
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
    this.mainLibraryService.getMainAccounts().subscribe((answer: MAccounting[]) => {
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
    this.router.navigateByUrl('/library');
  }

  goBooks() {
    this.router.navigateByUrl('/libraryBook');
  }

  goWorks() {
    this.router.navigateByUrl('/libraryWork');
  }

  goAuthors() {
    this.router.navigateByUrl('/libraryAuthor');
  }

  goPublishers() {
    this.router.navigateByUrl('/libraryPublisher');
  }

  goTypes() {
    this.router.navigateByUrl('/libraryType');
  }

  goGenres() {
    this.router.navigateByUrl('/libraryGenre');
  }

  goReaders() {
    this.router.navigateByUrl('/libraryReader');
  }

  goOrders() {
    this.router.navigateByUrl('/libraryOrders');
  }

  goAccounting() {
    this.router.navigateByUrl('/libraryAccounting');
  }

  goAuthorsOfBooks() {
    this.router.navigateByUrl('/libraryAuthorsOfBooks');
  }

  goAuthorsOfWorks() {
    this.router.navigateByUrl('/libraryAuthorsOfWorks');
  }

  goMainBooksInLib() {
    this.router.navigateByUrl('/libraryBooksInLib');
  }

  goPublishedWorks() {
    this.router.navigateByUrl('/libraryPublishedWorks');
  }
}

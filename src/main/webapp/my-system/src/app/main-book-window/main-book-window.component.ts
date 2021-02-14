import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../data/User';
import {LoginAndRegistrate} from '../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Library} from "../data/Library";
import {MainLibraryService} from "../services/ManLibraryService";
import {Book} from "../data/Book";
import {Publisher} from "../data/Publisher";

@Component({
  selector: 'app-main-window',
  templateUrl: './main-book-window.component.html',
  styleUrls: ['./main-book-window.component.css']
})
export class MainBookWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  books: Book[] = null;
  bookColumns: string[] = ['id', 'name', 'publisher_address', 'publisher_phone', 'publisher_mail', 'publishYear', 'isbn'];


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
      book_name: [''],
      isbn: [''],
      publisher_id: [''],
      publish_year: [''],
    });
  }

  get logn() { return this.tableForm.controls; }



  getData() {
    this.submitted = true;
    this.books = null;
    if (this.tableForm.invalid) {
      return;
    } else if (this.selected === 'search') {
      const book = new Book();
      book.name = this.tableForm.value['book_name'];
      book.isbn = this.tableForm.value['isbn'];
      this.clear();
      this.mainLibraryService.searchBook(book).subscribe((answer: Book[]) => {
        if (answer != null) {
          this.books = answer;
        } else {
          alert('Ошибка! Данные отсутствуют!')
        }
      });
    } else if (this.selected === 'add') {
      const book = new Book();
      book.name = this.tableForm.value['book_name'];
      book.isbn = this.tableForm.value['isbn'];
      book.publishYear = this.tableForm.value['publish_year'];
      book.publisher = new Publisher()
      book.publisher.id = this.tableForm.value['publisher_id'];
      this.clear();
      this.mainLibraryService.addBooks(book).subscribe((answer: Book[]) => {
        this.getBooksFromDB();
      });
    } else if (this.selected === 'get') {
      this.getBooksFromDB();
    }
    this.submitted = false;
  }

  private getBooksFromDB() {
    this.mainLibraryService.getBooks().subscribe((answer: Book[]) => {
      if (answer != null) {
        this.books = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.books = null;
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

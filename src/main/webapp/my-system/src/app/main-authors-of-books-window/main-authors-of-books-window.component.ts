import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../data/User';
import {LoginAndRegistrate} from '../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MainLibraryService} from "../services/ManLibraryService";
import {BooksInLibrary} from "../data/BooksInLibrary";
import {AuthorsOfBooks} from "../data/AuthorsOfBooks";
import {AuthorsOfWorks} from "../data/AuthorsOfWorks";
import {Author} from "../data/Author";
import {Work} from "../data/Work";
import {Book} from "../data/Book";

@Component({
  selector: 'app-main-window',
  templateUrl: './main-authors-of-books-window.component.html',
  styleUrls: ['./main-authors-of-books-window.component.css']
})
export class MainAuthorsOfBooksWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  authorsOfBooks: AuthorsOfBooks[] = null;
  authorsOfBooksColumns: string[] = ['id', 'author_name', 'author_born', 'author_died', 'book_name', 'publisher_name', 'publisher_address', 'publisher_phone', 'publisher_mail', 'publisher_year', 'isbn'];


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
      author_name: [''],
      book_id: [''],
      author_id: ['']
    });
  }

  get logn() { return this.tableForm.controls; }

  getData() {
    this.submitted = true;
    this.authorsOfBooks = null;
    if (this.tableForm.invalid) {
      return;
    } else if (this.selected === 'search') {
      const authorOfBook = new AuthorsOfBooks();
      authorOfBook.author = new Author();
      authorOfBook.author.name = this.tableForm.value['author_name'];
      authorOfBook.book = new Book();
      authorOfBook.book.name = this.tableForm.value['book_name'];
      this.clear();
      this.mainLibraryService.searchAuthorOfBook(authorOfBook).subscribe((answer: AuthorsOfBooks[]) => {
        if (answer != null) {
          this.authorsOfBooks = answer;
        } else {
          alert('Ошибка! Данные отсутствуют!')
        }
      });
    } else if (this.selected === 'add') {
      const authorOfBook = new AuthorsOfBooks();
      authorOfBook.author = new Author();
      authorOfBook.author.id = this.tableForm.value['author_id'];
      authorOfBook.book = new Book();
      authorOfBook.book.id = this.tableForm.value['book_id'];
      this.clear();
      this.mainLibraryService.addAuthorOfBook(authorOfBook).subscribe((answer: AuthorsOfBooks[]) => {
        this.getAuthorsOfBookFromDB();
      });
    } else if (this.selected === 'get') {
      this.getAuthorsOfBookFromDB();
    }
    this.submitted = false;
  }

  private getAuthorsOfBookFromDB() {
    this.mainLibraryService.getAuthorsOfBooks().subscribe((answer: AuthorsOfBooks[]) => {
      if (answer != null) {
        this.authorsOfBooks = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.authorsOfBooks = null;
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

import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../data/User';
import {LoginAndRegistrate} from '../../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthorsOfBooks} from "../../data/AuthorsOfBooks";
import {Author} from "../../data/Author";
import {Book} from "../../data/Book";
import {LibraryService} from "../../services/LibraryService";

@Component({
  selector: 'app-main-window',
  templateUrl: './library-authors-of-books-window.component.html',
  styleUrls: ['./library-authors-of-books-window.component.css']
})
export class LibraryAuthorsOfBooksWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  authorsOfBooks: AuthorsOfBooks[] = null;
  authorsOfBooksColumns: string[] = ['id', 'author_name', 'author_born', 'author_died', 'book_name', 'publisher_name', 'publisher_address', 'publisher_phone', 'publisher_mail', 'publisher_year', 'isbn'];


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

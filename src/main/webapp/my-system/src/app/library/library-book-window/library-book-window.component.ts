import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../data/User';
import {LoginAndRegistrate} from '../../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Book} from "../../data/Book";
import {LibraryService} from "../../services/LibraryService";

@Component({
  selector: 'app-main-window',
  templateUrl: './library-book-window.component.html',
  styleUrls: ['./library-book-window.component.css']
})
export class LibraryBookWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  books: Book[] = null;
  bookColumns: string[] = ['id', 'name', 'publisher_address', 'publisher_phone', 'publisher_mail', 'publishYear', 'isbn'];


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

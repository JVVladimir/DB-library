import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../data/User';
import {LoginAndRegistrate} from '../../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Book} from "../../data/Book";
import {BooksInLibraryId} from "../../data/BooksInLibraryId";
import {Library} from "../../data/Library";
import {BooksInLibrary} from "../../data/BooksInLibrary";
import {LibraryService} from "../../services/LibraryService";
import {MainLibraryService} from "../../services/ManLibraryService";

@Component({
  selector: 'app-main-window',
  templateUrl: './director-books-in-lib-window.component.html',
  styleUrls: ['./director-books-in-lib-window.component.css']
})
export class DirectorBooksInLibWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  booksInLibrary: BooksInLibrary[] = null;
  booksInLibraryColumns: string[] = ['id', 'library_name', 'library_address', 'book_name', 'publisher_name', 'publisher_address', 'publisher_phone', 'publisher_mail', 'publish_year', 'isbn'];


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
      library_name: [''],
      book_id: [''],
      library_id: ['']
    });
  }

  get logn() { return this.tableForm.controls; }

  getData() {
    this.submitted = true;
    this.booksInLibrary = null;
    if (this.tableForm.invalid) {
      return;
    } else if (this.selected === 'search') {
      const booksInLib = new BooksInLibrary();
      booksInLib.booksInLibraryId = new BooksInLibraryId();
      booksInLib.booksInLibraryId.library = new Library();
      booksInLib.booksInLibraryId.library.name = this.tableForm.value['library_name'];
      booksInLib.book = new Book();
      booksInLib.book.name = this.tableForm.value['book_name'];
      this.clear();
      this.mainLibraryService.searchBookInLib(booksInLib).subscribe((answer: BooksInLibrary[]) => {
        if (answer != null) {
          this.booksInLibrary = answer;
        } else {
          alert('Ошибка! Данные отсутствуют!')
        }
      });
    } else if (this.selected === 'get') {
      this.getBooksInLibraryFromDB();
    }
    this.submitted = false;
  }

  private getBooksInLibraryFromDB() {
    this.mainLibraryService.getBooksInLib().subscribe((answer: BooksInLibrary[]) => {
      if (answer != null) {
        this.booksInLibrary = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.booksInLibrary = null;
  }

  goLibraries() {
    this.router.navigateByUrl('/director');
  }

  goBooks() {
    this.router.navigateByUrl('/directorBook');
  }

  goWorks() {
    this.router.navigateByUrl('/directorWork');
  }

  goAuthors() {
    this.router.navigateByUrl('/directorAuthor');
  }

  goPublishers() {
    this.router.navigateByUrl('/directorPublisher');
  }

  goTypes() {
    this.router.navigateByUrl('/directorType');
  }

  goGenres() {
    this.router.navigateByUrl('/directorGenre');
  }

  goReaders() {
    this.router.navigateByUrl('/directorReader');
  }

  goOrders() {
    this.router.navigateByUrl('/directorOrders');
  }

  goAccounting() {
    this.router.navigateByUrl('/directorAccounting');
  }

  goAuthorsOfBooks() {
    this.router.navigateByUrl('/directorAuthorsOfBooks');
  }

  goAuthorsOfWorks() {
    this.router.navigateByUrl('/directorAuthorsOfWorks');
  }

  goMainBooksInLib() {
    this.router.navigateByUrl('/directorBooksInLib');
  }

  goPublishedWorks() {
    this.router.navigateByUrl('/directorPublishedWorks');
  }
}

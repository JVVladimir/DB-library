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

@Component({
  selector: 'app-main-window',
  templateUrl: './main-author-window.component.html',
  styleUrls: ['./main-author-window.component.css']
})
export class MainAuthorWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  authors: Author[] = null;
  authorColumns: string[] = ['id', 'name',  'born', 'died'];


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
      author_name: [''],
      author_born: [''],
      author_died: [''],
    });
  }

  get logn() { return this.tableForm.controls; }



  getData() {
    this.submitted = true;
    this.authors = null;
    if (this.tableForm.invalid) {
      return;
    } else if (this.selected === 'search') {
      const author = new Author();
      author.name = this.tableForm.value['author_name'];
      author.born = this.tableForm.value['author_born'];
      author.died = this.tableForm.value['author_died'];
      this.clear();
      this.mainLibraryService.searchAuthor(author).subscribe((answer: Author[]) => {
        if (answer != null) {
          this.authors = answer;
        } else {
          alert('Ошибка! Данные отсутствуют!')
        }
      });
    } else if (this.selected === 'add') {
      const author = new Author();
      author.name = this.tableForm.value['author_name'];
      author.born = this.tableForm.value['author_born'];
      author.died = this.tableForm.value['author_died'];
      this.clear();
      this.mainLibraryService.addAuthors(author).subscribe((answer: Author[]) => {
        this.getAuthorsFromDB();
      });
    } else if (this.selected === 'get') {
      this.getAuthorsFromDB();
    }
    this.submitted = false;
  }

  private getAuthorsFromDB() {
    this.mainLibraryService.getAuthors().subscribe((answer: Author[]) => {
      if (answer != null) {
        this.authors = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.authors = null;
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

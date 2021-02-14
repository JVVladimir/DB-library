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
import {Genre} from "../data/Genre";
import {Author} from "../data/Author";
import {Work} from "../data/Work";

@Component({
  selector: 'app-main-window',
  templateUrl: './main-authors-of-works-window.component.html',
  styleUrls: ['./main-authors-of-works-window.component.css']
})
export class MainAuthorsOfWorksWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  authorsOfWorks: AuthorsOfWorks[] = null;
  authorsOfWorksColumns: string[] = ['id', 'author_name', 'author_born', 'author_died', 'work_name', 'type', 'genre'];


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
      work_name: [''],
      author_name: [''],
      work_id: [''],
      author_id: ['']
    });
  }

  get logn() { return this.tableForm.controls; }

  getData() {
    this.submitted = true;
    this.authorsOfWorks = null;
    if (this.tableForm.invalid) {
      return;
    } else if (this.selected === 'search') {
      const authorOfWork = new AuthorsOfWorks();
      authorOfWork.author = new Author();
      authorOfWork.author.name = this.tableForm.value['author_name'];
      authorOfWork.work = new Work();
      authorOfWork.work.name = this.tableForm.value['work_name'];
      this.clear();
      this.mainLibraryService.searchAuthorOfWork(authorOfWork).subscribe((answer: AuthorsOfWorks[]) => {
        if (answer != null) {
          this.authorsOfWorks = answer;
        } else {
          alert('Ошибка! Данные отсутствуют!')
        }
      });
    } else if (this.selected === 'add') {
      const authorOfWork = new AuthorsOfWorks();
      authorOfWork.author = new Author();
      authorOfWork.author.id = this.tableForm.value['author_id'];
      authorOfWork.work = new Work();
      authorOfWork.work.id = this.tableForm.value['work_id'];
      this.clear();
      this.mainLibraryService.addAuthorOfWork(authorOfWork).subscribe((answer: AuthorsOfWorks[]) => {
        this.getAuthorsOfWorksFromDB();
      });
    } else if (this.selected === 'get') {
      this.getAuthorsOfWorksFromDB();
    }
    this.submitted = false;
  }

  private getAuthorsOfWorksFromDB() {
    this.mainLibraryService.getAuthorsOfWork().subscribe((answer: AuthorsOfWorks[]) => {
      if (answer != null) {
        this.authorsOfWorks = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.authorsOfWorks = null;
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

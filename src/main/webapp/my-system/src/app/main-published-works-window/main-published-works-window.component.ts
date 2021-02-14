import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../data/User';
import {LoginAndRegistrate} from '../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MainLibraryService} from "../services/ManLibraryService";
import {AuthorsOfWorks} from "../data/AuthorsOfWorks";
import {PublishedWorks} from "../data/PublishedWorks";
import {Author} from "../data/Author";
import {Work} from "../data/Work";
import {Book} from "../data/Book";

@Component({
  selector: 'app-main-window',
  templateUrl: './main-published-works-window.component.html',
  styleUrls: ['./main-published-works-window.component.css']
})
export class MainPublishedWorksWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  publishedWorks: PublishedWorks[] = null;
  publishedWorksColumns: string[] = ['id', 'work_name', 'work_type', 'work_genre', 'book_name', 'publisher_name' , 'publisher_address' , 'publisher_phone' ,  'publisher_mail' ,'publish_year', 'isbn'];


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
      work_name: [''],
      work_id: [''],
      book_id: ['']
    });
  }

  get logn() { return this.tableForm.controls; }

  getData() {
    this.submitted = true;
    this.publishedWorks = null;
    if (this.tableForm.invalid) {
      return;
    } else if (this.selected === 'search') {
      const publishedWork = new PublishedWorks();
      publishedWork.work = new Work();
      publishedWork.work.name = this.tableForm.value['work_name'];
      publishedWork.book = new Book();
      publishedWork.book.name = this.tableForm.value['book_name'];
      this.clear();
      this.mainLibraryService.searchPublishedWorks(publishedWork).subscribe((answer: PublishedWorks[]) => {
        if (answer != null) {
          this.publishedWorks = answer;
        } else {
          alert('Ошибка! Данные отсутствуют!')
        }
      });
    } else if (this.selected === 'add') {
      const publishedWork = new PublishedWorks();
      publishedWork.work = new Work();
      publishedWork.work.id = this.tableForm.value['work_id'];
      publishedWork.book = new Book();
      publishedWork.book.id = this.tableForm.value['book_id'];
      this.clear();
      this.mainLibraryService.addPublishedWork(publishedWork).subscribe((answer: PublishedWorks[]) => {
        this.getPublishedWorksFromDB();
      });
    } else if (this.selected === 'get') {
      this.getPublishedWorksFromDB();
    }
    this.submitted = false;
  }

  private getPublishedWorksFromDB() {
    this.mainLibraryService.getPublishedWorks().subscribe((answer: PublishedWorks[]) => {
      if (answer != null) {
        this.publishedWorks = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.publishedWorks = null;
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

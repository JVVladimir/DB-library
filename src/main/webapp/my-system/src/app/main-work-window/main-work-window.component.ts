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

@Component({
  selector: 'app-main-window',
  templateUrl: './main-work-window.component.html',
  styleUrls: ['./main-work-window.component.css']
})
export class MainWorkWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  works: Work[] = null;
  workColumns: string[] = ['id', 'name',  'type_name', 'genre_name'];


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
      type_name: [''],
      genre_name: [''],
      type_id: [''],
      genre_id: ['']
    });
  }

  get logn() { return this.tableForm.controls; }



  getData() {
    this.submitted = true;
    this.works = null;
    if (this.tableForm.invalid) {
      return;
    } else if (this.selected === 'search') {
      const work = new Work();
      work.name = this.tableForm.value['work_name'];
      work.type = new Type()
      work.type.name = this.tableForm.value['type_name'];
      work.genre = new Genre()
      work.genre.name = this.tableForm.value['genre_name'];
      this.clear();
      this.mainLibraryService.searchWork(work).subscribe((answer: Work[]) => {
        if (answer != null) {
          this.works = answer;
        } else {
          alert('Ошибка! Данные отсутствуют!')
        }
      });
    } else if (this.selected === 'add') {
      const work = new Work();
      work.name = this.tableForm.value['work_name'];
      work.type = new Type()
      work.type.id = this.tableForm.value['type_id'];
      work.genre = new Genre()
      work.genre.id = this.tableForm.value['genre_id'];
      this.clear();
      this.mainLibraryService.addWorks(work).subscribe((answer: Work[]) => {
        this.getWorksFromDB();
      });
    } else if (this.selected === 'get') {
      this.getWorksFromDB();
    }
    this.submitted = false;
  }

  private getWorksFromDB() {
    this.mainLibraryService.getWorks().subscribe((answer: Work[]) => {
      if (answer != null) {
        this.works = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.works = null;
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

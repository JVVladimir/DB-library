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
  templateUrl: './main-publisher-window.component.html',
  styleUrls: ['./main-publisher-window.component.css']
})
export class MainPublisherWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  publishers: Publisher[] = null;
  publisherColumns: string[] = ['id', 'name',  'address', 'phone', 'mail'];


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
      publisher_name: [''],
      publisher_address: [''],
      publisher_phone: [''],
      publisher_mail: ['']
    });
  }

  get logn() { return this.tableForm.controls; }



  getData() {
    this.submitted = true;
    this.publishers = null;
    if (this.tableForm.invalid) {
      return;
    } else if (this.selected === 'search') {
      const publisher = new Publisher();
      publisher.name = this.tableForm.value['publisher_name'];
      publisher.address = this.tableForm.value['publisher_address'];
      this.clear();
      this.mainLibraryService.searchPublisher(publisher).subscribe((answer: Publisher[]) => {
        if (answer != null) {
          this.publishers = answer;
        } else {
          alert('Ошибка! Данные отсутствуют!')
        }
      });
    } else if (this.selected === 'add') {
      const publisher = new Publisher();
      publisher.name = this.tableForm.value['publisher_name'];
      publisher.address = this.tableForm.value['publisher_address'];
      publisher.phone = this.tableForm.value['publisher_phone'];
      publisher.mail = this.tableForm.value['publisher_mail'];
      this.clear();
      this.mainLibraryService.addPublisher(publisher).subscribe((answer: Publisher[]) => {
        this.getPublishersFromDB();
      });
    } else if (this.selected === 'get') {
      this.getPublishersFromDB();
    }
    this.submitted = false;
  }

  private getPublishersFromDB() {
    this.mainLibraryService.getPublishers().subscribe((answer: Publisher[]) => {
      if (answer != null) {
        this.publishers = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.publishers = null;
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

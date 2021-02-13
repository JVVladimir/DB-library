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
import {Reader} from "../data/Reader";
import {Orders} from "../data/Orders";

@Component({
  selector: 'app-main-window',
  templateUrl: './main-orders-window.component.html',
  styleUrls: ['./main-orders-window.component.css']
})
export class MainOrdersWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  orders: Orders[] = null;
  orderColumns: string[] = ['id', 'reader', 'createDate', 'execDate', 'library', 'status', 'book'];


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
    });
  }

  get logn() { return this.tableForm.controls; }

  getData() {
    this.submitted = true;
    this.orders = null;
    if (this.tableForm.invalid) {
      return;
    }  else if (this.selected === 'get') {
      this.getOrdersFromDB();
    }
    this.submitted = false;
  }

  private getOrdersFromDB() {
    this.mainLibraryService.getOrders().subscribe((answer: Orders[]) => {
      if (answer != null) {
        this.orders = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.orders = null;
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

  }

  goAuthorsOfWorks() {

  }
}

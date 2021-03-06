import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../data/User';
import {LoginAndRegistrate} from '../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Library} from "../data/Library";
import {MainLibraryService} from "../services/ManLibraryService";

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  libraries: Library[] = null;
  libraryColumns: string[] = ['id', 'name', 'address'];


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
      library_name: [''],
      library_address: [''],
      library_id: ['']
    });
  }

  get logn() { return this.tableForm.controls; }



  getData() {
    this.submitted = true;
    this.libraries = null;
    if (this.tableForm.invalid) {
      return;
    } else if (this.selected === 'search') {
      const library = new Library();
      library.name = this.tableForm.value['library_name'];
      library.address = this.tableForm.value['library_address'];
      this.clear();
      this.mainLibraryService.searchLibrary(library).subscribe((answer: Library[]) => {
        if (answer != null) {
          this.libraries = answer;
        } else {
          alert('Ошибка! Данные отсутствуют!')
        }
      });
    } else if (this.selected === 'add') {
      const library = new Library();
      library.name = this.tableForm.value['library_name'];
      library.address = this.tableForm.value['library_address'];
      this.clear();
      this.mainLibraryService.addLibrary(library).subscribe((answer: Library[]) => {
        this.getLibrariesFromDB();
      });
    } else if (this.selected === 'get') {
      this.getLibrariesFromDB();
    }
    this.submitted = false;
  }

  private getLibrariesFromDB() {
    this.mainLibraryService.getLibraries().subscribe((answer: Library[]) => {
      if (answer != null) {
        this.libraries = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.libraries = null;
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

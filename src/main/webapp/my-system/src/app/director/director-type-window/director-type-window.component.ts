import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../data/User';
import {LoginAndRegistrate} from '../../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Type} from "../../data/Type";
import {LibraryService} from "../../services/LibraryService";
import {MainLibraryService} from "../../services/ManLibraryService";

@Component({
  selector: 'app-main-window',
  templateUrl: './director-type-window.component.html',
  styleUrls: ['./director-type-window.component.css']
})
export class DirectorTypeWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  types: Type[] = null;
  typeColumns: string[] = ['id', 'name'];


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
      type_name: ['']
    });
  }

  get logn() { return this.tableForm.controls; }



  getData() {
    this.submitted = true;
    this.types = null;
    if (this.tableForm.invalid) {
      return;
    } else if (this.selected === 'search') {
      const type = new Type();
      type.name = this.tableForm.value['type_name'];
      this.clear();
      this.mainLibraryService.searchType(type).subscribe((answer: Type[]) => {
        if (answer != null) {
          this.types = answer;
        } else {
          alert('Ошибка! Данные отсутствуют!')
        }
      });
    } else if (this.selected === 'get') {
      this.getTypesFromDB();
    }
    this.submitted = false;
  }

  private getTypesFromDB() {
    this.mainLibraryService.getTypes().subscribe((answer: Type[]) => {
      if (answer != null) {
        this.types = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.types = null;
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

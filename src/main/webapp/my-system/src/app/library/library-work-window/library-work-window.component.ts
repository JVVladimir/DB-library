import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../data/User';
import {LoginAndRegistrate} from '../../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Work} from "../../data/Work";
import {Type} from "../../data/Type";
import {Genre} from "../../data/Genre";
import {LibraryService} from "../../services/LibraryService";

@Component({
  selector: 'app-main-window',
  templateUrl: './library-work-window.component.html',
  styleUrls: ['./library-work-window.component.css']
})
export class LibraryWorkWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  works: Work[] = null;
  workColumns: string[] = ['id', 'name',  'type_name', 'genre_name'];


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

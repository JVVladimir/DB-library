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
  templateUrl: './main-genre-window.component.html',
  styleUrls: ['./main-genre-window.component.css']
})
export class MainGenreWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  genres: Genre[] = null;
  genreColumns: string[] = ['id', 'name'];


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
      genre_name: ['']
    });
  }

  get logn() { return this.tableForm.controls; }

  getData() {
    this.submitted = true;
    this.genres = null;
    if (this.tableForm.invalid) {
      return;
    } else if (this.selected === 'search') {
      const genre = new Genre();
      genre.name = this.tableForm.value['genre_name'];
      this.clear();
      this.mainLibraryService.searchGenre(genre).subscribe((answer: Genre[]) => {
        if (answer != null) {
          this.genres = answer;
        } else {
          alert('Ошибка! Данные отсутствуют!')
        }
      });
    } else if (this.selected === 'add') {
      const genre = new Genre();
      genre.name = this.tableForm.value['genre_name'];
      this.clear();
      this.mainLibraryService.addGenres(genre).subscribe((answer: Genre[]) => {
        this.getGenresFromDB();
      });
    } else if (this.selected === 'get') {
      this.getGenresFromDB();
    }
    this.submitted = false;
  }

  private getGenresFromDB() {
    this.mainLibraryService.getGenres().subscribe((answer: Genre[]) => {
      if (answer != null) {
        this.genres = answer;
      } else {
        alert('Ошибка! Данные отсутствуют!')
      }
    });
  }

  clear() {
    this.genres = null;
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

import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../../data/User';
import {LoginAndRegistrate} from '../../services/LoginAndRegistrate';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Genre} from "../../data/Genre";
import {LibraryService} from "../../services/LibraryService";
import {MainLibraryService} from "../../services/ManLibraryService";

@Component({
  selector: 'app-main-window',
  templateUrl: './director-genre-window.component.html',
  styleUrls: ['./director-genre-window.component.css']
})
export class DirectorGenreWindowComponent implements OnInit {
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

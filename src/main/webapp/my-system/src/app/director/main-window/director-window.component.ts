import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../data/User";
import {Library} from "../../data/Library";
import {MatDialog} from "@angular/material";
import {LoginAndRegistrate} from "../../services/LoginAndRegistrate";
import {Router} from "@angular/router";
import {LibraryService} from "../../services/LibraryService";
import {MainLibraryService} from "../../services/ManLibraryService";

@Component({
  selector: 'app-main-window',
  templateUrl: './director-window.component.html',
  styleUrls: ['./director-window.component.css']
})
export class DirectorWindowComponent implements OnInit {
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

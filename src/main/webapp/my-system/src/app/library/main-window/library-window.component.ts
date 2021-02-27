import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../data/User";
import {Library} from "../../data/Library";
import {MatDialog} from "@angular/material";
import {LoginAndRegistrate} from "../../services/LoginAndRegistrate";
import {Router} from "@angular/router";
import {LibraryService} from "../../services/LibraryService";

@Component({
  selector: 'app-main-window',
  templateUrl: './library-window.component.html',
  styleUrls: ['./library-window.component.css']
})
export class LibraryWindowComponent implements OnInit {
  tableForm: FormGroup;
  submitted = false;
  selected = '';
  user: User = null;

  libraries: Library[] = null;
  libraryColumns: string[] = ['id', 'name', 'address'];


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

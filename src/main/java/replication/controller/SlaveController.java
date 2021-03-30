package replication.controller;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.web.bind.annotation.*;
import replication.model.sharing.*;
import replication.repository.master.AccountingRepository;
import replication.repository.slave.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/filial-library")
@AllArgsConstructor
@Tag(name = "Библиотека-филиал")
public class SlaveController {

    private final SReaderRepository readerRepository;
    private final SBookRepository bookRepository;
    private final SAuthorRepository authorRepository;
    private final SLibraryRepository libraryRepository;
    private final SPublisherRepository publisherRepository;
    private final SWorkRepository workRepository;
    private final SAuthorsOfBookRepository authorsOfBookRepository;
    private final SAuthorOfWorkRepository authorsOfWorkRepository;
    private final STypeRepository typeRepository;
    private final SGenreRepository genreRepository;
    private final SPublishedWorkRepository publishedWorkRepository;
    private final SBooksInLibraryRepository booksInLibraryRepository;
    private final SOrdersRepository ordersRepository;
    private final SAccountingRepository accountingRepository;
    private final AccountingRepository acc;

    @Operation(summary = "Получить книги")
    @GetMapping("/books")
    List<Book> getBook(@RequestParam(required = false) String name, @RequestParam(required = false) String isbn) {
        return bookRepository.findAll(Example.of(new Book(name, isbn)));
    }

    @Operation(summary = "Получить автора")
    @GetMapping("/authors")
    List<Author> getAuthor(@RequestParam(required = false) String name) {
        return authorRepository.findAll(Example.of(new Author(name)));
    }

    @Operation(summary = "Поиск библиотек")
    @GetMapping("/libraries")
    List<Library> getLibraries(@RequestParam(required = false) String name, @RequestParam(required = false) String address) {
        return libraryRepository.findAll(Example.of(new Library(name, address)));
    }

    @Operation(summary = "Поиск издательства")
    @GetMapping("/publishers")
    List<Publisher> getPublisher(@RequestParam(required = false) String name, @RequestParam(required = false) String address) {
        return publisherRepository.findAll(Example.of(new Publisher(name, address)));
    }

    @Operation(summary = "Поиск произведения")
    @GetMapping("/works")
    List<Work> getWork(@RequestParam(required = false) String name, @RequestParam(required = false) String genre, @RequestParam(required = false) String type) {
        return workRepository.findAll(Example.of(new Work(name, genre, type)));
    }

    @Operation(summary = "Получить данные по всем типам")
    @GetMapping("/types")
    List<Type> getType(@RequestParam(required = false) String name) {
        return typeRepository.findAll(Example.of(new Type(name)));
    }

    @Operation(summary = "Получить данные по всем жанрам")
    @GetMapping("/genres")
    List<Genre> getGenre(@RequestParam(required = false) String name) {
        return genreRepository.findAll(Example.of(new Genre(name)));
    }

    @Operation(summary = "Получить все все опубликованные произведения")
    @GetMapping("/publishedWorks")
    List<PublishedWork> findPublishedWork(@RequestParam(required = false) String bookName, @RequestParam(required = false) String workName) {
        return publishedWorkRepository.findAll(Example.of(new PublishedWork(bookName, workName)));
    }

    @Operation(summary = "Получить данные по всем читателям")
    @GetMapping("/readers")
    List<Reader> findReaders(@RequestParam(required = false) String name, @RequestParam(required = false) String pasp, @RequestParam(required = false) String phone) {
        return readerRepository.findAll(Example.of(new Reader(name, pasp, phone)));
    }

    @Operation(summary = "Добавить нового читателя")
    @PostMapping("/readers")
    Reader addReader(@RequestBody Reader reader) {
        return readerRepository.save(reader);
    }


    @Operation(summary = "Добавить выданную/озвращенную книгу")
    @PostMapping("/accounts")
    Accounting addAccounts(@RequestBody Accounting accounting) {
        return accountingRepository.save(accounting);
    }

    @Operation(summary = "Добавить заказ")
    @PostMapping("/orders")
    Orders addOrders(@RequestBody Orders orders) {
        return ordersRepository.save(orders);
    }

    @Operation(summary = "Добавить новую книгу в библиотеку")
    @PostMapping("/booksInLibrary")
    BooksInLibrary addBooksInLibrary(@RequestBody BooksInLibrary booksInLibrary) {
        return booksInLibraryRepository.save(booksInLibrary);
    }

    @Operation(summary = "Получить данные по всем заказам")
    @GetMapping("/orders")
    List<Orders> findOrders() {
        return ordersRepository.findAll();
    }


    @Operation(summary = "Получить данные по всем выдачам книг")
    @GetMapping("/accounts")
    List<Accounting> findAccounts() {
        return accountingRepository.findAll();
    }


    @Operation(summary = "Получить данные по всем книгам в филиале")
    @GetMapping("/booksInLibrary")
    List<BooksInLibrary> findBooksInLibrary(@RequestParam(required = false) String bookName, @RequestParam(required = false) String libraryName) {
        return booksInLibraryRepository.findAll(Example.of(new BooksInLibrary(bookName, libraryName)));
    }

    @Operation(summary = "Получить все книги автора или всех авторов книги")
    @GetMapping("/authorWorks")
    List<AuthorsOfWork> findWorksByAuthor(@RequestParam(required = false) String authorName, @RequestParam(required = false) String workName) {
        return authorsOfWorkRepository.findAll(Example.of(new AuthorsOfWork(authorName, workName)));
    }

    @Operation(summary = "Получить все произведения автора")
    @GetMapping("/authorBooks")
    List<AuthorsOfBook> findBookByAuthor(@RequestParam(required = false) String authorName, @RequestParam(required = false) String bookName) {
        return authorsOfBookRepository.findAll(Example.of(new AuthorsOfBook(authorName, bookName)));
    }
}

package replication.controller;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.apache.commons.lang3.tuple.Pair;
import org.springframework.data.domain.Example;
import org.springframework.web.bind.annotation.*;
import replication.model.sharing.*;
import replication.repository.consolidation.CBooksInLibraryRepository;
import replication.repository.master.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/main-library")
@AllArgsConstructor
@Tag(name = "Главная бибилиотека")
public class MasterController {

    private final GenreRepository genreRepository;
    private final TypeRepository typeRepository;
    private final ReaderRepository readerRepository;
    private final BooksInLibraryRepository booksInLibraryRepository;
    private final CBooksInLibraryRepository cBooksInLibraryRepository;
    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;
    private final AuthorsOfBookRepository authorsOfBookRepository;
    private final AuthorOfWorkRepository authorsOfWorkRepository;
    private final LibraryRepository libraryRepository;
    private final PublisherRepository publisherRepository;
    private final WorkRepository workRepository;
    private final PublishedWorkRepository publishedWorkRepository;
    private final OrdersRepository ordersRepository;

    @Operation(summary = "Получить книги")
    @GetMapping("/books")
    List<Book> getBook(@RequestParam(required = false) String name, @RequestParam(required = false) String isbn) {
        return bookRepository.findAll(Example.of(new Book(name, isbn)));
    }

    @Operation(summary = "Добавить книгу")
    @PostMapping("/books")
    Book addBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }

    @Operation(summary = "Добавить заказ")
    @PostMapping("/orders")
    Orders addOrders(@RequestBody Orders orders) {
        return ordersRepository.save(orders);
    }

    @Operation(summary = "Получить автора")
    @GetMapping("/authors")
    List<Author> getAuthor(@RequestParam(required = false) String name) {
        return authorRepository.findAll(Example.of(new Author(name)));
    }

    @Operation(summary = "Добавить автора")
    @PostMapping("/authors")
    Author addAuthor(@RequestBody Author author) {
        return authorRepository.save(author);
    }

    @Operation(summary = "Поиск библиотек")
    @GetMapping("/libraries")
    List<Library> getLibraries(@RequestParam(required = false) String name, @RequestParam(required = false) String address) {
        return libraryRepository.findAll(Example.of(new Library(name, address)));
    }

    @Operation(summary = "Добавить библиотеку")
    @PostMapping("/libraries")
    Library addLibrary(@RequestBody Library library) {
        return libraryRepository.save(library);
    }

    @Operation(summary = "Поиск издательства")
    @GetMapping("/publishers")
    List<Publisher> getPublisher(@RequestParam(required = false) String name, @RequestParam(required = false) String address) {
        return publisherRepository.findAll(Example.of(new Publisher(name, address)));
    }

    @Operation(summary = "Добавить издательство")
    @PostMapping("/publishers")
    Publisher addPublisher(@RequestBody Publisher publisher) {
        return publisherRepository.save(publisher);
    }

    @Operation(summary = "Поиск произведения")
    @GetMapping("/works")
    List<Work> getWork(@RequestParam(required = false) String name, @RequestParam(required = false) String genre, @RequestParam(required = false) String type) {
        return workRepository.findAll(Example.of(new Work(name, genre, type)));
    }

    @Operation(summary = "Добавить произведение")
    @PostMapping("/works")
    Work addWork(@RequestBody Work work) {
        return workRepository.save(work);
    }

    @Operation(summary = "Добавить новый жанр")
    @PostMapping("/genres")
    Genre addGenre(@RequestBody Genre genre) {
        return genreRepository.save(genre);
    }

    @Operation(summary = "Добавить новое опубликованное произведение")
    @PostMapping("/publishedWorks")
    PublishedWork addPublishedWorks(@RequestBody PublishedWork publishedWork) { return publishedWorkRepository.save(publishedWork); }

    @Operation(summary = "Добавить автора произведения")
    @PostMapping("/authorWorks")
    AuthorsOfWork addAuthorOfWork(@RequestBody AuthorsOfWork authorsOfWork) {
        return authorsOfWorkRepository.save(authorsOfWork);
    }

    @Operation(summary = "Добавить автора произведения")
    @PostMapping("/authorBooks")
    AuthorsOfBook addAuthorOfBook(@RequestBody AuthorsOfBook authorsOfBook) {
        return authorsOfBookRepository.save(authorsOfBook);
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

    @Operation(summary = "Добавить новый тип книги")
    @PostMapping("/types")
    Type addType(@RequestBody Type type) {
        return typeRepository.save(type);
    }

    @Operation(summary = "Получить данные по всем читателям")
    @GetMapping("/readers")
    List<Reader> findReaders(@RequestParam(required = false) String name, @RequestParam(required = false) String pasp, @RequestParam(required = false) String phone) {
        return readerRepository.findAll(Example.of(new Reader(name, pasp, phone)));
    }

    @Operation(summary = "Получить все все произведения автора")
    @GetMapping("/authorWorks")
    List<AuthorsOfWork> findWorksByAuthor(@RequestParam(required = false) String authorName, @RequestParam(required = false) String workName) {
        return authorsOfWorkRepository.findAll(Example.of(new AuthorsOfWork(authorName, workName)));
    }

    @Operation(summary = "Получить все все опубликованные произведения")
    @GetMapping("/publishedWorks")
    List<PublishedWork> findPublishedWork(@RequestParam(required = false) String bookName, @RequestParam(required = false) String workName) {
        return publishedWorkRepository.findAll(Example.of(new PublishedWork(bookName, workName)));
    }

    @Operation(summary = "Получить все книги автора")
    @GetMapping("/authorBooks")
    List<AuthorsOfBook> findBookByAuthor(@RequestParam(required = false) String authorName, @RequestParam(required = false) String bookName) {
        return authorsOfBookRepository.findAll(Example.of(new AuthorsOfBook(authorName, bookName)));
    }

    @Operation(summary = "Добавить нового читателя")
    @PostMapping("/readers")
    Reader addReader(@RequestBody Reader reader) {
        return readerRepository.save(reader);
    }


    @Operation(summary = "Добавить новую книгу в библиотеку")
    @PostMapping("/booksInLibrary")
    BooksInLibrary addBooksInLibrary(@RequestBody BooksInLibrary booksInLibrary) {
        return booksInLibraryRepository.save(booksInLibrary);
    }

    @Operation(summary = "Получить данные по всем книгам")
    @GetMapping("/booksInLibrary")
    List<BooksInLibrary> findBooksInLibrary(@RequestParam(required = false) String bookName, @RequestParam(required = false) String libraryName) {
        return booksInLibraryRepository.findAll(Example.of(new BooksInLibrary(bookName, libraryName)));
    }

    @Operation(summary = "Получить данные по всем заказам")
    @GetMapping("/orders")
    List<Orders> findOrders() {
        return ordersRepository.findAll();
    }

    @Operation(summary = "Количество экземпляров нужной книги в каждом филиале")
    @Tag(name = "Распределенный запрос")
    @GetMapping("/booksInlibs/{bookId}/count")
    Map<Object, Long> countBookInAllLibrary(@PathVariable("bookId") Long bookId) {
        Map<Object, Long> map = cBooksInLibraryRepository.countBooks(bookId, 3).stream().map(key -> Pair.of(key.getId().getLibrary(), key.getBook())).collect(Collectors.groupingBy(Pair::getKey, Collectors.counting()));
        map.put(3L, booksInLibraryRepository.countBooks(bookId));
        return map;
    }
}

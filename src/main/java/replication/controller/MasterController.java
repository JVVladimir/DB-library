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
    private final LibraryRepository libraryRepository;
    private final PublisherRepository publisherRepository;
    private final WorkRepository workRepository;

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
    List<Work> getWork(@RequestParam(required = false) String name, @RequestParam(required = false) String genre) {
        return workRepository.findAll(Example.of(new Work(name, genre)));
    }

    @Operation(summary = "Получить все доступные жанры")
    @GetMapping("/genres")
    List<Genre> get() {
        return genreRepository.findAll();
    }

    @Operation(summary = "Добавить новый жанр")
    @PostMapping("/genres")
    Genre add(@RequestBody Genre genre) {
        return genreRepository.save(genre);
    }

    @Operation(summary = "Получить все доступные типы книг")
    @GetMapping("/types")
    List<Type> findType() {
        return typeRepository.findAll();
    }

    @Operation(summary = "Добавить новый тип книги")
    @PostMapping("/types")
    Type addType(@RequestBody Type type) {
        return typeRepository.save(type);
    }

    @Operation(summary = "Получить данные по всем читателям")
    @GetMapping("/readers")
    List<Reader> findReaders() {
        return readerRepository.findAll();
    }

    @Operation(summary = "Добавить нового читателя")
    @PostMapping("/readers")
    Reader addReader(@RequestBody Reader reader) {
        return readerRepository.save(reader);
    }

    @Operation(summary = "Получить данные по всем книгам в филиале")
    @GetMapping("/booksInLibrary")
    List<BooksInLibrary> findBooksInLibrary() {
        return booksInLibraryRepository.findAll();
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

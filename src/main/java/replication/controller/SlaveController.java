package replication.controller;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.web.bind.annotation.*;
import replication.model.sharing.*;
import replication.repository.master.WorkRepository;
import replication.repository.slave.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/filial-library")
@AllArgsConstructor
@Tag(name = "Библиотека-филиал")
public class SlaveController {

    private final SReaderRepository readerRepository;
    private final SGenreRepository genreRepository;
    private final SBookRepository bookRepository;
    private final SAuthorRepository authorRepository;
    private final SLibraryRepository libraryRepository;
    private final SPublisherRepository publisherRepository;
    private final SWorkRepository workRepository;

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
}

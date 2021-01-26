package replication.controller;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import replication.controller.dto.LibToBookCount;
import replication.model.sharing.Genre;
import replication.model.sharing.Reader;
import replication.model.sharing.Type;
import replication.repository.consolidation.CBooksInLibraryRepository;
import replication.repository.master.BooksInLibraryRepository;
import replication.repository.master.GenreRepository;
import replication.repository.master.ReaderRepository;
import replication.repository.master.TypeRepository;

import java.util.ArrayList;
import java.util.List;

@RestController("/main-library")
@AllArgsConstructor
@Tag(name = "Главная бибилиотека")
public class MasterController {

    private final GenreRepository genreRepository;
    private final TypeRepository typeRepository;
    private final ReaderRepository readerRepository;
    private final BooksInLibraryRepository booksInLibraryRepository;
    private final CBooksInLibraryRepository cBooksInLibraryRepository;

    private final OrdersRepository ordersRepository;
    private final AccountingRepository accountingRepository;
    private final BooksInLibraryRepository booksInLibraryRepository;

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

    @Operation(summary = "Количество экземпляров нужной книги в каждом филиале")
    @Tag(name = "Распределенный запрос")
    @GetMapping("/booksInlibs/{bookId}/count")
    List<LibToBookCount> countBookInAllLibrary(@PathVariable("bookId") Long bookId) {
        List<LibToBookCount> list = new ArrayList<>();
        list.add(new LibToBookCount(3, booksInLibraryRepository.countBooks(bookId)));
        cBooksInLibraryRepository.countBooks(bookId);
        return list;
    }
    @Operation(summary = "Получить данные по всем заказам")
    @GetMapping("/orders")
    List<Orders> findOrders() {
        return ordersRepository.findAll();
    }

    @Operation(summary = "Получить данные по всем заказам")
    @GetMapping("/accounting")
    List<Accounting> findAccounting() {
        return accountingRepository.findAll();
    }


    @Operation(summary = "Получить данные по всем заказам")
    @GetMapping("/booksInLibrary")
    List<BooksInLibrary> findBooksInLibrary() {
        return booksInLibraryRepository.findAll();
    }
}

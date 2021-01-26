package replication.controller;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import replication.model.sharing.Genre;
import replication.model.sharing.Reader;
import replication.model.sharing.Type;
import replication.repository.master.GenreRepository;
import replication.repository.master.ReaderRepository;
import replication.repository.master.TypeRepository;

import java.util.List;

@RestController("/main-library")
@AllArgsConstructor
@Tag(name = "Главная бибилиотека")
public class MasterController {

    private final GenreRepository genreRepository;
    private final TypeRepository typeRepository;
    private final ReaderRepository readerRepository;


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

}

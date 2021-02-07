package replication.controller;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import replication.model.sharing.Genre;
import replication.model.sharing.Reader;
import replication.repository.slave.SGenreRepository;
import replication.repository.slave.SReaderRepository;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/filial-library")
@AllArgsConstructor
@Tag(name = "Библиотека-филиал")
public class SlaveController {

    private final SReaderRepository readerRepository;
    private final SGenreRepository genreRepository;

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

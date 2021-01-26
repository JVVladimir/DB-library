package replication.controller;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import replication.model.sharing.Genre;
import replication.model.sharing.Type;
import replication.repository.master.GenreRepository;
import replication.repository.master.TypeRepository;

import java.util.List;

@RestController("/main-library")
@AllArgsConstructor
@Tag(name = "Главная бибилиотека")
public class MasterController {

    private final GenreRepository genreRepository;
    private final TypeRepository typeRepository;


    @Operation(summary = "Получить все доступные жанры")
    @GetMapping("/genres")
    List<Genre> get() {
        return genreRepository.findAll();
    }

    @Operation(summary = "Получить все доступные типы")
    @GetMapping("/types")
    List<Type> findType() {
        return typeRepository.findAll();
    }

}

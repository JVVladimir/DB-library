package replication.controller;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import replication.model.sharing.Reader;
import replication.repository.slave.SReaderRepository;

import java.util.List;

@RestController()
@AllArgsConstructor
@Tag(name = "Библиотека-филиал")
public class SlaveController {

    private final SReaderRepository readerRepository;

    @Operation(summary = "Получить данные по всем читателям")
    @GetMapping("/filial-library/readers")
    List<Reader> findReaders() {
        return readerRepository.findAll();
    }

    @Operation(summary = "Добавить нового читателя")
    @PostMapping("/filial-library/readers")
    Reader addReader(@RequestBody Reader reader) {
        return readerRepository.save(reader);
    }
}

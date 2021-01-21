package replication.controller;


import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import replication.model.consolidation.Accounting;
import replication.model.sharing.Genre;
import replication.model.sharing.Type;
import replication.service.MainService;

import java.util.List;

@RestController
@AllArgsConstructor
public class MainController {

    private final MainService registrationService;


    @GetMapping("/genre/{id}")
    boolean findGenre(@PathVariable Long id) {
        return registrationService.findGenre(id).isPresent();
    }


    @GetMapping("/type/{id}")
    boolean findType(@PathVariable Long id) {
        return registrationService.findType(id).isPresent();
    }

    @GetMapping("/allAccounting")
    List<Accounting> findAllAccounting() {
        return registrationService.findAllAccounting();
    }
}

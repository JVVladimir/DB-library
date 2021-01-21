package replication.controller;


import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import replication.model.sharing.Genre;
import replication.model.sharing.Type;
import replication.service.MainService;

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
    boolean findAllAccounting() {
        return registrationService.findAllAccounting().isEmpty();
    }
}

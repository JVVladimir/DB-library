package replication.controller;


import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@Tag(name = "Библиотека-филиал")
public class SlaveController {

    //private final MainService registrationService;

//    @GetMapping("/genre/{id}")
//    boolean findGenre(@PathVariable Long id) {
//        return registrationService.findGenre(id).isPresent();
//    }
//
//
//    @GetMapping("/type/{id}")
//    boolean findType(@PathVariable Long id) {
//        return registrationService.findType(id).isPresent();
//    }
//
//    @GetMapping("/allAccounting")
//    List<Accounting> findAllAccounting() {
//        return registrationService.findAllAccounting();
//    }
}

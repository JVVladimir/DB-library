package replication.controller;


import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import replication.model.sharing.Reader;
import replication.service.RegistrationService;

@RestController
@AllArgsConstructor
public class RegistrationController {

    private final RegistrationService registrationService;

    @PostMapping("/register")
    public Long register(@RequestBody Reader reader) {
        return registrationService.save(reader);
    }


    @GetMapping("/reader/{id}")
    boolean findById(@PathVariable Long id) {
        return registrationService.findById(id).isPresent();
    }
}

package replication.service;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import replication.model.sharing.Reader;
import replication.repository.master.RegistrationRepository;

import java.util.Optional;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final RegistrationRepository repository;

    public Optional<Reader> findById(Long id) {
        return repository.findById(id);
    }

    public Long save(Reader reader) {
        return repository.save(reader).getId();
    }
}

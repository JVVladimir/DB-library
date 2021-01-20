package replication.repository;

import org.springframework.data.repository.CrudRepository;
import replication.model.Reader;

import java.util.List;

public interface RegistrationRepository extends CrudRepository<Reader, Long> {
    List<Reader> findByName(String name);
}
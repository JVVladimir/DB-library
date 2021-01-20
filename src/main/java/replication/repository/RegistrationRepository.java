package replication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.Reader;
import java.util.Optional;

public interface RegistrationRepository extends JpaRepository<Reader, Long> {

    Optional<Reader> findById(Long id);

    <S extends Reader> S save(S reader);
}
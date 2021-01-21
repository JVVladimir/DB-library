package replication.repository.master;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Reader;

import java.util.Optional;

public interface RegistrationRepository extends JpaRepository<Reader, Long> {

    Optional<Reader> findById(Long id);

    <S extends Reader> S save(S reader);
}
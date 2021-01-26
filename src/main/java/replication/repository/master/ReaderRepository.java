package replication.repository.master;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Reader;

public interface ReaderRepository extends JpaRepository<Reader, Long> {
}
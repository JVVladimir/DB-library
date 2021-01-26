package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Reader;

public interface SReaderRepository extends JpaRepository<Reader, Long> {
}
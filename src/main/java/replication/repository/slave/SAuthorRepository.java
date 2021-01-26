package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Author;

public interface SAuthorRepository extends JpaRepository<Author, Long> {
}
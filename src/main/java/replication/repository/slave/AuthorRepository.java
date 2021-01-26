package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Author;

public interface AuthorRepository extends JpaRepository<Author, Long> {
}
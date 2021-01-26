package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.AuthorsOfBook;

public interface SAuthorsOfBookRepository extends JpaRepository<AuthorsOfBook, Long> {
}
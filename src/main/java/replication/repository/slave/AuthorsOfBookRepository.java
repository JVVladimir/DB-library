package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.AuthorsOfBook;

public interface AuthorsOfBookRepository extends JpaRepository<AuthorsOfBook, Long> {
}
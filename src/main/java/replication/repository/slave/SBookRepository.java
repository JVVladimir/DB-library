package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Book;

public interface SBookRepository extends JpaRepository<Book, Long> {
}
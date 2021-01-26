package replication.repository.master;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
}
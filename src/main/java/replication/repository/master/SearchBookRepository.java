package replication.repository.master;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Book;

import java.util.Optional;

public interface SearchBookRepository extends JpaRepository<Book, Long> {

    Optional<Book> findById(Long id);

    <S extends Book> S save(S book);
}
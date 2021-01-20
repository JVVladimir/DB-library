package replication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.Book;

import java.util.Optional;

public interface SearchBookRepository extends JpaRepository<Book, Long> {

    Optional<Book> findById(Long id);

    <S extends Book> S save(S book);
}
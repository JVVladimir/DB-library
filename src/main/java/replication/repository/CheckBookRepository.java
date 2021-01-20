package replication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.BooksInLibrary;

import java.util.Optional;

public interface CheckBookRepository extends JpaRepository<BooksInLibrary, Long> {

    Optional<BooksInLibrary> findById(Long id);
}
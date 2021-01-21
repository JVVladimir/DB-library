package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.BooksInLibrary;

import java.util.Optional;

public interface CheckBookRepository extends JpaRepository<BooksInLibrary, Long> {

    Optional<BooksInLibrary> findById(Long id);
}
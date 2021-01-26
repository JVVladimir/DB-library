package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.BooksInLibrary;

public interface SBooksInLibraryRepository extends JpaRepository<BooksInLibrary, Long> {
}
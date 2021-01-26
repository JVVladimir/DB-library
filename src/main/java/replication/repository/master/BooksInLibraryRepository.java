package replication.repository.master;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.BooksInLibrary;

public interface BooksInLibraryRepository extends JpaRepository<BooksInLibrary, Long> {
}
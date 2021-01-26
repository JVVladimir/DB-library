package replication.repository.consolidation;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.consolidation.BooksInLibrary;

public interface CBooksInLibraryRepository extends JpaRepository<BooksInLibrary, Long> {
}
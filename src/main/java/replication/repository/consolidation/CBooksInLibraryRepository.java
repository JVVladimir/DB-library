package replication.repository.consolidation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import replication.model.consolidation.BooksInLibrary;

import java.sql.ResultSet;

public interface CBooksInLibraryRepository extends JpaRepository<BooksInLibrary, Long> {

    @Query(value = "select bl_id_library, count(*) from books_in_library where bl_id_book = :bookId GROUP BY bl_id_library", nativeQuery = true)
    String countBooks(long bookId);
}
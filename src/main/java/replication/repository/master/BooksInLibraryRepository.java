package replication.repository.master;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import replication.model.sharing.BooksInLibrary;

public interface BooksInLibraryRepository extends JpaRepository<BooksInLibrary, Long> {

    @Query(value = "select count(*) from books_in_library where bl_id_book = :bookId AND bl_id_library = 3", nativeQuery = true)
    Long countBooks(long bookId);
}
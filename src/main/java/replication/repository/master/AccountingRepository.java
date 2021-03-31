package replication.repository.master;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import replication.model.sharing.Accounting;

import javax.transaction.Transactional;
import java.time.LocalDate;

public interface AccountingRepository extends JpaRepository<Accounting, Long> {

    @Modifying
    @Transactional
    @Query("update Accounting ac set ac.status=:status, ac.fine=:fine, ac.dateRet=:date where ac.accountingId.reader.id=:reader_id and ac.book.booksInLibraryId.id=:book_id")
    void updateAccount(@Param("status") String status, @Param("fine") Integer fine, @Param("reader_id") Long readerId, @Param("book_id") Long bookId, @Param("date") LocalDate date);
}
package replication.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class Accounting {
    @Id
    private int id;
    private Reader reader;
    private BooksInLibrary book;
    private LocalDate dateExt;
    private LocalDate dateRet;
    private String status;
    private int fine;
}

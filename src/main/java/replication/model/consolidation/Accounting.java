package replication.model.consolidation;

import lombok.Getter;
import lombok.ToString;
import replication.model.sharing.BooksInLibrary;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "accounting")
@Getter
@ToString
public class Accounting {

    @EmbeddedId
    private AccountingId id;

    @Column(name = "ac_id_book_in_lib")
    private Long library;

    @Column(name = "ac_date_ext")
    private LocalDate dateExt;

    @Column(name = "ac_date_ret")
    private LocalDate dateRet;

    @Column(name = "ac_status")
    private String status;

    @Column(name = "ac_fine", nullable = true)
    private Integer fine;
}

package replication.model;

import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "accounting")
@Getter
@ToString
public class Accounting {

    @EmbeddedId
    private AccountingId accountingId;

    @ManyToOne
    @JoinColumn(name = "ac_id_book_in_lib", referencedColumnName = "bl_id")
    private BooksInLibrary book;

    @Column(name = "ac_date_ext")
    private LocalDate dateExt;

    @Column(name = "ac_date_ret")
    private LocalDate dateRet;

    @Column(name = "ac_status")
    private String status;

    @Column(name = "ac_fine")
    private int fine;
}

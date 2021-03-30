package replication.model.sharing;

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

    @ManyToOne(targetEntity = BooksInLibrary.class)
    @JoinColumns({
            @JoinColumn(name = "ac_id_book_in_lib", referencedColumnName = "bl_id"),
            @JoinColumn(name = "ac_book_in_lib_id_lib", referencedColumnName = "bl_id_library")
    })
    private BooksInLibrary book;

    @Column(name = "ac_date_ext")
    private LocalDate dateExt;

    @Column(name = "ac_date_ret")
    private LocalDate dateRet;

    @Column(name = "ac_status")
    private String status;

    @Column(name = "ac_fine")
    private Integer fine;
}

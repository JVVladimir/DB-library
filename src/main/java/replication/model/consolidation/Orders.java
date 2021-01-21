package replication.model.consolidation;


import lombok.Getter;
import lombok.ToString;
import replication.model.sharing.Library;
import replication.model.sharing.Reader;

import javax.persistence.*;
import java.time.LocalDate;


@Entity
@Table(name = "orders")
@Getter
@ToString
public class Orders {

    @EmbeddedId
    private BooksInLibraryId id;

    @Column(name = "or_id_reader")
    private Long reader;

    @Column(name = "or_create_date")
    private LocalDate createDate;

    @Column(name = "or_exec_datet")
    private LocalDate execDate;

    @Column(name = "or_id_lib")
    private Long library;

    @Column(name = "or_status")
    private String status;
}

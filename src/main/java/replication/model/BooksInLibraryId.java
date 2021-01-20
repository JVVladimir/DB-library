package replication.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter
public class BooksInLibraryId implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "bl_id", unique = true)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "bl_id_library", referencedColumnName = "l_id")
    private Library library;
}

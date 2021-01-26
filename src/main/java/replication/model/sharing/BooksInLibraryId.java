package replication.model.sharing;

import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter
public class BooksInLibraryId implements Serializable {
    
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "bl_id")
    private Long id;

    @ManyToOne(targetEntity = Library.class)
    @JoinColumn(name = "bl_id_library", referencedColumnName = "l_id")
    private Library library;
}

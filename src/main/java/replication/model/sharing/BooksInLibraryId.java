package replication.model.sharing;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter
@NoArgsConstructor
public class BooksInLibraryId implements Serializable {
    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bl_id")
    private Long id;

    @ManyToOne(targetEntity = Library.class)
    @JoinColumn(name = "bl_id_library", referencedColumnName = "l_id")
    private Library library;

    public BooksInLibraryId(String library) {
        this.library = new Library(library, null);
    }
}

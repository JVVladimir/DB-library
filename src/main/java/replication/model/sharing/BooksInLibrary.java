package replication.model.sharing;


import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "books_in_library")
@Getter
@ToString
public class BooksInLibrary {

    @EmbeddedId
    private BooksInLibraryId booksInLibraryId;

    @ManyToOne
    @JoinColumn(name = "bl_id_book", referencedColumnName = "b_id")
    private Book book;

    @OneToMany
    Set<Accounting> accountings;

    public BooksInLibrary() {

    }
}

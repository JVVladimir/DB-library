package replication.model.consolidation;


import lombok.Getter;
import lombok.ToString;
import replication.model.sharing.Book;

import javax.persistence.*;


@Entity
@Table(name = "books_in_library")
@Getter
@ToString
public class BooksInLibrary {

    @EmbeddedId
    private BooksInLibraryId id;

    @Column(name = "bl_id_book")
    private Long book;
}

package replication.model.sharing;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "books_in_library")
@Getter
@ToString
@NoArgsConstructor
public class BooksInLibrary {

    @EmbeddedId
    private BooksInLibraryId booksInLibraryId;

    @ManyToOne(targetEntity = Book.class)
    @JoinColumn(name = "bl_id_book", referencedColumnName = "b_id")
    private Book book;

    public BooksInLibrary(String bookName, String libraryName) {
        this.booksInLibraryId = new BooksInLibraryId(libraryName);
        this.book = new Book(bookName, null);
    }
}

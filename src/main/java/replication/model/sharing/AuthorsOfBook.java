package replication.model.sharing;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "authors_of_book")
@Getter
@ToString
@NoArgsConstructor
public class AuthorsOfBook {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ab_id")
    private Long id;

    @ManyToOne(targetEntity = Author.class)
    @JoinColumn(name = "ab_id_author", referencedColumnName = "a_id")
    private Author author;

    @ManyToOne(targetEntity = Book.class)
    @JoinColumn(name = "ab_id_book", referencedColumnName = "b_id")
    private Book book;

    public AuthorsOfBook(String authorName, String bookName) {
        this.author = new Author(authorName);
        this.book = new Book(bookName, null);
    }
}

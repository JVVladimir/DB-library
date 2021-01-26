package replication.model.sharing;


import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "authors_of_book")
@Getter
@ToString
public class AuthorsOfBook {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ab_id")
    private Long id;

    @ManyToOne(targetEntity = Author.class)
    @JoinColumn(name = "ab_id_author", referencedColumnName = "a_id")
    private Author author;

    @ManyToOne(targetEntity = Book.class)
    @JoinColumn(name = "ab_id_book", referencedColumnName = "b_id")
    private Book book;
}

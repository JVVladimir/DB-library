package replication.model;


import javax.persistence.*;

import lombok.Getter;
import lombok.ToString;

@Entity
@Table(name = "authors_of_book")
@Getter
@ToString
public class AuthorsOfBook {

    @Id
    @Column(name = "ab_id", unique = true)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "ab_id_author", referencedColumnName = "a_id")
    private Author author;

    @ManyToOne
    @JoinColumn(name = "ab_id_book", referencedColumnName = "b_id")
    private Book book;
}

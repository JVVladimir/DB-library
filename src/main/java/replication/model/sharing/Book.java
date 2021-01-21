package replication.model.sharing;

import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name = "book")
@Getter
@ToString
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "b_id")
    private Long id;

    @Column(name = "b_name")
    private String name;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(
                    name = "b_id_publisher",
                    referencedColumnName = "p_id")
    })
    private Publisher publisher;

    @Column(name = "b_publish_year")
    private LocalDate publishYear;

    @Column(name = "b_isbn")
    private String isbn;

    @OneToMany
    Set<AuthorsOfBook> authorsOfBooks;

    @OneToMany
    Set<PublishedWork> publishedWorks;

    @OneToMany
    Set<BooksInLibrary> booksInLibraries;

    @OneToMany
    Set<Orders> orders;
}

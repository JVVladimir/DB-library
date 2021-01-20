package replication.model;


import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;
import lombok.Getter;
import lombok.ToString;

@Entity
@Table(name = "author")
@Getter
@ToString
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "a_id", unique = true)
    private Long id;

    @Column(name = "a_name")
    private String name;

    @Column(name = "a_born")
    private LocalDate born;

    @Column(name = "a_died")
    private LocalDate died;

    @OneToMany
    Set<AuthorsOfWork> authorsOfWorks;

    @OneToMany
    Set<AuthorsOfBook> authorsOfBooks;
}





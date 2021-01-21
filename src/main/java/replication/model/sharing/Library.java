package replication.model.sharing;

import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "library")
@Getter
@ToString
public class Library {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "l_id")
    private Long id;

    @Column(name = "l_name")
    private String name;

    @Column(name = "l_address")
    private String address;

    @OneToMany
    Set<BooksInLibrary> booksInLibraries;
}

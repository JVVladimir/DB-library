package replication.model;

import javax.persistence.*;

import lombok.Getter;
import lombok.ToString;

import java.util.Set;

@Entity
@Table(name = "library")
@Getter
@ToString
public class Library {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "l_id", unique = true)
    private Long id;

    @Column(name = "l_name")
    private String name;

    @Column(name = "l_address")
    private String address;

    @OneToMany
    Set<BooksInLibrary> booksInLibraries;
}

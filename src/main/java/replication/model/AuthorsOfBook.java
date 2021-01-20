package replication.model;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class AuthorsOfBook {
    @Id
    private int id;
    private Author author;
    private Book book;
}

package replication.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;


@Entity
public class Book {
    @Id
    private int id;
    private String name;
    private Publisher publisher;
    private LocalDate publishYear;
    private String isbn;
}

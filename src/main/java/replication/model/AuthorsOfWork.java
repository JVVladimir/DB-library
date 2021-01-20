package replication.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class AuthorsOfWork {
    @Id
    private int id;
    private Author author;
    private Work work;
}

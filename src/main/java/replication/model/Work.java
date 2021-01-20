package replication.model;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Work {
    @Id
    private int id;
    private String name;
    private Type type;
    private Genre genre;
}

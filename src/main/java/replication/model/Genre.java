package replication.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Genre {
    @Id
    private int id;
    private String name;
}

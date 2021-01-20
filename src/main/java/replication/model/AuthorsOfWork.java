package replication.model;

import javax.persistence.*;

import lombok.Getter;
import lombok.ToString;

@Entity
@Table(name = "authors_of_work")
@Getter
@ToString
public class AuthorsOfWork {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "aw_id", unique = true)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "aw_id_author", referencedColumnName = "a_id")
    private Author author;

    @ManyToOne
    @JoinColumn(name = "aw_id_work", referencedColumnName = "w_id")
    private Work work;
}

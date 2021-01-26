package replication.model.sharing;

import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "authors_of_work")
@Getter
@ToString
public class AuthorsOfWork {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "aw_id")
    private Long id;

    @ManyToOne(targetEntity = Author.class)
    @JoinColumn(name = "aw_id_author", referencedColumnName = "a_id")
    private Author author;

    @ManyToOne(targetEntity = Work.class)
    @JoinColumn(name = "aw_id_work", referencedColumnName = "w_id")
    private Work work;
}

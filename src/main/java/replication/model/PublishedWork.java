package replication.model;


import javax.persistence.*;

import lombok.Getter;
import lombok.ToString;

@Entity
@Table(name = "published_work")
@Getter
@ToString
public class PublishedWork {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "pw_id", unique = true)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "pw_id_work", referencedColumnName = "w_id")
    private Work work;

    @ManyToOne
    @JoinColumn(name = "pw_id_book", referencedColumnName = "b_id")
    private Book book;
}

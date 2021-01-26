package replication.model.sharing;


import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "published_work")
@Getter
@ToString
public class PublishedWork {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "pw_id")
    private Long id;

    @ManyToOne(targetEntity = Work.class)
    @JoinColumn(name = "pw_id_work", referencedColumnName = "w_id")
    private Work work;

    @ManyToOne(targetEntity = Book.class)
    @JoinColumn(name = "pw_id_book", referencedColumnName = "b_id")
    private Book book;
}

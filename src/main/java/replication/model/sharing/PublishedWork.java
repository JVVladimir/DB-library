package replication.model.sharing;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "published_work")
@Getter
@ToString
@NoArgsConstructor
public class PublishedWork {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pw_id")
    private Long id;

    @ManyToOne(targetEntity = Work.class)
    @JoinColumn(name = "pw_id_work", referencedColumnName = "w_id")
    private Work work;

    @ManyToOne(targetEntity = Book.class)
    @JoinColumn(name = "pw_id_book", referencedColumnName = "b_id")
    private Book book;


    public PublishedWork(String bookName, String workName) {
        this.book = new Book(bookName, null);
        this.work = new Work(workName, null, null);
    }
}

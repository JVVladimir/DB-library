package replication.model.sharing;

import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter
public class OrderId implements Serializable {


    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "or_id")
    private Long id;

    @ManyToOne(targetEntity = Book.class)
    @JoinColumn(name = "or_id_book", referencedColumnName = "b_id")
    private Book book;
}

package replication.model;

import lombok.EqualsAndHashCode;
import lombok.Getter;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter
public class OrderId implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "or_id", unique = true)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "or_id_book", referencedColumnName = "b_id")
    private Book book;
}

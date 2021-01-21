package replication.model.consolidation;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import replication.model.sharing.Book;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter
public class OrderId implements Serializable {

    @Column(name = "or_id")
    private Long id;

    @Column(name = "or_id_book")
    private Long book;
}

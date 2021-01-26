package replication.model.consolidation;


import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;


@Entity
@Table(name = "orders")
@Getter
@ToString
public class Orders {

    @EmbeddedId
    private OrderId id;

    @Column(name = "or_id_reader")
    private Long reader;

    @Column(name = "or_create_date")
    private LocalDate createDate;

    @Column(name = "or_exec_date")
    private LocalDate execDate;

    @Column(name = "or_id_lib")
    private Long library;

    @Column(name = "or_status")
    private String status;
}

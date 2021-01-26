package replication.model.sharing;


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
    private OrderId orderId;

    @ManyToOne(targetEntity = Reader.class)
    @JoinColumn(name = "or_id_reader", referencedColumnName = "r_id")
    private Reader reader;

    @Column(name = "or_create_date")
    private LocalDate createDate;

    @Column(name = "or_exec_date")
    private LocalDate execDate;

    @ManyToOne(targetEntity = Library.class)
    @JoinColumns({
            @JoinColumn(
                    name = "or_id_lib",
                    referencedColumnName = "l_id")
    })
    private Library library;

    @Column(name = "or_status")
    private String status;
}

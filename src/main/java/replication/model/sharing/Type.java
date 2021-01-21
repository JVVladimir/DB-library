package replication.model.sharing;

import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;


@Entity
@Table(name = "type")
@Getter
@ToString
public class Type {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "t_id")
    private Long id;

    @Column(name = "t_name", unique = true)
    private String name;
}

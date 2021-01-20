package replication.model;

import javax.persistence.*;

import lombok.Getter;
import lombok.ToString;


@Entity
@Table(name = "type")
@Getter
@ToString
public class Type {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "t_id", unique = true)
    private Long id;

    @Column(name = "t_name", unique = true)
    private String name;
}

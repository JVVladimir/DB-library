package replication.model;

import javax.persistence.*;

import lombok.Getter;
import lombok.ToString;


@Entity
@Table(name = "genre")
@Getter
@ToString
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "g_id", unique = true)
    private Long id;

    @Column(name = "g_name")
    private String name;
}

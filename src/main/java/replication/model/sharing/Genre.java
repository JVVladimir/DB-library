package replication.model.sharing;

import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;


@Entity
@Table(name = "genre")
@Getter
@ToString
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "g_id")
    private Long id;

    @Column(name = "g_name")
    private String name;
}

package replication.model.sharing;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "library")
@Getter
@ToString
@NoArgsConstructor
public class Library {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "l_id")
    private Long id;

    @Column(name = "l_name")
    private String name;

    @Column(name = "l_address")
    private String address;

    public Library(String name, String address) {
        this.name = name;
        this.address = address;
    }
}

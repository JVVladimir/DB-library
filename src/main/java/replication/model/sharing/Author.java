package replication.model.sharing;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name = "author")
@Getter
@ToString
@NoArgsConstructor
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "a_id")
    private Long id;

    @Column(name = "a_name")
    private String name;

    @Column(name = "a_born")
    private LocalDate born;

    @Column(name = "a_died")
    private LocalDate died;

    public Author(String name) {
        this.name = name;
    }
}





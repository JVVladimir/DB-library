package replication.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;
import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "work")
@Getter
@ToString
public class Work {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    @Column(name = "w_id", unique = true)
    private Long id;

    @Column(name = "w_name")
    private String name;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(
                    name = "w_id_type",
                    referencedColumnName = "t_id")
    })
    private Type type;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(
                    name = "w_id_genre",
                    referencedColumnName = "g_id")
    })
    private Genre genre;

    @OneToMany
    Set<AuthorsOfWork> authorsOfWorks;

    @OneToMany
    Set<PublishedWork> publishedWorks;
}

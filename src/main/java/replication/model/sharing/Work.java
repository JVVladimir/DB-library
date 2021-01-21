package replication.model.sharing;

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
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "w_id")
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

package replication.model.sharing;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;


@Entity
@Table(name = "genre")
@Getter
@ToString
@NoArgsConstructor
public class Genre {

    @Id
    @Column(name = "g_id")
    private Long id;

    @Column(name = "g_name")
    private String name;

    public Genre(String genre) {
        this.name = genre;
    }
}

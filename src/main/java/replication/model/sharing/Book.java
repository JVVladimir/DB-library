package replication.model.sharing;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name = "book")
@Getter
@ToString
@NoArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "b_id")
    private Long id;

    @Column(name = "b_name")
    private String name;

    @ManyToOne(targetEntity = Publisher.class)
    @JoinColumns({
            @JoinColumn(
                    name = "b_id_publisher",
                    referencedColumnName = "p_id")
    })
    private Publisher publisher;

    @Column(name = "b_publish_year")
    private LocalDate publishYear;

    @Column(name = "b_isbn")
    private String isbn;

    public Book(String name, String isbn) {
        this.name = name;
        this.isbn = isbn;
    }
}

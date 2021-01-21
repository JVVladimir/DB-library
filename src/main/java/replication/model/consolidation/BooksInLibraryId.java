package replication.model.consolidation;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import replication.model.sharing.Library;

import javax.persistence.*;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@Getter
public class BooksInLibraryId implements Serializable {
    
    @Column(name = "bl_id")
    private Long id;


    @Column(name = "bl_id_library")
    private Long library;
}

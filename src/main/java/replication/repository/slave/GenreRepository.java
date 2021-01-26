package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {
}
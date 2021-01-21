package replication.repository.master;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Genre;
import replication.model.sharing.Type;

import java.util.Optional;

public interface GenreRepository extends JpaRepository<Genre, Long> {

    Optional<Genre> findById(Long id);

    <S extends Type> S save(S type);
}
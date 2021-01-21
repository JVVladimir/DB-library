package replication.repository.slave;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Type;

;import java.util.Optional;

public interface TypeRepository extends JpaRepository<Type, Long> {

   Optional<Type> findById(Long id);
}
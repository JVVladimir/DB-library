package replication.repository.master;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.sharing.Type;

public interface TypeRepository extends JpaRepository<Type, Long> {
}
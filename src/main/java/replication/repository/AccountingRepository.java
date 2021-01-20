package replication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.Repository;
import replication.model.*;

import java.util.Optional;

public interface AccountingRepository extends JpaRepository<Accounting, Long> {

    Optional<Accounting> findById(Long id);

    <S extends Accounting> S save(S accounting);
}
package replication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import replication.model.*;

import java.util.Optional;

public interface OrderRepository extends JpaRepository<Orders, Long> {

    Optional<Orders> findById(Long id);

    <S extends Orders> S save(S order);
}
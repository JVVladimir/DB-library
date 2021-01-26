package replication.controller;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import replication.model.consolidation.Accounting;
import replication.repository.consolidation.CAccountingRepository;

import java.util.List;

@RestController("/consolidation")
@AllArgsConstructor
@Tag(name = "Консолидация данных")
public class ConsolidationController {

    private final CAccountingRepository accountRepository;

    @Operation(summary = "Получить все доступные счета")
    @GetMapping("/accounts")
    List<Accounting> findAllAccounting() {
        return accountRepository.findAll();
    }
}

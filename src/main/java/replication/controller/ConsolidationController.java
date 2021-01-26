package replication.controller;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import replication.model.consolidation.Accounting;
import replication.model.consolidation.BooksInLibrary;
import replication.model.consolidation.Orders;
import replication.repository.consolidation.CAccountingRepository;
import replication.repository.consolidation.CBooksInLibraryRepository;
import replication.repository.consolidation.COrdersRepository;

import java.util.List;

@RestController("/consolidation")
@AllArgsConstructor
@Tag(name = "Консолидация данных")
public class ConsolidationController {

    private final CAccountingRepository accountRepository;
    private final COrdersRepository ordersRepository;
    private final CBooksInLibraryRepository booksInLibraryRepository;

    @Operation(summary = "Получить учеты выдачи книг")
    @GetMapping("/accounts")
    List<Accounting> findAllAccounting() {
        return accountRepository.findAll();
    }

    @Operation(summary = "Получить все заказы")
    @GetMapping("/orders")
    List<Orders> findAllOrders() {
        return ordersRepository.findAll();
    }

    @Operation(summary = "Получить данные по книгам в библиотеках")
    @GetMapping("/booksInlibs")
    List<BooksInLibrary> findAllBooksInLibrary() {
        return booksInLibraryRepository.findAll();
    }
}

package replication.controller;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.hibernate.criterion.Order;
import org.springframework.web.bind.annotation.*;
import replication.model.consolidation.Accounting;
import replication.model.consolidation.BooksInLibrary;
import replication.model.consolidation.Orders;
import replication.model.sharing.Reader;
import replication.repository.consolidation.CAccountingRepository;
import replication.repository.consolidation.CBooksInLibraryRepository;
import replication.repository.consolidation.COrdersRepository;
import replication.repository.master.OrdersRepository;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/consolidation")
@AllArgsConstructor
@Tag(name = "Консолидация данных")
public class ConsolidationController {

    private final CAccountingRepository accountRepository;
    private final OrdersRepository mordersRepository;
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

    @Operation(summary = "Обновить данные по заказам")
    @PostMapping("/update/orders")
    List<Orders> updateOrders(@RequestBody Orders orders, Principal principal) {
        mordersRepository.updateOrders(orders.getStatus(), principal.getName(), orders.getId().getId(), orders.getId().getBook(), orders.getLibrary() == null? 0L: orders.getLibrary());
        ordersRepository.updateOrder(orders.getStatus(), principal.getName(), orders.getId().getId(), orders.getId().getBook(),  orders.getLibrary() == null? 0L: orders.getLibrary());
        return findAllOrders();
    }
}

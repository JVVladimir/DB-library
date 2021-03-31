CHANGE MASTER TO MASTER_HOST='mysql-master', MASTER_USER='repl', MASTER_PASSWORD='password' FOR CHANNEL "master";
CHANGE MASTER TO MASTER_HOST='mysql-slave', MASTER_USER='replslave', MASTER_PASSWORD='password' FOR CHANNEL "slave";
START SLAVE FOR CHANNEL "master";
START SLAVE FOR CHANNEL "slave";

create database if not exists librarydb;
use librarydb;


create table if not exists books_in_library
(
    bl_id         int not null,
    bl_id_library int  not null,
    bl_id_book    int  not null
);

create table if not exists accounting
(
    ac_id             int                       not null,
    ac_id_reader      int                 not null,
    ac_id_book_in_lib int                not null,
    ac_date_ext       date                      not null,
    ac_date_ret       date                      null,
    ac_status         char(10) default 'issued' not null,
    ac_fine           int                null,
    ac_book_in_lib_id_lib int null
);

alter table accounting add check (ac_date_ret >= ac_date_ext);
alter table accounting add check ( ac_status in ('issued', 'returned', 'lost'));

create table if not exists orders
(
    or_id          int  not null,
    or_id_book     int  not null,
    or_id_reader   int  not null,
    or_create_date date       not null,
    or_exec_date   date       null,
    or_id_lib      int  null,
    or_status      char(10)   not null
);

alter table orders add check (orders.or_create_date <= orders.or_exec_date);
alter table orders add check ( or_status in ('accepted', 'sent', 'delivered', 'refused'));



drop procedure if exists  UPDATE_ORDERS;
create procedure UPDATE_ORDERS(status varchar(250), role varchar(250), order_id int, book_id int, library_id int)
begin
    if role = 'transporter' then
        if exists (select * from orders where or_id=order_id and or_id_book=book_id and or_status='sent') then
            begin
                update orders
                set   or_status = status,
                      or_exec_date=CURRENT_DATE()
                where or_id = order_id and or_id_book = book_id and or_status='sent' and or_exec_date is null;
            end;
        end if;
    end if;
    if role = 'mainLibrarian' then
        if exists (select * from orders where or_id=order_id and or_id_book=book_id) then
            if status = 'sent' then
                begin
                    update orders
                    set   or_status = status,
                          or_id_lib = library_id
                    where or_id = order_id and or_id_book = book_id and or_status='accepted';
                end;
            end if;
            if status = 'refused' then
                begin
                    update orders
                    set   or_status = status,
                          or_exec_date=CURRENT_DATE()
                    where or_id = order_id and or_id_book = book_id and or_status='accepted' and or_exec_date is null;
                end;
            end if;
        end if;
    end if;
end;

CREATE USER repl@'%' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT REPLICATION SLAVE ON *.* TO repl@'%';

CHANGE MASTER TO MASTER_HOST='mysql-slave', MASTER_USER='replslave', MASTER_PASSWORD='password';

create database if not exists librarydb;
use librarydb;

create table if not exists author
(
    a_id   int   not null AUTO_INCREMENT,
    a_name varchar(100) not null,
    a_born date         not null,
    a_died date         null,
    primary key (a_id)
);

create table if not exists publisher
(
    p_id      int   not null AUTO_INCREMENT,
    p_name    varchar(100) not null,
    p_address varchar(100) not null,
    p_phone   varchar(30)  not null,
    p_mail    varchar(30)  not null,
    primary key (p_id)
);

create table if not exists library
(
    l_id      int   not null AUTO_INCREMENT,
    l_name    varchar(100) not null,
    l_address varchar(100) not null,
    primary key (l_id)
);

create table if not exists book
(
    b_id           int   not null AUTO_INCREMENT,
    b_name         varchar(100) not null,
    b_id_publisher int   not null,
    b_publish_year date         not null,
    b_isbn         varchar(35)  not null,
    primary key (b_id),
    constraint book_publisher_p_id_fk
        foreign key (b_id_publisher) references publisher (p_id)
);

create table if not exists reader
(
    r_id      int   not null AUTO_INCREMENT,
    r_name    varchar(100) not null,
    r_pasp    char(10)     not null,
    r_address varchar(100) not null,
    r_phone   varchar(30)  not null,
    r_mail    varchar(30)  null,
    r_id_lib  int   not null,
    primary key (r_id),
    constraint reader_r_pasp_uindex
        unique (r_pasp),
    constraint reader_library_l_id_fk
        foreign key (r_id_lib) references library (l_id)
);

create table if not exists genre
(
    g_id   int   not null AUTO_INCREMENT,
    g_name varchar(50) not null,
    primary key (g_id),
    constraint genre_g_name_uindex
        unique (g_name)
);

create table if not exists `type`
(
    t_id   int   not null AUTO_INCREMENT,
    t_name varchar(50) not null,
    primary key (t_id),
    constraint type_t_name_uindex
        unique (t_name)
);

create table if not exists work
(
    w_id       int   not null AUTO_INCREMENT,
    w_name     varchar(100) not null,
    w_id_type  int   not null,
    w_id_genre int   not null,
    primary key (w_id),
    constraint work_genre_g_id_fk
        foreign key (w_id_genre) references genre (g_id),
    constraint work_type_t_id_fk
        foreign key (w_id_type) references `type` (t_id)
);

create table if not exists authors_of_book
(
    ab_id        int   not null AUTO_INCREMENT,
    ab_id_author int not null,
    ab_id_book   int   not null,
    primary key (ab_id),
    constraint authors_of_book_author_a_id_fk
        foreign key (ab_id_author) references author (a_id),
    constraint authors_of_book_book_b_id_fk
        foreign key (ab_id_book) references book (b_id)
);

create table if not exists books_in_library
(
    bl_id         int   not null AUTO_INCREMENT,
    bl_id_library int not null,
    bl_id_book    int not null,
    primary key (bl_id, bl_id_library),
    constraint books_in_library_book_b_id_fk
        foreign key (bl_id_book) references book (b_id),
    constraint books_in_library_library_l_id_fk
        foreign key (bl_id_library) references library (l_id)
);

create table if not exists accounting
(
    ac_id             int                       not null AUTO_INCREMENT,
    ac_id_reader      int                not null,
    ac_id_book_in_lib int                not null,
    ac_date_ext       date                      not null,
    ac_date_ret       date                      null,
    ac_status         char(10) default 'issued' not null,
    ac_fine           int                null,
    ac_book_in_lib_id_lib int null,
    primary key (ac_id,  ac_id_reader),
    constraint accounting_books_in_library_bl_id_fk
        foreign key (ac_id_book_in_lib) references books_in_library (bl_id),
    constraint accounting_reader_r_id_fk
        foreign key (ac_id_reader) references reader (r_id)
);

alter table accounting add check (ac_date_ret >= ac_date_ext);
alter table accounting add check ( ac_status in ('issued', 'returned', 'lost'));

create table if not exists orders
(
    or_id          int not null AUTO_INCREMENT,
    or_id_book     int not null,
    or_id_reader   int not null,
    or_create_date date       not null,
    or_exec_date   date       null,
    or_id_lib      int null,
    or_status      char(10)   not null,
    primary key (or_id,  or_id_book),
    constraint order_book_b_id_fk
        foreign key (or_id_book) references book (b_id),
    constraint order_library_l_id_fk
        foreign key (or_id_lib) references library (l_id),
    constraint order_reader_r_id_fk
        foreign key (or_id_reader) references reader (r_id)
);

alter table orders add check (orders.or_create_date <= orders.or_exec_date);
alter table orders add check ( or_status in ('accepted', 'sent', 'delivered', 'refused'));

create table if not exists published_work
(
    pw_id      int not null AUTO_INCREMENT,
    pw_id_work int not null,
    pw_id_book int not null,
    primary key (pw_id),
    constraint published_work_book_b_id_fk
        foreign key (pw_id_book) references book (b_id),
    constraint published_work_work_w_id_fk
        foreign key (pw_id_work) references work (w_id)
);

create table if not exists authors_of_work
(
    aw_id        int not null AUTO_INCREMENT,
    aw_id_work   int not null,
    aw_id_author int not null,
    primary key (aw_id),
    constraint authors_of_work_author_a_id_fk
        foreign key (aw_id_author) references author (a_id),
    constraint authors_of_work_work_w_id_fk
        foreign key (aw_id_work) references work (w_id)
);


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

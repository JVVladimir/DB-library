insert into author(a_id, a_name, a_born, a_died) values
    (000001, 'L.N. Tolstoy', str_to_date('August 28 1828', '%M %d %Y'), str_to_date('November 07 1910', '%M %d %Y')),
    (000002, 'N.A. Nekrasov', str_to_date('November 28 1821', '%M %d %Y'), str_to_date('January 08 1877', '%M %d %Y')),
    (000003, 'J.D. Salinger', str_to_date('January 01 1919', '%M %d %Y'), str_to_date('January 27 2010', '%M %d %Y')),
    (000004, 'S.A. Esenin', str_to_date('September 21 1895', '%M %d %Y'), str_to_date('December 28 1925', '%M %d %Y')),
    (000005, 'A.M. Gorkyi', str_to_date('March 28 1868', '%M %d %Y'), str_to_date('June 18 1936', '%M %d %Y')),
    (000006, 'M.A. Bulgakov', str_to_date('May 15 1891', '%M %d %Y'), str_to_date('March 10 1940', '%M %d %Y')),
    (000007, 'A.I. Solcenizyn', str_to_date('December 11 1918', '%M %d %Y'), str_to_date('August 3 2008', '%M %d %Y')),
    (000008, 'A.P. Chechov', str_to_date('January 17 1828', '%M %d %Y'), str_to_date('June 15 1910', '%M %d %Y')),
    (000009, 'W. Shakespeare', str_to_date('April 26 1564', '%M %d %Y'), str_to_date('May 3 1616', '%M %d %Y')),
    (000010, 'J. Austen', str_to_date('December 16 1775', '%M %d %Y'), str_to_date('July 18 1817', '%M %d %Y'));


insert into publisher(p_id, p_name, p_address, p_phone, p_mail) values
  (000001, 'АСТ', 'Moscow, Presnenskaya nab., 6, building 2, BC "Empire"', 'a.plotnikova@ast.ru', '+7 499 951 6000 (ext. 712)'),
  (000002, 'SZKEO', 'St. Petersburg, Obukhovskoy Oborony Ave., 84, lit. E, office 43A, 192029', '8 (812) 365-40-44', 'sales@szkeo.ru'),
  (000003, 'Eksmo', 'st. Zorge, 1 building 1, Moscow, Moscow region, 123308', '8 (495) 411-68-86', 'imarket@book24.ru'),
  (000005, 'Alphabet', 'Staropetrovsky pr., 7, Moscow, 125130' , '8 (495) 627-57-28', 'info@atticus-group.ru');
                                                                       ;

insert into genre(g_id, g_name) values
    (000001, 'story'),
    (000002, 'tragedy');


insert into type(t_id, t_name) values
    (000001, 'composition'),
    (000004, 'play');

insert into work(w_id, w_name, w_id_type, w_id_genre) values
     (000001, 'Hamlet', 000004, 000002),
     (000002, 'Othello', 000004, 000002),
     (000003, 'Romeo and Juliet', 000004, 000002),
     (000004, 'The Lady with the Dog', 000001, 000001),
     (000005, 'Jumping',000001, 000001),
     (000006, 'Man in a Case', 000001, 000001),
     (000007, 'Boys', 000001, 000001),
     (000008, 'Ward number six', 000001, 000001),
     (000009, 'Kashtanka', 000001, 000001) ;

insert into authors_of_work(aw_id, aw_id_work, aw_id_author) values
     (000001, 000001, 000004),
     (000002, 000002, 000004),
     (000003, 000003, 000004),
     (000004, 000004, 000008),
     (000005, 000005, 000008),
     (000006, 000006, 000008),
     (000007, 000007, 000008),
     (000008, 000008, 000008),
     (000009, 000009, 000008);

insert into book(b_id, b_name, b_id_publisher, b_publish_year, b_isbn) values
    (000001, 'Anna Karenina', 000005, str_to_date('June 22 2020', '%M %d %Y'), '978-5-389-04935-2'),
    (000002, 'Master and Margarita', 000001, str_to_date('October 15 2015', '%M %d %Y'), '978-5-17-087884-0'),
    (000003, 'Morphine', 000001, str_to_date('July 10 2016', '%M %d %Y'), '978-5-17-095618-0'),
    (000004, 'Tragedies', 000005, str_to_date('November 24 2020', '%M %d %Y'), '978-5-389-18418-3'),
    (000005, 'A dream in a summer night', 000002, str_to_date('May 5 2018', '%M %d %Y'), '978-5-9603-0458-0'),
    (000006, 'GULAG Archipelago', 000003, str_to_date('April 17 2018', '%M %d %Y'), '978-5-04-098170-0'),
    (000007, 'Stories', 000001, str_to_date('May 28 2019', '%M %d %Y'), '978-5-17-114557-6');

insert into published_work(pw_id, pw_id_work, pw_id_book) values
     (000001, 000001, 000004),
     (000002, 000002, 000004),
     (000003, 000003, 000004),
     (000004, 000004, 000007),
     (000005, 000005, 000007),
     (000006, 000006, 000007),
     (000007, 000007, 000007),
     (000008, 000008, 000007),
     (000009, 000009, 000007);

insert into authors_of_book(ab_id, ab_id_author, ab_id_book) values
    (000001, 000001, 000001),
    (000002, 000006, 000002),
    (000003, 000006, 000003),
    (000004, 000004, 000004),
    (000005, 000004, 000005),
    (000006, 000007, 000006),
    (000007, 000008, 000007);

insert into library(l_id, l_name, l_address) values
    (000001, 'The library #1', 'st. Marshal Katukov, 11, bldg. 2'),
    (000002, 'The library #2', 'Bobrov per., 6, p. 1'),
    (000003, 'The library #3', '3rd Horoshevskaya St., 17'),
    (000004, 'The library #4', 'st. Tvardovsky, 21k2'),
    (000005, 'The library #5', 'st. Gabrichevsky, 8');

insert into books_in_library(bl_id, bl_id_library, bl_id_book) values
    (000001, 000001, 0000001),
    (000002, 000001, 0000001),
    (000003, 000001, 0000004),
    (000004, 000001, 0000001),
    (000005, 000001, 0000003),
    (000006, 000001, 0000002),
    (000007, 000001, 0000006);

insert into reader(r_id, r_name, r_pasp, r_address, r_phone, r_mail, r_id_lib) values
    (000001, 'N.A. Ivanova', '4012553412', 'st. Katmaeva 21', '89675542180', 'ivanova@mail.ru', 000001),
    (000002, 'B.A. Kurkova', '1054152452', 'st. Katukova 3/2', '89015412196', 'kurkova@gmail.com', 000005),
    (000003, 'B.O. Popov', '9923563612', 'st. Golubov 125', '89545542156', 'popov@gmail.com', 000004),
    (000004, 'Y.L. Krok', '8642103412', 'st. Bobrov 22', '89096725189', 'krok@ya.ru', 000002),
    (000005, 'H.A. Yup', '5611553233', 'st. Main 51', '89115532181', 'yup@mail.ru', 000003),
    (000006, 'K.O. Ptompov', '5592552210', 'st. Trubakova 109/23', '89075542145', 'ptop21@ya.ru', 000001),
    (000007, 'L.H. Kozlov', '8176319928', 'st. Translate 781', '89755345592', 'kozl23@gmail.com', 000002),
    (000008, 'R.E. Churk', '4924855687', 'st. Pobed 26', '89205422155', 'chuasdfv23@mail.ru', 000004),
    (000009, 'V.M. Iglova', '1212103499', 'st. Kulakova 121/18', '89015599186', 'igl2012rv@gmail.com', 000005);


insert into accounting(ac_id, ac_id_reader, ac_id_book_in_lib, ac_date_ext, ac_date_ret, ac_fine, ac_status, ac_book_in_lib_id_lib) values
    (000001, 000009, 000003, str_to_date('November 30 2020', '%M %d %Y'), null, null, 'issued', 4),
    (000002, 000005, 000004, str_to_date('December 22 2020', '%M %d %Y'),  str_to_date('December 28 2020', '%M %d %Y'), null, 'returned'),
    (000003, 000001, 000006, str_to_date('December 02 2020', '%M %d %Y'), null, null, 'issued', 4);


insert into orders(or_id, or_id_book, or_id_reader, or_create_date, or_exec_date, or_id_lib, or_status) values
    (000001, 000004, 000004, str_to_date('September 10 2020', '%M %d %Y'), null, null, 'accepted'),
    (000002, 000002, 000008, str_to_date('October 10 2020', '%M %d %Y'), null, 000001, 'sent');
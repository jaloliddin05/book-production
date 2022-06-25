
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--  users (id,fullname,password,email,status)
CREATE TABLE users(
    user_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    full_name text not null,
    user_name text not null,
    user_password text not null,
    email text not null,
    user_status text not null
);

--  categories (id,name)
CREATE TABLE categories(
    category_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    category_name text not null,
    category_img text
);

--  books (id,name,price,count,author,year,category_id)
CREATE TABLE books(
book_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
book_name text not null,
book_price numeric not null,
book_count int not null,
book_author text not null,
book_year int not null,
category_id uuid not null REFERENCES categories(category_id),
book_language text not null,
about_book text,
book_img text
);
--  user_book (id,book_id,user_id)

CREATE TABLE user_book(
    user_book_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    book_id uuid not null,
    user_id uuid not null
);

--  arxiv (id,book_id,user_id)

CREATE TABLE arxiv(
    arxiv_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    book_id uuid not null,
    user_id uuid not null,
    arxiv_time TIMESTAMP not null
);


-- INSERTING

INSERT INTO users(full_name,user_name,user_password,email,user_status) VALUES
('Abu Bakir','Abubakir','AbuBakir','lenovonoteb2ok@gmail.com','admin'),
('Jaloliddin Nasrullayev','Jaloliddin','Jaloliddin_2002','nasrullayevjaloliddin.ajf@gmail.com','admin'),
('Jasur Qorqmasov','Jasur','jasur_007','abubakir.def@gmail.com','user'),
('John Doe','John','Doe','johndoe@gmail.com','user');

INSERT INTO categories(category_name) VALUES
('Чтото');
-- ('Historical'),
-- ('Romance'),
-- ('Science Fiction'),
-- ('Fantasy');


INSERT INTO books(book_name,book_price,book_count,book_author,book_year,category_id,book_language) VALUES
('Otkan kunlar',15,20,'Abdulla Qodiriy',1926,'9178ac82-d8cc-4d25-a85a-dbe50ddd09f2','uzb'),
('Dune',10,10,'Frank Herbert',1965,'a94fdf00-4a66-4cef-ae1f-b597906b68cf','en'),
('Алгоритмические трюки для программистов',18,12,'Уоррен мл. Генри С',2018,'6375b552-1200-470e-8439-b846709acc2a','ru'),
('Harry Potter',8.99,25,'J.K.Rowling,Mary Gran',1999,'84996018-ba51-432a-ad2f-2b87c36b1bdc','en'),
('Hitler',20,11,'Lan Kershaw',2010,'0ebb7142-2f72-438a-b9a6-979121e9dac8','en');

-- a4d4d78c-17e9-4f6f-9764-bc8ed7320256  Jasur
-- 491c7689-578c-4677-8d04-6e93fe645d61  John

 --b870d2c0-d226-4df9-914b-edcfff46d365
 --26562692-1677-4cdb-ac45-27cc7f31418e
 --ba2ce890-ceed-4151-96e3-e5bb7f40e6f5
 --c147af09-bdc1-453c-a939-06c62791cd4d
 --b2e313d8-3315-4e9a-a7c7-aecc844bcbc0


INSERT INTO user_book(book_id, user_id) VALUES
('b870d2c0-d226-4df9-914b-edcfff46d365', 'a4d4d78c-17e9-4f6f-9764-bc8ed7320256'),
('26562692-1677-4cdb-ac45-27cc7f31418e', 'a4d4d78c-17e9-4f6f-9764-bc8ed7320256'),
('ba2ce890-ceed-4151-96e3-e5bb7f40e6f5', '491c7689-578c-4677-8d04-6e93fe645d61'),
('b870d2c0-d226-4df9-914b-edcfff46d365', '491c7689-578c-4677-8d04-6e93fe645d61');


-- CHANGES


CREATE TABLE book_raiting(
    book_raiting_id uuid DEFAULT uuid_generate_v4() NOT NULL,
    book_id uuid not null,
    book_raiting_count int not null,
    book_raiting_score int not null
);

-- ALTER TABLE books ADD COLUMN about_book text;
-- ALTER TABLE categories ADD COLUMN category_img text;
-- ALTER TABLE arxiv ADD COLUMN arxiv_time TIMESTAMP NOT NULL;

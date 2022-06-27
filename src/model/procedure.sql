-- PROCEDURE FOR BUYING BOOK
CREATE OR REPLACE PROCEDURE buy_book(b_id uuid, u_id uuid,cr_time date)
LANGUAGE plpgsql
AS
$$
DECLARE b_count int;
BEGIN
      b_count = (SELECT book_count from books where book_id = b_id) - 1;
     IF
       b_count >= 0
      THEN
      UPDATE books set book_count = b_count where book_id = b_id;
      INSERT INTO arxiv(book_id,user_id,arxiv_time) values (b_id,u_id,cr_time);
     END IF;
END
$$;

--   CREATED


CREATE OR REPLACE PROCEDURE book_rate(b_id uuid, b_score INT)
LANGUAGE plpgsql
AS
$$
BEGIN
    IF
    (select EXISTS  (SELECT book_id from book_raiting where book_id = b_id )) = true
    THEN
    UPDATE book_raiting set book_raiting_count = book_raiting_count + 1,
     book_raiting_score = book_raiting_score + b_score
     where book_id = b_id;
    ELSE
    INSERT INTO book_raiting
        (book_id, book_raiting_count, book_raiting_score)
    values
        (b_id, 1, b_score);
END IF;
END
$$;

-- CREATED
-- PROCEDURE FOR BUYING BOOK
CREATE OR REPLACE PROCEDURE buy_book(b_id int, u_id int)
LANGUAGE plpgsql
AS
$$
DECLARE b_count int;
BEGIN
      b_count = (SELECT count from book where book_id = b_id) - 1;
     IF
       b_count >= 0
      THEN
      UPDATE book set count = b_count where book_id = b_id;
      INSERT INTO arxive(book_id,user_id) values (b_id,u_id);
     END IF;
END
$$;

--  DIDN'T CREATED

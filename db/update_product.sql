update products
set name = ${name}, price = ${price}, img = ${img}
where id = ${id};

select * from products
order by id asc;
create table products(
id serial primary key,
name varchar(25),
price int,
img text
);

insert into products (name, price, img)
values ('Shoes', 40, 'https://cdn11.bigcommerce.com/s-s3wy5uz523/images/stencil/450x450/products/171/1339/b5__29324.1502948087.jpg?c=2'),
('Pants', 80, 'https://cdn.shopify.com/s/files/1/0309/2321/products/mens-pants-velocity-dress-pant-navy-ministry-of-supply_342_650x650_crop_top.progressive.jpg?v=1539647559'),
('Jacket', 180, 'https://slimages.macysassets.com/is/image/MCY/products/5/optimized/11334625_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$')
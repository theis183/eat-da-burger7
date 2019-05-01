CREATE database burger_db;
use burger_db;

create table burgers (
    id int(11) not null auto_increment, 
    burger_name varchar(36),
    devoured boolean,
    primary key (id)
)
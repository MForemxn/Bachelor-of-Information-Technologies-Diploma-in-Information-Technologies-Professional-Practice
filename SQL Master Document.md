# SQL Intro
SQL is a standard language for managing and manipulating relational databases. It allows you to create, read, update, and delete [[database]] records. SQL is used in various [[database]] systems like MySQL, PostgreSQL, SQL Server, and SQLite.

## SQL [[Syntax]]
SQL [[syntax]] is the set of rules that defines the structure of SQL queries. [[SQL commands]] are case-insensitive, but it's a common practice to write SQL keywords in uppercase for [[readability]].

**Example:**
```sql
SELECT * FROM users;
```

## SQL Select
The `SELECT` statement is used to query the [[database]] and retrieve [[data]] from one or more tables.

**Example:**
```sql
SELECT first_name, last_name FROM employees;
```

## SQL Select Distinct
The `DISTINCT` keyword is used to return only unique values from a column.

**Example:**
```sql
SELECT DISTINCT department FROM employees;
```

## SQL Where
The `WHERE` clause is used to filter records based on specific conditions.

**Example:**
```sql
SELECT * FROM products WHERE price > 100;
```

## SQL Order By
The `ORDER BY` clause is used to sort the result set in ascending or descending order.

**Example:**
```sql
SELECT * FROM employees ORDER BY last_name ASC;
```

## SQL And
The `AND` operator is used to combine multiple conditions in the `WHERE` clause.

**Example:**
```sql
SELECT * FROM orders WHERE status = 'shipped' AND quantity > 10;
```

## SQL Or
The `OR` operator is used to combine multiple conditions where any of the conditions can be true.

**Example:**
```sql
SELECT * FROM products WHERE category = 'Electronics' OR category = 'Books';
```

## SQL Not
The `NOT` operator is used to negate a condition in the `WHERE` clause.

**Example:**
```sql
SELECT * FROM customers WHERE NOT city = 'New York';
```

## SQL Insert Into
The `INSERT INTO` statement is used to add new records to a table.

**Example:**
```sql
INSERT INTO employees (first_name, last_name, department) VALUES ('John', 'Doe', 'HR');
```

## SQL Null Values
NULL values represent missing or undefined [[data]]. You can use `IS NULL` or `IS NOT NULL` to filter NULL values.

**Example:**
```sql
SELECT * FROM orders WHERE delivery_date IS NULL;
```

## SQL Update
The `UPDATE` statement is used to modify existing records in a table.

**Example:**
```sql
UPDATE employees SET department = 'Marketing' WHERE employee_id = 5;
```

## SQL Delete
The `DELETE` statement is used to remove records from a table.

**Example:**
```sql
DELETE FROM customers WHERE last_purchase < '2023-01-01';
```

## SQL Select Top
The `TOP` keyword is used to limit the number of rows returned in the result set.

**Example:**
```sql
SELECT TOP 5 * FROM products ORDER BY price DESC;
```

## SQL Aggregate Functions
Aggregate functions perform calculations on a set of values and return a single value. Common aggregate functions include `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX`.

## SQL Min and Max
The `MIN` and `MAX` functions are used to find the smallest and largest values in a set.

**Example:**
```sql
SELECT MIN(price) AS LowestPrice, MAX(price) AS HighestPrice FROM products;
```

## SQL Count
The `COUNT` [[function]] returns the number of rows that match a specified condition.

**Example:**
```sql
SELECT COUNT(*) FROM orders WHERE status = 'completed';
```

## SQL Sum
The `SUM` [[function]] calculates the total sum of a numeric column.

**Example:**
```sql
SELECT SUM(total_amount) FROM invoices;
```

## SQL Avg
The `AVG` [[function]] calculates the average value of a numeric column.

**Example:**
```sql
SELECT AVG(rating) FROM reviews;
```

## SQL Like
The `LIKE` operator is used to search for a specified pattern in a column.

**Example:**
```sql
SELECT * FROM customers WHERE email LIKE '%@gmail.com';
```

## SQL Wildcards
Wildcards are used with the `LIKE` operator to match patterns. Common wildcards include `%` (any sequence of characters) and `_` (a single character).

**Example:**
```sql
SELECT * FROM products WHERE product_name LIKE 'A%';
```

## SQL In
The `IN` operator is used to check if a value matches any value in a list of values.

**Example:**
```sql
SELECT * FROM employees WHERE department IN ('HR', 'Sales');
```

## SQL Between
The `BETWEEN` operator is used to filter the result set within a specified range.

**Example:**
```sql
SELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';
```

## SQL Aliases
Aliases are temporary names used to rename a table or column for the duration of a query.

**Example:**
```sql
SELECT e.first_name AS FirstName, e.last_name AS LastName FROM employees e;
```

## SQL Joins
Joins are used to combine rows from two or more tables based on a related column.

## SQL Inner Join
The `INNER JOIN` keyword returns rows when there is a match in both tables.

**Example:**
```sql
SELECT orders.order_id, customers.customer_name
FROM orders
INNER JOIN customers ON orders.customer_id = customers.customer_id;
```

## SQL Left Join
The `LEFT JOIN` keyword returns all rows from the left table and matched rows from the right table. Rows from the left table with no match in the right table will have NULL values.

**Example:**
```sql
SELECT employees.employee_id, departments.department_name
FROM employees
LEFT JOIN departments ON employees.department_id = departments.department_id;
```

## SQL Right Join
The `RIGHT JOIN` keyword returns all rows from the right table and matched rows from the left table. Rows from the right table with no match in the left table will have NULL values.

**Example:**
```sql
SELECT products.product_id, suppliers.supplier_name
FROM products
RIGHT JOIN suppliers ON products.supplier_id = suppliers.supplier_id;
```

## SQL Full Join
The `FULL JOIN` keyword returns all rows when there is a match in one of the tables. Rows without a match in either table will have NULL values.

**Example:**
```sql
SELECT employees.employee_id, departments.department_name
FROM employees
FULL JOIN departments ON employees.department_id = departments.department_id;
```

## SQL Self Join
A `SELF JOIN` is a regular join but the table is joined with itself.

**Example:**
```sql
SELECT e1.employee_id, e1.manager_id, e2.employee_id AS manager_id
FROM employees e1
INNER JOIN employees e2 ON e1.manager_id = e2.employee_id;
```

## SQL Union
The `UNION` operator is used to combine the results of two or more `SELECT` statements. The `UNION` operator returns distinct values.

**Example:**
```sql
SELECT city FROM customers
UNION
SELECT city FROM suppliers;
```

# SQL [[Database]]
A [[database]] is an organized collection of [[data]], generally stored and accessed electronically from a computer system. SQL provides commands to create, manage, and manipulate databases.

## SQL Create DB
The `CREATE DATABASE` statement is used to create a new [[database]].

**Example:**
```sql
CREATE DATABASE company;
```

## SQL Drop DB
The `DROP DATABASE` statement is used to delete an existing [[database]] and all its associated data.

**Example:**
```sql
DROP DATABASE company;
```

## SQL Backup DB
Backing up a [[database]] involves creating a copy of its [[data]] to prevent [[data]] loss. The exact command depends on the [[database]] system being used. 

**Example (MySQL):**
```sql
mysqldump -u username -p database_name > backup_file.sql
```

## SQL Create Table
The `CREATE TABLE` statement is used to create a new table in a [[database]].

**Example:**
```sql
CREATE TABLE employees (
    employee_id INT AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    hire_date DATE,
    PRIMARY KEY (employee_id)
);
```

## SQL Drop Table
The `DROP TABLE` statement is used to delete an existing table and all its [[data]].

**Example:**
```sql
DROP TABLE employees;
```

## SQL Alter Table
The `ALTER TABLE` statement is used to modify an existing table's structure, such as adding, deleting, or modifying columns.

**Example:**
```sql
ALTER TABLE employees ADD COLUMN department VARCHAR(50);
```

## SQL Constraints
Constraints are rules applied to table columns to enforce [[data]] [[integrity]]. Common constraints include `NOT NULL`, `UNIQUE`, `PRIMARY KEY`, `FOREIGN KEY`, `CHECK`, and `DEFAULT`.

## SQL Not Null
The `NOT NULL` constraint ensures that a column cannot have NULL values.

**Example:**
```sql
CREATE TABLE employees (
    employee_id INT NOT NULL,
    first_name VARCHAR(50) NOT NULL
);
```

## SQL Unique
The `UNIQUE` constraint ensures that all values in a column are different.

**Example:**
```sql
CREATE TABLE users (
    user_id INT UNIQUE,
    username VARCHAR(50) UNIQUE
);
```

## SQL Primary Key
The `PRIMARY KEY` constraint uniquely identifies each record in a table and automatically creates a unique index on the column(s).

**Example:**
```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50)
);
```

## SQL Foreign Key
The `FOREIGN KEY` constraint is used to link records in one table to records in another table.

**Example:**
```sql
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
```

## SQL Check
The `CHECK` constraint ensures that values in a column meet a specific condition.

**Example:**
```sql
CREATE TABLE products (
    product_id INT,
    price DECIMAL(10, 2),
    CHECK (price > 0)
);
```

## SQL Default
The `DEFAULT` constraint provides a default value for a column when no value is specified.

**Example:**
```sql
CREATE TABLE orders (
    order_id INT,
    order_date DATE DEFAULT CURRENT_DATE
);
```

## SQL Index
An `INDEX` is used to improve the speed of [[data]] retrieval operations on a table. Indexes are created on columns that are frequently used in queries.

**Example:**
```sql
CREATE INDEX idx_last_name ON employees(last_name);
```

## SQL Auto Increment
The `AUTO_INCREMENT` attribute is used to automatically generate a unique value for a column, typically for primary [[keys]].

**Example:**
```sql
CREATE TABLE employees (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50)
);
```

## SQL Dates
SQL provides various functions to work with date and time [[data types]]. These functions can be used to manipulate and retrieve date and time values.

**Example:**
```sql
SELECT CURRENT_DATE AS today;
SELECT DATE_ADD(CURRENT_DATE, INTERVAL 7 DAY) AS next_week;
```

## SQL Views
A `VIEW` is a virtual table based on the result of a query. It can be used to simplify complex queries or provide a specific perspective of the [[data]].

**Example:**
```sql
CREATE VIEW employee_view AS
SELECT first_name, last_name FROM employees WHERE hire_date > '2024-01-01';
```

## [[SQL Injection]]
[[SQL Injection]] is a [[security vulnerability]] that allows an attacker to interfere with the queries an application makes to its [[database]]. Proper validation and parameterized queries are essential to prevent [[SQL Injection]] attacks.

**Example:**
```sql
-- Vulnerable query
SELECT * FROM users WHERE username = 'admin' AND password = 'password';
```

## SQL Hosting
SQL databases can be hosted on various platforms, including local servers, cloud services (like AWS RDS, Google Cloud SQL, Azure SQL [[Database]]), or managed [[database]] services.

## SQL [[Data Types]]
SQL supports various [[data types]] for columns, including numeric types (e.g., `INT`, `FLOAT`), [[string]] types (e.g., `VARCHAR`, `TEXT`), date and time types (e.g., `DATE`, `TIMESTAMP`), and others.

**Example:**
```sql
CREATE TABLE example (
    id INT,
    name VARCHAR(100),
    price DECIMAL(10, 2),
    created_at TIMESTAMP
);
```

# SQL Keywords
|Keyword|Description|
|---|---|
|[ADD](https://www.w3schools.com/sql/sql_ref_add.asp)|Adds a column in an existing table|
|[ADD CONSTRAINT](https://www.w3schools.com/sql/sql_ref_add_constraint.asp)|Adds a constraint after a table is already created|
|[ALL](https://www.w3schools.com/sql/sql_ref_all.asp)|Returns true if all of the subquery values meet the condition|
|[ALTER](https://www.w3schools.com/sql/sql_ref_alter.asp)|Adds, deletes, or modifies columns in a table, or changes the data type of a column in a table|
|[ALTER COLUMN](https://www.w3schools.com/sql/sql_ref_alter_column.asp)|Changes the data type of a column in a table|
|[ALTER TABLE](https://www.w3schools.com/sql/sql_ref_alter_table.asp)|Adds, deletes, or modifies columns in a table|
|[AND](https://www.w3schools.com/sql/sql_ref_and.asp)|Only includes rows where both conditions is true|
|[ANY](https://www.w3schools.com/sql/sql_ref_any.asp)|Returns true if any of the subquery values meet the condition|
|[AS](https://www.w3schools.com/sql/sql_ref_as.asp)|Renames a column or table with an alias|
|[ASC](https://www.w3schools.com/sql/sql_ref_asc.asp)|Sorts the result set in ascending order|
|[BACKUP DATABASE](https://www.w3schools.com/sql/sql_ref_backup_database.asp)|Creates a back up of an existing [[database]]|
|[BETWEEN](https://www.w3schools.com/sql/sql_ref_between.asp)|Selects values within a given range|
|[CASE](https://www.w3schools.com/sql/sql_ref_case.asp)|Creates different outputs based on conditions|
|[CHECK](https://www.w3schools.com/sql/sql_ref_check.asp)|A constraint that limits the value that can be placed in a column|
|[COLUMN](https://www.w3schools.com/sql/sql_ref_column.asp)|Changes the data type of a column or deletes a column in a table|
|[CONSTRAINT](https://www.w3schools.com/sql/sql_ref_constraint.asp)|Adds or deletes a constraint|
|[CREATE](https://www.w3schools.com/sql/sql_ref_create.asp)|Creates a [[database]], index, view, table, or procedure|
|[CREATE DATABASE](https://www.w3schools.com/sql/sql_ref_create_database.asp)|Creates a new SQL database|
|[CREATE INDEX](https://www.w3schools.com/sql/sql_ref_create_index.asp)|Creates an index on a table (allows duplicate values)|
|[CREATE OR REPLACE VIEW](https://www.w3schools.com/sql/sql_ref_create_or_replace_view.asp)|Updates a view|
|[CREATE TABLE](https://www.w3schools.com/sql/sql_ref_create_table.asp)|Creates a new table in the database|
|[CREATE PROCEDURE](https://www.w3schools.com/sql/sql_ref_create_procedure.asp)|Creates a stored procedure|
|[CREATE UNIQUE INDEX](https://www.w3schools.com/sql/sql_ref_create_unique_index.asp)|Creates a unique index on a table (no duplicate values)|
|[CREATE VIEW](https://www.w3schools.com/sql/sql_ref_create_view.asp)|Creates a view based on the result set of a SELECT statement|
|[DATABASE](https://www.w3schools.com/sql/sql_ref_database.asp)|Creates or deletes an SQL [[database]]|
|[DEFAULT](https://www.w3schools.com/sql/sql_ref_default.asp)|A constraint that provides a default value for a column|
|[DELETE](https://www.w3schools.com/sql/sql_ref_delete.asp)|Deletes rows from a table|
|[DESC](https://www.w3schools.com/sql/sql_ref_desc.asp)|Sorts the result set in descending order|
|[DISTINCT](https://www.w3schools.com/sql/sql_ref_distinct.asp)|Selects only distinct (different) values|
|[DROP](https://www.w3schools.com/sql/sql_ref_drop.asp)|Deletes a column, constraint, [[database]], index, table, or view|
|[DROP COLUMN](https://www.w3schools.com/sql/sql_ref_drop_column.asp)|Deletes a column in a table|
|[DROP CONSTRAINT](https://www.w3schools.com/sql/sql_ref_drop_constraint.asp)|Deletes a UNIQUE, PRIMARY KEY, FOREIGN KEY, or CHECK constraint|
|[DROP DATABASE](https://www.w3schools.com/sql/sql_ref_drop_database.asp)|Deletes an existing SQL [[database]]|
|[DROP DEFAULT](https://www.w3schools.com/sql/sql_ref_drop_default.asp)|Deletes a DEFAULT constraint|
|[DROP INDEX](https://www.w3schools.com/sql/sql_ref_drop_index.asp)|Deletes an index in a table|
|[DROP TABLE](https://www.w3schools.com/sql/sql_ref_drop_table.asp)|Deletes an existing table in the [[database]]|
|[DROP VIEW](https://www.w3schools.com/sql/sql_ref_drop_view.asp)|Deletes a view|
|[EXEC](https://www.w3schools.com/sql/sql_ref_exec.asp)|Executes a stored procedure|
|[EXISTS](https://www.w3schools.com/sql/sql_ref_exists.asp)|Tests for the existence of any record in a subquery|
|[FOREIGN KEY](https://www.w3schools.com/sql/sql_ref_foreign_key.asp)|A constraint that is a key used to link two tables together|
|[FROM](https://www.w3schools.com/sql/sql_ref_from.asp)|Specifies which table to select or delete [[data]] from|
|[FULL OUTER JOIN](https://www.w3schools.com/sql/sql_ref_full_outer_join.asp)|Returns all rows when there is a match in either left table or right table|
|[GROUP BY](https://www.w3schools.com/sql/sql_ref_group_by.asp)|Groups the result set (used with aggregate functions: COUNT, MAX, MIN, SUM, AVG)|
|[HAVING](https://www.w3schools.com/sql/sql_ref_having.asp)|Used instead of WHERE with aggregate functions|
|[IN](https://www.w3schools.com/sql/sql_ref_in.asp)|Allows you to specify multiple values in a WHERE clause|
|[INDEX](https://www.w3schools.com/sql/sql_ref_index.asp)|Creates or deletes an index in a table|
|[INNER JOIN](https://www.w3schools.com/sql/sql_ref_inner_join.asp)|Returns rows that have matching values in both tables|
|[INSERT INTO](https://www.w3schools.com/sql/sql_ref_insert_into.asp)|Inserts new rows in a table|
|[INSERT INTO SELECT](https://www.w3schools.com/sql/sql_ref_insert_into_select.asp)|Copies [[data]] from one table into another table|
|[IS NULL](https://www.w3schools.com/sql/sql_ref_is_null.asp)|Tests for empty values|
|[IS NOT NULL](https://www.w3schools.com/sql/sql_ref_is_not_null.asp)|Tests for non-empty values|
|[JOIN](https://www.w3schools.com/sql/sql_ref_join.asp)|Joins tables|
|[LEFT JOIN](https://www.w3schools.com/sql/sql_ref_left_join.asp)|Returns all rows from the left table, and the matching rows from the right table|
|[LIKE](https://www.w3schools.com/sql/sql_ref_like.asp)|Searches for a specified pattern in a column|
|[LIMIT](https://www.w3schools.com/sql/sql_ref_limit.asp)|Specifies the number of records to return in the result set|
|[NOT](https://www.w3schools.com/sql/sql_ref_not.asp)|Only includes rows where a condition is not true|
|[NOT NULL](https://www.w3schools.com/sql/sql_ref_not_null.asp)|A constraint that enforces a column to not accept NULL values|
|[OR](https://www.w3schools.com/sql/sql_ref_or.asp)|Includes rows where either condition is true|
|[ORDER BY](https://www.w3schools.com/sql/sql_ref_order_by.asp)|Sorts the result set in ascending or descending order|
|[OUTER JOIN](https://www.w3schools.com/sql/sql_ref_outer_join.asp)|Returns all rows when there is a match in either left table or right table|
|[PRIMARY KEY](https://www.w3schools.com/sql/sql_ref_primary_key.asp)|A constraint that uniquely identifies each record in a [[database]] table|
|[PROCEDURE](https://www.w3schools.com/sql/sql_ref_procedure.asp)|A stored procedure|
|[RIGHT JOIN](https://www.w3schools.com/sql/sql_ref_right_join.asp)|Returns all rows from the right table, and the matching rows from the left table|
|[ROWNUM](https://www.w3schools.com/sql/sql_ref_rownum.asp)|Specifies the number of records to return in the result set|
|[SELECT](https://www.w3schools.com/sql/sql_ref_select.asp)|Selects [[data]] from a [[database]]|
|[SELECT DISTINCT](https://www.w3schools.com/sql/sql_ref_select_distinct.asp)|Selects only distinct (different) values|
|[SELECT INTO](https://www.w3schools.com/sql/sql_ref_select_into.asp)|Copies [[data]] from one table into a new table|
|[SELECT TOP](https://www.w3schools.com/sql/sql_ref_select_top.asp)|Specifies the number of records to return in the result set|
|[SET](https://www.w3schools.com/sql/sql_ref_set.asp)|Specifies which columns and values that should be updated in a table|
|[TABLE](https://www.w3schools.com/sql/sql_ref_table.asp)|Creates a table, or adds, deletes, or modifies columns in a table, or deletes a table or [[data]] inside a table|
|[TOP](https://www.w3schools.com/sql/sql_ref_top.asp)|Specifies the number of records to return in the result set|
|[TRUNCATE TABLE](https://www.w3schools.com/sql/sql_ref_truncate_table.asp)|Deletes the [[data]] inside a table, but not the table itself|
|[UNION](https://www.w3schools.com/sql/sql_ref_union.asp)|Combines the result set of two or more SELECT statements (only distinct values)|
|[UNION ALL](https://www.w3schools.com/sql/sql_ref_union_all.asp)|Combines the result set of two or more SELECT statements (allows duplicate values)|
|[UNIQUE](https://www.w3schools.com/sql/sql_ref_unique.asp)|A constraint that ensures that all values in a column are unique|
|[UPDATE](https://www.w3schools.com/sql/sql_ref_update.asp)|Updates existing rows in a table|
|[VALUES](https://www.w3schools.com/sql/sql_ref_values.asp)|Specifies the values of an INSERT INTO statement|
|[VIEW](https://www.w3schools.com/sql/sql_ref_view.asp)|Creates, updates, or deletes a view|
|[WHERE](https://www.w3schools.com/sql/sql_ref_where.asp)|Filters a result set to include only records that fulfill a specified condition|
# [[SQL Commands]]
[[SQL commands]] are categorised into DDL, DML, DCL, and TCL, each serving distinct purposes in [[database]] management and manipulation.

- Select statement is used for queries on single or multiple tables **Select** **column1, column2** **From** **Table1** **Where** **[****Condition on rows****]** **Group by** **column1, column2** **Having** **[****Condition on groups****]** **Order by** **column1**

## Clauses of the SELECT statement:
	- SELECT: List the columns (and expressions) to be returned from the query
	- FROM: Indicate the table(s) or view(s) from which [[data]] will be obtained
	- WHERE: Indicate the conditions under which a row will be included in the result
	- GROUP BY: Indicate categorization of results
	- HAVING: Indicate the conditions under which a category (group) will be included
	- ORDER BY: Sorts the result according to specified criteria

## Views
- Tables are used to store [[data]] physically in [[database]] correspond to relations in logical [[database]] design.
- Using SQL queries it is possible to create **virtual table** or **dynamic views.**
- **virtual table** or **dynamic views** can be manipulated like tables.
- **Create View [[syntax]]:** Create View View_Name as Select_Statement; 
	- **Example:** Create view P as select * from product_t;
	- Now P can be used as a table. Run the following query: Select * from P;
- Views provide users-controlled access to tables.
	- Base Table containing the raw [[data]].
- Dynamic View
	- A “virtual table” created dynamically upon request by a user.
	- No [[data]] actually stored; instead, [[data]] from base table made available to user.
	- Results are provided based on a SQL SELECT statement on base tables or other views.
- Materialized View
	- Copy or replication of [[data]].
	- [[Data]] actually stored.
	- Must be refreshed periodically to match corresponding base tables.
### Differences Between Dynamic View and Materialised View
1. The basic difference between View and Materialized View is that Views are **not stored** physically on the disk. On the other hands, Materialized Views are **stored** on the disc.
2. View can be defined as a **virtual table** created as a result of the query expression. However, Materialized View is a **physical copy**, picture or snapshot of the base table.
3. A view is always **updated** as the query creating View executes each time the View is used. On the other hands, Materialized View is updated **manually** or by applying **triggers** to it.
4. Materialized View responds **faster** than View as the Materialized View is precomputed.
5. Materialized View **utilizes** the **memory space** as it stored on the disk whereas, the View is just a **display** hence
## Advantages of Dynamic Views
- Simplify query commands
- Assist with [[data]] [[security]] (but don't rely on views for [[security]], there are more important [[security]] measures)
- Enhance programming productivity
- Contain most current base table [[data]]
- Use little storage space
- Provide customized view for user
- Establish physical [[data]] independence
it do not require memory space.

## Disadvantages of Dynamic Views
- Use processing time each time view is referenced
- May or may not be directly updateable
## Summary
- Clauses of the SELECT statement:
	- **SELECT** list the columns (and expressions) to be returned from the query
	- **FROM** indicate the table(s) or view(s) from which [[data]] will be obtained
	- **WHERE** ([[Comparison operators]], AND, OR, is not null, in/not in, between) indicate the conditions under which a row will be included in the result
	- **GROUP BY** (using aggregate functions AVG, MIN, MAX, SUM and COUNT) indicate categorization of results
	- **HAVING** indicate the conditions under which a category (group) will be included
	- **ORDER BY** Sorts the result according to specified criteria
- Create View
# [[SQL Master Document]]

# SQL II: Multiple Table Queries

## 1. Lecture Overview

The lecture focuses on advanced SQL topics, particularly the different types of joins and multiple table queries. The key objective is to understand how to combine data from multiple tables effectively.

## 2. Types of Joins

### 2.1 Inner Join

- **Inner Join**: Combines rows from two or more tables based on a related column, typically with matching values in the common columns.
- The result includes only rows that have matching values in both tables.

**Example:**

sql

Copy code

`SELECT * FROM TableA INNER JOIN TableB ON TableA.column_name = TableB.column_name;`

### 2.2 Cross Join

- **Cross Join**: Returns the Cartesian product of rows from two tables. Every row from the first table is combined with every row from the second table.

**Example:**

sql

Copy code

`SELECT * FROM TableA CROSS JOIN TableB;`

### 2.3 Outer Join

- **Left Outer Join**: Returns all rows from the left table, and the matched rows from the right table. If no match is found, NULL values are returned from the right table.
- **Right Outer Join**: Returns all rows from the right table, and the matched rows from the left table. If no match is found, NULL values are returned from the left table.
- **Full Outer Join**: Returns all rows when there is a match in either table. If there is no match, the result will contain NULL values on the side where the match is missing.

**Example:**

sql

Copy code

`SELECT * FROM TableA LEFT OUTER JOIN TableB ON TableA.column_name = TableB.column_name;`

### 2.4 Self Join

- **Self Join**: A table is joined with itself. This is useful when querying hierarchical data (e.g., employee-supervisor relationships).

**Example:**

sql

Copy code

`SELECT E.EmployeeID, E.EmployeeName, M.EmployeeName AS Manager FROM Employee E, Employee M WHERE E.EmployeeSupervisorID = M.EmployeeID;`

### 2.5 Natural Join (Not recommended)

- **Natural Join**: An implicit inner join where matching columns are automatically found based on their names. This is discouraged because it may introduce ambiguity or unexpected results.

## 3. Unions

- **Union**: Combines the result sets of two queries and removes duplicate rows.
- **Union All**: Combines the result sets of two queries without removing duplicates.

**Example:**

sql

Copy code

`SELECT column1, column2 FROM TableA UNION SELECT column1, column2 FROM TableB;`

### Rules for Unions:

- Both queries must return the same number of columns.
- The data types of corresponding columns must be compatible.

## 4. Example Queries

### Inner Join Example:

sql

Copy code

`SELECT order_t.customerid, customername, orderid, orderdate FROM customer_t INNER JOIN order_t ON customer_t.customerid = order_t.customerid WHERE customername = 'Eastern Furniture';`

### Cross Join Example:

sql

Copy code

`SELECT orderid, customername FROM customer_t CROSS JOIN order_t;`

### Outer Join Example:

sql

Copy code

`SELECT customer_t.customerid, customername, orderid FROM customer_t LEFT OUTER JOIN order_t ON customer_t.customerid = order_t.customerid;`

### Self Join Example:

sql

Copy code

`SELECT E.EmployeeID, E.EmployeeName, M.EmployeeName AS Manager FROM Employee E INNER JOIN Employee M ON E.ManagerID = M.EmployeeID;`

## 5. Class Activities

- **Activity 8.1**: Perform an inner join to find customer names and their order IDs.
- **Activity 8.2**: Use a cross join to find customer names and order numbers for all customers who placed an order.
- **Activity 8.3**: Use an inner join to find order details for customer 'Eastern Furniture'.
- **Activity 8.4**: Use multiple table joins to find order, product, and customer details.

## 6. Summary of Joins

- **Inner Join**: Returns only matching rows.
- **Cross Join**: Returns the Cartesian product.
- **Outer Join**: Returns all rows from one table and matching rows from the other, or NULLs if there is no match.
- **Self Join**: Joins a table with itself, useful for hierarchical data.
- **Natural Join**: Automatically joins tables based on column names but is not recommended.
- **Union**: Combines the results of two queries, removing duplicates unless UNION ALL is used.
## Subqueries Overview

A **subquery** is an inner query inside an outer query (can be in the `WHERE`, `FROM`, or `HAVING` clause).

### Subquery Types:

1. **Non-Correlated (Simple)**: Executed once for the entire outer query.
2. **Correlated**: Executed once for each row returned by the outer query.

---

## Subquery Example

**Question**: List all products whose price is above the average price of products with an 'Oak' finish.

```sql
SELECT productdescription, productstandardprice, productfinish  FROM product_t Table_a  WHERE productstandardprice >      (SELECT avg(productstandardprice)       FROM product_t Table_b       WHERE Table_b.productfinish= 'Oak') ORDER BY productfinish;
```

Example results:

|productdescription|productstandardprice|productfinish|
|---|---|---|
|8-Drawer Dresser|750.00|Birch|
|Entertainment Center|1650.00|Cherry|
|6' Grandfather Clock|890.00|Oak|

---

## Correlated Subquery Example

**Question**: List all products with a standard price above the average price of products with the same finish.

```sql
SELECT productdescription, productstandardprice, productfinish  FROM product_t Table_a  WHERE productstandardprice >      (SELECT avg(productstandardprice)       FROM product_t Table_b       WHERE Table_b.productfinish = Table_a.productfinish) ORDER BY productfinish;
```

### Processing Steps:

1. SQL engine processes the outer query row by row.
2. For each row in the outer query (`Table_a`), the product finish is passed to the subquery.
3. The subquery calculates the average price for products with the same finish and returns it to the outer query.

---

## Correlated vs. Non-Correlated Subqueries

- **Non-Correlated Subqueries**:
    - Do not depend on the outer query's data.
    - Executed once for the entire outer query.
- **Correlated Subqueries**:
    - Depend on the outer query's data.
    - Executed once for each row in the outer query.
    - Can use the `EXISTS` operator.

---

## Examples Using Different Subquery Techniques

### Question 1: Show all orders that include furniture finished in Oak using a **Join**.

```sql
SELECT orderid, product_t.productid, productdescription, productfinish  FROM orderline_t, product_t  WHERE product_t.productid = orderline_t.productid    AND productfinish='Oak';
```

### Question 2: Show all orders that include furniture finished in Oak using a **Simple Subquery**.

```sql
SELECT DISTINCT(orderid)  FROM orderline_t  WHERE productid IN      (SELECT productid       FROM product_t       WHERE productfinish='Oak');
```

### Question 3: Show all orders that include furniture finished in Oak using a **Correlated Subquery**.
```sql
SELECT DISTINCT(orderid)  FROM orderline_t  WHERE EXISTS      (SELECT *       FROM product_t       WHERE productid = orderline_t.productid       AND productfinish='Oak');
```

---

## Subquery in `FROM` Clause

**Question**: Calculate the average price of products finished in Oak, Pine, and Walnut.

```
SELECT avg(AveragePrice)  FROM      (SELECT productfinish, round(avg(productstandardprice)) as AveragePrice       FROM product_t       GROUP BY productfinish) MyTable WHERE productfinish IN ('Oak', 'Pine', 'Walnut');
```

---

## Complex Query Example

**Question**: Produce a list of all products and the number of times each product has been ordered.

```sql
SELECT productdescription, productid,         (SELECT count(*)          FROM orderline_t          WHERE productid = p.productid) as number_of_orders FROM product_t p;
```

---

## Guidelines for Writing Efficient Queries

- Understand the data model (entities and relationships).
- Know the desired attributes for results.
- Use `GROUP BY` and `HAVING` clauses to fine-tune results.
- **Avoid**:
    - Using `SELECT *`; specify attributes instead.
    - Overusing subqueries; try to minimize them.
    - Complex nesting of queries.

### Query Design Tips:

1. Write simple, clear queries.
2. Avoid self-joins where possible.
3. Retrieve only the data you need.

---

## Triggers and Stored Procedures

- **Routines**: Program modules executed on demand.
    - **Functions**: Routines that return values.
    - **Procedures**: Routines that do not return values.
- **Triggers**: Execute in response to an event (e.g., `INSERT`, `UPDATE`, or `DELETE`).

---

## Embedded and Dynamic SQL

- **Embedded SQL**: Hard-coded SQL statements in another language (e.g., C, Java).
- **Dynamic SQL**: Generated at runtime by the application.

### Advantages:

1. Flexible user interfaces.
2. Potential performance improvements.
3. Enhanced [[database security]].


## ONE SENTENCE SUMMARY:
SQL enables [[data]] retrieval, manipulation, and analysis through simple queries, aggregate functions, [[data]] modification statements, joins, and subqueries.

## OVERVIEW:
SQL (Structured Query Language) is a powerful tool for managing and manipulating relational databases. Simple queries allow users to retrieve specific [[data]] from one or more tables using the SELECT statement, often combined with WHERE clauses to filter results. Aggregate functions, such as COUNT, SUM, AVG, MAX, and MIN, perform calculations on a set of values to return a single value, aiding in [[data analysis]]. [[Data]] modification statements, including INSERT, UPDATE, and DELETE, enable users to add, modify, or remove [[data]] within tables. Joins are used to combine rows from two or more tables based on related columns, with simple joins (INNER JOIN) returning matching records and complex joins (LEFT JOIN, RIGHT JOIN, FULL JOIN) handling various matching scenarios. Subqueries, or nested queries, allow for more complex [[data]] retrieval by embedding one query within another. Together, these SQL features provide robust capabilities for [[data]] management and analysis.

## MAIN POINTS:
1. Simple queries retrieve specific [[data]] using SELECT and WHERE.
2. Aggregate functions perform calculations on [[data]] sets.
3. Common aggregate functions: COUNT, SUM, AVG, MAX, MIN.
4. [[Data]] modification statements: INSERT, UPDATE, DELETE.
5. Simple joins (INNER JOIN) combine matching rows from tables.
6. Complex joins: LEFT JOIN, RIGHT JOIN, FULL JOIN.
7. Subqueries embed one query within another for complex retrieval.
8. SQL enables comprehensive [[data]] management and analysis.
9. Joins handle various [[data]] matching scenarios.
10. Aggregate functions aid in summarising [[data]].

## TAKEAWAYS:
1. SQL retrieves and filters [[data]] with simple queries.
2. Aggregate functions summarise [[data]] sets for analysis.
3. [[Data]] modification statements manage table [[data]].
4. Joins combine [[data]] from multiple tables.
5. Subqueries enable complex [[data]] retrieval and manipulation.
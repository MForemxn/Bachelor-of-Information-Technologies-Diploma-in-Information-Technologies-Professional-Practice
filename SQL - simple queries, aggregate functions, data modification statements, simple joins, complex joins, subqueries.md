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
**Functional Dependency**: A constraint between two [[attributes]] in which the value of one attribute (**dependent**) is **uniquely** determined by the value of another attribute(s) (**determinant**).
- The value of attribute X (determinant) **uniquely** determines the value attribute(s) Y (dependent)
	- **X** **-> Y**
- The value of [[attributes]] X and Z (determinants) **uniquely** determine the value attribute(s) Y and M and N (dependents)
	- **X, Z** **-> Y, M, N**

**Example:**
- EmpID -> FName, Lname, DeptName, Salary

We determine Functional Dependencies based on the **[[Business Rules]]** and **Forms**. **NOT** based on the designed ERD.

# [[Keys]] of a Relation
- **Super-Key:**
	- Is a set of [[attributes]] within a table (relation) whose values can be used to uniquely identify a row in the relation.
- **Candidate Key:**
	- An attribute, or **minimal set** of [[attributes]], that uniquely identifies a row in a relation (A unique identifier).
	- Each **non-key field** is functionally dependent on every candidate key.
	- One of the candidate [[keys]] will become the primary key
	- E.g., perhaps there are both “credit card number” and “SS#” in a table. In this case both are candidate [[keys]].
- **Primary Key:**
	- Is a unique identifier.
	- It cannot contain null values.
	- One of the candidate [[keys]] will become the primary key.
# Attribute Closure
**Attribute Closure:**
Attribute closure of an attribute set can be defined as a set of [[attributes]] which can be functionally determined from it.

Given FD set of a Relation R, If A is an attribute (or a combination of [[attributes]]), the set of [[attributes]] in relation R that are **functionally** dependent on A is called Attribute Closure of A and it can be represented as A+

- **Steps to Find the Attribute Closure of A**
	- Given FD set of a Relation R:
		- Add A to the attribute closure set of A (A+)
		- Recursively add [[attributes]] which can be functionally determined from [[attributes]] of the set A+ until done.

# The [[Algorithm]] to Determine Candidate [[Keys]] Using FDs

- **Step 1:** Collect all related FDs to the relation R
- **Step 2:** Create a table with three columns
	- Write all [[attributes]] that only show up on the left side of some FDs under **Left** column
	- Write all [[attributes]] that only show up on the right side of some FDs under **Right** column
	- Write all [[attributes]] that only show up on both the left and right sides of some FDs under **Middle** column
- **Step 3:** Write all [[attributes]] that only show up These [[attributes]] must be part of a key on the left side 
- **Step 4:** Write all [[attributes]] that only show up These [[attributes]] are not part of any key on the right side 
- **Step 5:** Write all [[attributes]] that show up on both left and right sides These [[attributes]] may or may not be part of a key
- **Step 6:** Determine the closure of [[attributes]] under **Left** and **Middle** columns to find which combination of those [[attributes]] **will functionally determine all other [[attributes]]**. Start from [[attributes]] under Left column.
	- **Step 6.1.** Add the attribute to the attribute closure set
	- **Step 6.2.** Add [[Attributes]] which can be derived from any attribute of the attribute closure set.
- **Step 7:** The different combinations of [[attributes]] under Left and Middle columns that functionally determine **all** **other** [[attributes]] in relation R **are [[keys]]** for R i.e. **If A+ =R then A is a candidate key for R**

## Well Structured Relations
- A relation that contains **minimal [[data]] redundancy** and allows users to **insert**, **delete**, and **update** rows without causing [[data]] inconsistencies
- Goal is to avoid anomalies
	- **Insertion Anomaly:** adding new rows forces user to create duplicate [[data]]
	- **Deletion Anomaly:** deleting rows may cause a loss of [[data]] that would be needed for other future rows
	- **Modification (update) Anomaly:** changing [[data]] in a row forces changes to other rows because of duplication
## First Normal Form
- **I. II. No derived attribute** (Derived attribute can be calculated or derived using some business rule from other [[attributes]])
	- **Example:** In the following relation StuAge is a derived attribute and should be removed from the relation Student(StudentID, StuDateOfBirth, **StuAge**, StuAddress) Student(StudentID, StuDateOfBirth, StuAddress)
- **Every attribute value is atomic** (Atomic [[attributes]] can’t be divided into subparts)
	- **Example:** In the following relation StuAddress is a non-atomic attribute and should be divided to smaller parts
	- Student(StudentID, StuDateOfBirth, **StuAddress**)
	- Student(StudentID, StuDateOfBirth, **StuUnitNumber, StuStreet, StuSuburb, StuState**)
## Second Normal Form
- First the relation needs to be in 1NF: 
	- **INVOICE (OrderID, ProductID, OrderDate, CustomerID, CustomerName,** **CustomerAddress****,** **ProductDescription, ProductFinish, ProductStandardPrice, OrderQuantity)**
- AS you see CustomerAddress is not **atomic** and we need to change INVOICE relation as follows:
	- **INVOICE (OrderID, ProductID, OrderDate, CustomerID, CustomerName,** **CustomerUnitNumber****,**
	- **CustomerStreet****,** **CustomerSuburb****,** **CustomerState****, ProductDescription, ProductFinish,** 
	- **ProductStandardPrice, OrderQuantity)**
- **2NF PLUS** **no transitive dependencies** (functional dependencies on non-primary-key [[attributes]])
	- Note: This is called transitive, because the primary key is a determinant for another attribute, which in turn is a determinant for a third.
	- (If it is **non-transitive** then each non-key attribute is not dependent on, or a determinant for, any other non-key [[attributes]]).
## Third Normal Form
A functional dependency between the primary key and one or more non-key [[attributes]] that are dependent on the primary key **via another non-key** **attribute**.
### Solution
1. Non-key determinant with transitive dependencies go into a new table;

2. Non-key determinant becomes primary key in the new table, and

3. Stays as foreign key in the old table (relation)

# Anomaly Review
- **Insertion Anomaly**: if new product is ordered for employee **7892** working in existing company, **company [[data]]** must be re-entered, causing duplication
- **Deletion Anomaly**: if we delete **Visual Basic** from the list of skills related to employee **1123**, we lose information concerning this skill’s title and type.
- **Update (Modification) Anomaly**: updating the **skill type** of **skill ID C55** requires update in multiple records.



## ONE SENTENCE SUMMARY:
Normalisation organises [[database]] tables to reduce redundancy and improve [[integrity]], while set operators manipulate and combine [[data]] sets in relational databases.

## OVERVIEW:
Normalisation is a systematic [[process]] in [[database]] design that organises tables to minimise redundancy and dependency by dividing larger tables into smaller, related ones. This [[process]] involves applying a series of normal forms, each with specific rules and criteria, to ensure [[data]] [[integrity]] and consistency. The primary goal is to eliminate anomalies in [[data]] operations such as insertion, update, and deletion. Set operators, on the other hand, are used in SQL to perform operations on [[data]] sets, allowing for the combination, intersection, and difference of [[data]] from multiple tables. Common set operators include UNION, INTERSECT, and EXCEPT (or MINUS). These operators enable complex queries and [[data manipulation]], facilitating comprehensive [[data analysis]] and reporting. Together, normalisation and set operators enhance the efficiency, accuracy, and [[flexibility]] of relational databases.

## MAIN POINTS:
1. Normalisation reduces redundancy and dependency in tables.
2. Divides larger tables into smaller, related ones.
3. Applies normal forms to ensure [[data]] [[integrity]].
4. Eliminates anomalies in [[data]] operations.
5. Set operators manipulate and combine [[data]] sets.
6. Common set operators: UNION, INTERSECT, EXCEPT.
7. UNION combines [[data]] from multiple tables.
8. INTERSECT finds common [[data]] between tables.
9. EXCEPT (MINUS) identifies differences between tables.
10. Enhances efficiency, accuracy, and [[flexibility]] of databases.

## TAKEAWAYS:
1. Normalisation organises tables to minimise redundancy and ensure [[data]] [[integrity]].
2. Normal forms are applied to eliminate [[data]] anomalies.
3. Set operators like UNION, INTERSECT, and EXCEPT manipulate [[data]] sets.
4. These tools enable complex queries and comprehensive [[data analysis]].
5. Together, they improve the efficiency and accuracy of relational databases.
## What is the Relational [[Data]] Model?
- The relational [[data]] model is a framework for organizing and managing [[data]] in databases using a structure composed of tables (also known as relations). It provides a systematic way to store, retrieve, and manipulate [[data]] using a relational approach.

## Components of the Relational Model

### [[Data Structure]]
- **Definition**: The [[data]] structure in the relational model refers to how [[data]] is logically organized in tables, which consist of rows and columns.
- **Tables (Relations)**: The primary [[data]] structure in the relational model, where each table represents an entity or a relationship.
  - **Rows (Tuples)**: Each row represents a single record or instance in the table.
  - **Columns ([[Attributes]])**: Each column represents a specific attribute or property of the entity.
  - **Primary Key**: A unique identifier for each row in a table, ensuring that no two rows are identical.
  - **Foreign Key**: An attribute or a set of [[attributes]] in one table that references the primary key of another table, establishing relationships between tables.
  - **Example**: A `Student` table might have columns like `StudentID`, `Name`, `DateOfBirth`, with `StudentID` as the primary key.

### [[Data]] Manipulation
- **Definition**: [[Data]] manipulation in the relational model refers to the operations that can be performed on the [[data]] within the tables.
- **[[Structured Query Language (SQL)]]**: The standard language used for querying and manipulating [[data]] in relational databases.
  - **[[Data]] Retrieval (SELECT)**: Retrieve specific [[data]] from one or more tables based on certain criteria.
    - **Example**: `SELECT Name, DateOfBirth FROM Student WHERE StudentID = 123;`
  - **[[Data]] Insertion (INSERT)**: Add new rows of [[data]] into a table.
    - **Example**: `INSERT INTO Student (StudentID, Name, DateOfBirth) VALUES (123, 'John Doe', '2000-01-01');`
  - **[[Data]] Update (UPDATE)**: Modify existing [[data]] within a table.
    - **Example**: `UPDATE Student SET Name = 'Jane Doe' WHERE StudentID = 123;`
  - **[[Data]] Deletion (DELETE)**: Remove rows of [[data]] from a table.
    - **Example**: `DELETE FROM Student WHERE StudentID = 123;`
- **Joins**: Combine rows from two or more tables based on a related column between them.
  - **Types of Joins**:
    - **INNER JOIN**: Retrieves records with matching values in both tables.
    - **LEFT JOIN**: Retrieves all records from the left table and the matched records from the right table.
    - **RIGHT JOIN**: Retrieves all records from the right table and the matched records from the left table.
    - **FULL JOIN**: Retrieves all records when there is a match in either left or right table.

### [[Data]] [[Integrity]]
- **Definition**: [[Data]] [[integrity]] ensures the accuracy, consistency, and reliability of [[data]] within a relational [[database]].
- **Entity [[Integrity]]**: Ensures that each table has a unique primary key, and that the key is not null.
  - **Example**: Ensuring `StudentID` in the `Student` table is unique and always present.
- **Referential [[Integrity]]**: Maintains consistency between related tables by ensuring that foreign key values always correspond to primary key values in the related table.
  - **Example**: If a `StudentID` in an `Enrollment` table references a `Student` table, the value must exist in the `Student` table.
- **Domain [[Integrity]]**: Ensures that the [[data]] entered into a column falls within a valid set of values or range defined for that attribute.
  - **Example**: Ensuring that the `DateOfBirth` column in the `Student` table only contains valid dates.
- **User-Defined [[Integrity]]**: Enforces specific [[business rules]] and constraints relevant to the application.
  - **Example**: A rule that students must be at least 16 years old to enroll in a course.

## Importance of the Relational Model
- **[[Flexibility]]**: The relational model allows for complex queries and [[data]] relationships, supporting a wide range of applications.
- **[[Scalability]]**: Relational databases can handle large amounts of [[data]] and complex queries efficiently.
- **[[Data]] Consistency**: Ensures that [[data]] is consistent across the [[database]] through [[integrity]] constraints and normalized structures.
- **Standardization**: SQL provides a standardized way to interact with relational databases, making it widely adopted and supported.


# Relations
> A relation is a named, two-dimensional table of [[data]].
- Images Reference: https://www.guru99.com/relational-data-model-dbms.html
- A table consists of rows (records) and columns (attribute or field).
- Requirements for a table to qualify as a relation:
	- It must have a unique name.
	- Every attribute value must be atomic (not multivalued (like Skill), not composite (like Address))
	- Every row must be unique (can’t have two rows with exactly the same values for all their fields).
	- [[Attributes]] (columns) in tables must have unique names.
	- The order of the columns must be irrelevant.
	- The order of the rows must be irrelevant.
## Correspondence with E-R Model ([[Data structure]])
- Relations (tables) correspond with entity types and with many-to-many relationship types.
- Rows correspond with entity instances and with many-to-many relationship instances.
- Columns correspond with [[attributes]].
## Key Fields
- [[Keys]] are special fields that serve two main purposes:
	- Primary [[keys]] are unique identifiers of the relation.
		- Examples include Customer ID, etc. This guarantees that all rows are unique.
	- Foreign [[Keys]] are identifiers that enable a dependent relation (on the many side of a relationship) to refer to its parent relation (on the one side of the relationship).
- Foreign [[keys]] ➢ [[Keys]] can be simple (a single field) or composite (more than one field).
- [[Keys]] usually are used as indexes to speed up the response to user queries
## [[Integrity]] Constraints ([[Data]] [[integrity]])
> [[Integrity]] Constraints are applied to facilitate maintaining the accuracy and [[integrity]] of [[data]] in the [[database]].
- The major types of [[integrity]] constraint are:
### Domain Constraints
- A domain is the set of values that may be assigned to an attribute.
	- Example: the domain value for attribute Student_ID is an [[integer]] with 4 digits then the domain can be any [[integer]] number between 1000, 9999.
- A domain definition is usually consisting of the following components:
	- Domain name
	- Description
	- [[Data]] type
	- Size (or length)
	- Allowable values
	- Allowable range
### Entity [[Integrity]]
Entity [[Integrity]]:
- No primary key attribute may be null. All primary key fields MUST have [[data]].
- The primary key should have a unique value for each row in the table.
### Referential [[Integrity]]
- Referential [[Integrity]] states that any [[Foreign Keys]] value (on the relation of the many side) MUST match a primary key value in the relation of the one side.
- Referential [[integrity]] constraints are implemented with [[Foreign Keys]] to primary key references.
- Referential [[Integrity]] rule is used to maintain the consistency among rows between the two tables.
#### How referential [[integrity]] will be implemented in a relational [[database]]?
> Referential [[Integrity]] rules for delete operation
- Restrict: don’t allow delete of “parent” side if related rows exist in “dependent” side
- Cascade: automatically delete “dependent” side rows that correspond with the “parent” side row to be deleted
- Set-to-Null: set the [[Foreign Keys]] in the dependent side to null if deleting from the parent side
	- The [[Foreign Keys]] can be null
	- Set-to-Null is not allowed for weak and associated [[entities]]
	- Set-to-Null is not allowed when is related to a mandatory [[cardinality]].
# Transforming EER Diagrams into Relations
## Mapping Regular [[Entities]] to Relations
![[Screenshot 2024-09-03 at 10.01.24 am.png]]
![[Screenshot 2024-09-03 at 10.02.02 am.png]]
![[Screenshot 2024-09-03 at 10.02.11 am.png]]
## Mapping Binary Relationships (1:M, 1:1, M:N (Associative [[Entities]])
- One-to-Many: Primary key of the entity on the one side becomes a [[Foreign Keys]] of the entity on the many side.
- One-to-One: Primary key of the entity on the mandatory side becomes a [[Foreign Keys]] of the entity on the optional side.
- Many-to-Many → We need to create a new relation (Associative Entity) where the primary [[keys]] of the related [[entities]] will participate in making the composite primary key of the new relation (associative entity).
### Mapping Associative [[Entities]]
![[Screenshot 2024-09-03 at 10.04.13 am.png]]
### Mapping M:N [[Entities]]
![[Screenshot 2024-09-03 at 10.04.02 am.png]]
### Mapping Binary 1:1 Relationship
![[Screenshot 2024-09-03 at 10.03.47 am.png]]
### Mapping Binary 1:M Relationship
![[Screenshot 2024-09-03 at 10.03.35 am.png]]
### Mapping Binary 1:M Relationship
![[Screenshot 2024-09-03 at 10.03.28 am.png]]
## Mapping Ternary (and n-ary) Relationships
![[Screenshot 2024-09-03 at 10.06.28 am.png]]
![[Screenshot 2024-09-03 at 10.06.49 am.png]]
## Mapping Weak [[Entities]]
- The weak entity becomes a separate relation with a [[Foreign Keys]] taken from the superior entity
- The primary key composed of:
	- Partial identifier of weak entity
	- Primary key of identifying relation (strong entity)
> NOTE: Foreign [[keys]] can have null values, but the domain constraint for the [[Foreign Keys]] should NOT allow null value for a weak entity, or an associative entity, or if it is related to a mandatory [[cardinality]].
![[Screenshot 2024-09-03 at 10.15.57 am.png]]
## Mapping Unary Relationships
- **One-to-One** and **One-to-Many**: Recursive [[Foreign Keys]] in the same relation
- **Many-to-Many**: Two relations
	- One for the entity type
	- One for an **associative relation** in which the primary key has two [[attributes]], **both taken from the primary key of the entity**
## Mapping Supertype/Subtype Relationships
- One relation for supertype and for each subtype
- Supertype [[attributes]] (including identifier and subtype discriminator) go into supertype relation
- Subtype [[attributes]] go into each subtype; primary key of supertype relation also becomes primary key of subtype relation
- 1:1 relationship established between supertype and each subtype, with supertype as primary table

## ONE SENTENCE SUMMARY:
The relational [[data]] model organises [[data]] into tables (relations) with rows and columns, enabling efficient [[data]] management and retrieval.

## OVERVIEW:
The relational [[data]] model is a framework for organising [[data]] into structured tables, known as relations, which consist of rows and columns. Each table represents a specific entity, and each row corresponds to a unique record, while columns represent the [[attributes]] of the entity. This model uses [[keys]] to establish relationships between tables, ensuring [[data]] [[integrity]] and reducing redundancy. The relational [[data]] model supports powerful querying capabilities through [[Structured Query Language (SQL)]], allowing users to perform complex operations on the [[data]]. It is widely used due to its simplicity, [[flexibility]], and ability to handle large volumes of [[data]] efficiently. The model's foundation on mathematical principles ensures consistency and reliability, making it a preferred choice for many [[database]] management systems.

## MAIN POINTS:
1. Organises [[data]] into structured tables (relations).
2. Tables consist of rows (records) and columns ([[attributes]]).
3. Uses [[keys]] to establish relationships between tables.
4. Ensures [[data]] [[integrity]] and reduces redundancy.
5. Supports powerful querying with SQL.
6. Handles large volumes of [[data]] efficiently.
7. Based on mathematical principles for consistency.
8. Provides [[flexibility]] in [[data]] management.
9. Widely used in [[database]] management systems.
10. Preferred for its simplicity and reliability.

## TAKEAWAYS:
1. Relational [[data]] model structures [[data]] into tables with rows and columns.
2. [[Keys]] establish relationships and ensure [[data]] [[integrity]].
3. SQL enables complex [[data]] operations.
4. Efficiently manages large [[data]] volumes.
5. Valued for its simplicity, [[flexibility]], and reliability.
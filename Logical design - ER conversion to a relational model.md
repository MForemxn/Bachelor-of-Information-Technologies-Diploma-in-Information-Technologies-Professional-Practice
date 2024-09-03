# Logical Design - ER Conversion to a Relational Model

## What is Logical Design?
- Logical design is the [[process]] of transforming a conceptual ER model into a relational model, which can be implemented in a relational [[database]] management system (RDBMS). It involves converting [[entities]], relationships, and [[attributes]] into tables, columns, and constraints.

## Steps to Convert an ER Model to a Relational Model
### 1. Convert [[Entities]] to Tables
- **Entity as a Table**: Each entity in the ER model becomes a table in the relational model.
  - **Example**: If you have an entity `Student`, it will become a `Student` table.
- **[[Attributes]] as Columns**: The [[attributes]] of the entity become columns in the table.
  - **Example**: `Student` [[attributes]] like `StudentID`, `Name`, and `DateOfBirth` become columns in the `Student` table.
- **Primary Key**: The unique identifier (primary key) of the entity becomes the primary key of the table.
  - **Example**: `StudentID` becomes the primary key of the `Student` table.

### 2. Convert Relationships to Foreign [[Keys]]
- **One-to-Many Relationships**:
  - Add a foreign key column in the table on the "many" side of the relationship, referencing the primary key of the table on the "one" side.
  - **Example**: In a `Student` (1) to `Enrollment` (M) relationship, `Enrollment` would have a `StudentID` foreign key referencing the `StudentID` in the `Student` table.
- **Many-to-Many Relationships**:
  - Create a new table (often called a junction table) that includes foreign [[keys]] referencing the primary [[keys]] of the two related tables.
  - **Example**: For a `Student` (M) and `Course` (M) relationship, create an `Enrollment` table with `StudentID` and `CourseID` as foreign [[keys]].
- **One-to-One Relationships**:
  - Add a foreign key to either table, or both, depending on the nature of the relationship. Ensure that the foreign key is unique.
  - **Example**: In a `Person` (1) to `Passport` (1) relationship, `Passport` might have a `PersonID` foreign key that is also unique.

### 3. Convert [[Attributes]] to Columns
- **Simple [[Attributes]]**: Directly become columns in the corresponding table.
  - **Example**: `Name` as a simple attribute of `Student` becomes a `Name` column in the `Student` table.
- **Composite [[Attributes]]**: Break down into separate columns for each component.
  - **Example**: `FullName` might be divided into `FirstName` and `LastName` columns.
- **Multi-Valued [[Attributes]]**: Create a new table where each value is stored as a separate row, along with a foreign key linking back to the original entity.
  - **Example**: For a `PhoneNumbers` attribute in `Student`, create a `StudentPhoneNumbers` table with `StudentID` and `PhoneNumber` columns.
- **Derived [[Attributes]]**: These do not need to be stored unless necessary; they can be computed using queries.
  - **Example**: `Age` derived from `DateOfBirth` can be computed on-the-fly.

### 4. Apply [[Integrity]] Constraints
- **Primary Key Constraints**: Ensure that each table's primary key is unique and not null.
- **Foreign Key Constraints**: Establish relationships between tables by linking foreign [[keys]] to primary [[keys]].
- **Unique Constraints**: Ensure that certain columns, like candidate [[keys]], are unique across all records.
- **Check Constraints**: Define rules that [[data]] must follow (e.g., `Salary > 0`).

## Considerations During Conversion
- **Normalization**: Ensure the [[database]] design is normalized to avoid redundancy and maintain [[data]] [[integrity]]. This typically involves organizing the [[database]] into third normal form (3NF) or higher.
- **Referential [[Integrity]]**: Ensure that foreign key relationships maintain consistency across the [[database]], meaning that any foreign key value must match an existing primary key value or be null.
- **Handling of Weak [[Entities]]**: Weak [[entities]] that do not have a primary key of their own should include a foreign key from the strong entity to which they are related.

## Example of ER to Relational Model Conversion
- **ER Model Example**: A university ER model with [[entities]] `Student`, `Course`, and `Instructor`.
  - **[[Entities]] to Tables**:
    - `Student` → `Student` table with columns: `StudentID`, `Name`, `DateOfBirth`.
    - `Course` → `Course` table with columns: `CourseID`, `Title`, `Credits`.
    - `Instructor` → `Instructor` table with columns: `InstructorID`, `Name`, `Department`.
  - **Relationships to Foreign [[Keys]]**:
    - `Student` (M) enrolls in `Course` (M) → `Enrollment` table with `StudentID` and `CourseID` as foreign [[keys]].
    - `Instructor` (1) teaches `Course` (M) → `Course` table with `InstructorID` as a foreign key.

## Advantages of Converting ER [[Models]] to Relational [[Models]]
- **Structured [[Data]] Representation**: Provides a structured format that aligns with how relational databases store and manage [[data]].
- **Enhanced Query Performance**: Optimizes [[data]] retrieval and manipulation by using tables and relationships effectively.
- **[[Data]] [[Integrity]]**: Ensures [[data]] consistency and accuracy through well-defined [[keys]] and constraints.
- **[[Scalability]] and [[Maintenance]]**: Facilitates easier scaling and [[maintenance]] as the [[data]] grows and evolves.


## ONE SENTENCE SUMMARY:
Logical design involves converting an Entity-Relationship (ER) model into a relational model, creating structured tables for [[database]] [[implementation]].

## OVERVIEW:
Logical design is the [[process]] of transforming a conceptual Entity-Relationship (ER) model into a relational model, which can be implemented in a relational [[database]] management system (RDBMS). This conversion involves mapping [[entities]] to tables, [[attributes]] to columns, and relationships to foreign [[keys]]. During this [[process]], primary [[keys]] are identified to uniquely distinguish each record in a table, and foreign [[keys]] are used to establish relationships between tables. Normalisation techniques are applied to eliminate redundancy and ensure [[data]] [[integrity]]. The resulting relational model is a detailed blueprint that specifies the structure of the [[database]], including tables, columns, [[keys]], and constraints. This step is crucial for ensuring that the [[database]] is efficient, scalable, and aligned with the initial conceptual design.

## MAIN POINTS:
1. Converts ER model into a relational model.
2. Maps [[entities]] to tables and [[attributes]] to columns.
3. Identifies primary [[keys]] for unique records.
4. Uses foreign [[keys]] to establish table relationships.
5. Applies normalisation to eliminate redundancy.
6. Ensures [[data]] [[integrity]] and consistency.
7. Provides a detailed blueprint for [[database]] structure.
8. Specifies tables, columns, [[keys]], and constraints.
9. Ensures [[database]] efficiency and [[scalability]].
10. Aligns with the initial conceptual design.

## TAKEAWAYS:
1. Logical design transforms ER [[models]] into relational tables.
2. Primary and foreign [[keys]] establish [[data]] relationships.
3. Normalisation ensures [[data]] [[integrity]] and reduces redundancy.
4. Provides a detailed and structured [[database]] blueprint.
5. Ensures the [[database]] is efficient, scalable, and consistent with the conceptual design.
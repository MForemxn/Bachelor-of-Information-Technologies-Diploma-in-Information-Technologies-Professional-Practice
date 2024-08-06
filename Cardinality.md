# What is Cardinality?
- cardinality refers to the uniqueness of data values contained in a particular column (attribute) of a [[database]] table
- the concept is critical in [[database]] design, as it influences the relationships between tables
- cardinality can be of different types, such as one-to-one, one-to-many, many-to-one, and many-to-many, depending on how rows in one table relate to rows in another

# Types of Cardinality
- **One-to-One (1:1)**: Each row in Table A is linked to no more than one row in Table B, and vice versa. Example: A user table and a user_details table where each user has only one set of details.
- **One-to-Many (1:N)**: A row in Table A can be linked to many rows in Table B, but a row in Table B is linked to only one row in Table A. Example: A department table and an employees table where each department can have many employees.
- **Many-to-One (N:1)**: Many rows in Table A can be linked to one row in Table B. This is the inverse of one-to-many and often seen from the perspective of Table B.
- **Many-to-Many (N:N)**: Rows in Table A can be linked to multiple rows in Table B, and rows in Table B can be linked to multiple rows in Table A. This relationship usually requires a junction table. Example: A students table and a courses table where students can enroll in multiple courses and courses can have multiple students.

# Importance of Cardinality in [[Database]] Design
- **Data [[Integrity]]**: Ensures that the [[database]] accurately represents the real-world relationships among entities.
- **Performance Optimisation**: Properly defined relationships can improve query performance by reducing redundancy and ensuring efficient data retrieval.
- **Scalability**: Understanding cardinality helps in designing scalable databases that can handle growth in data volume without significant performance degradation.

# Cardinality and Entity-Relationship Diagrams (ERDs)
- ERDs visually represent the relationships between tables in a [[database]]
- Cardinality is depicted using symbols or numbers near the connection lines to indicate the type of relationship
- ERDs [[help]] in understanding the [[database]] structure at a glance, making it easier to plan and modify the [[database]] schema

# Challenges with Cardinality
- **Complex Relationships**: In large databases, managing many-to-many relationships can become complex and may require careful planning to avoid data anomalies.
- **Changing Requirements**: As [[business requirements]] change, the cardinality between tables may need to be updated, which can be challenging if the [[database]] is not designed with flexibility in mind.
- **Performance Issues**: Incorrect cardinality can lead to inefficient [[database]] queries, which can degrade performance, especially in databases with large volumes of data.
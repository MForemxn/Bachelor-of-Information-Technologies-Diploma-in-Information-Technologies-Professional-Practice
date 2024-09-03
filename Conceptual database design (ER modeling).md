# Conceptual [[Database]] Design (ER Modeling)

## What is Conceptual [[Database]] Design?
- Conceptual [[database]] design is the [[process]] of creating a high-level representation of the organizational [[data]], independent of any physical considerations. It focuses on defining the [[entities]], relationships, and constraints within a system.

## What is ER Modeling?
- Entity-Relationship (ER) modeling is a technique used in conceptual [[database]] design to visually represent the structure of a [[database]] by outlining [[entities]], [[attributes]], and the relationships between them.

## Components of an ER Model
### [[Entities]]
- **Definition**: [[Entities]] are distinct objects or concepts in the system that are stored in the [[database]].
- **Example**: In a university [[database]], [[entities]] could include `Student`, `Course`, `Instructor`, etc.

### [[Attributes]]
- **Definition**: [[Attributes]] are properties or characteristics of an entity.
- **Types of [[Attributes]]**:
  - **Simple vs. Composite**: Simple [[attributes]] are indivisible (e.g., `FirstName`), while composite [[attributes]] consist of multiple components (e.g., `FullName` which includes `FirstName` and `LastName`).
  - **Single-Valued vs. Multi-Valued**: Single-valued [[attributes]] have one value per entity (e.g., `DateOfBirth`), while multi-valued [[attributes]] can have multiple values (e.g., `PhoneNumbers`).
  - **Derived [[Attributes]]**: [[Attributes]] that are calculated or derived from other [[attributes]] (e.g., `Age` can be derived from `DateOfBirth`).
  - **Identifier [[Attributes]] ([[Keys]])**: [[Attributes]] that uniquely identify an entity instance (e.g., `StudentID`).

### Relationships
- **Definition**: Relationships describe how [[entities]] are connected to one another.
- **Types of Relationships**:
  - **One-to-One (1:1)**: A single instance of one entity is related to a single instance of another entity (e.g., each student has one student ID).
  - **One-to-Many (1:M)**: A single instance of one entity is related to multiple instances of another entity (e.g., one instructor teaches many courses).
  - **Many-to-Many (M:M)**: Multiple instances of one entity are related to multiple instances of another entity (e.g., students enroll in many courses, and each course has many students).

### [[Cardinality]] and Participation
- **[[Cardinality]]**: Defines the number of instances of one entity that can or must be associated with each instance of another entity.
  - **Examples**:
    - **One**: Exactly one instance (e.g., each student must have one ID).
    - **Many**: Multiple instances (e.g., a course can have many students).
- **Participation**: Indicates whether all or only some entity instances participate in the relationship.
  - **Total Participation**: All instances of the entity participate (e.g., all students must enroll in at least one course).
  - **Partial Participation**: Some instances may not participate (e.g., not all instructors may lead research projects).

## Steps in ER Modeling
1. **Identify [[Entities]]**: Determine the key objects or concepts in the domain that will be represented in the [[database]].
2. **Identify Relationships**: Define how these [[entities]] are related to each other.
3. **Identify [[Attributes]]**: Specify the characteristics of each entity and relationship.
4. **Assign [[Keys]]**: Choose primary [[keys]] to uniquely identify each entity.
5. **Draw the ER Diagram**: Visually represent the [[entities]], relationships, and [[attributes]] in an ER diagram.
6. **Review and Refine**: Validate the model with stakeholders and refine as needed.

## Importance of ER Modeling in [[Database]] Design
- **Clear Communication**: ER diagrams provide a visual representation that is easy to understand, facilitating communication between stakeholders.
- **Organisational Alignment**: Ensures that the [[database]] design aligns with the [[business requirements]] and [[processes]].
- **Foundation for Physical Design**: Serves as a blueprint for creating the physical [[database]] schema, making the transition to [[implementation]] smoother.

## Example of ER Modeling
- Consider a simple university system:
  - **[[Entities]]**: `Student`, `Course`, `Instructor`
  - **[[Attributes]]**:
    - `Student`: `StudentID`, `Name`, `DateOfBirth`
    - `Course`: `CourseID`, `Title`, `Credits`
    - `Instructor`: `InstructorID`, `Name`, `Department`
  - **Relationships**:
    - `Student` enrolls in `Course`
    - `Instructor` teaches `Course`
  - **Diagram**: The ER diagram would depict these [[entities]] with their [[attributes]] and relationships, showing how students, courses, and instructors interact within the system.

## ONE SENTENCE SUMMARY:
Conceptual [[database]] design, using Entity-Relationship (ER) modeling, visually represents [[data structures]] and relationships to create a blueprint for [[database]] development.

## OVERVIEW:
Conceptual [[database]] design involves creating a high-level visual representation of the [[data]] requirements and relationships within a system using Entity-Relationship (ER) modeling. This [[process]] is crucial for understanding the [[data]] needs of an organisation before actual [[database]] [[implementation]]. ER [[models]] consist of [[entities]], which represent real-world objects or concepts, and relationships, which depict how these [[entities]] interact with each other. [[Attributes]] describe the properties of [[entities]]. ER diagrams [[help]] in identifying the key [[entities]], their [[attributes]], and the relationships among them, providing a clear and organised blueprint for [[database]] designers. This approach ensures that the [[database]] structure aligns with [[business requirements]] and supports efficient [[data]] management. By focusing on the conceptual level, ER modeling abstracts away technical details, allowing stakeholders to focus on the logical organisation of [[data]].

## MAIN POINTS:
1. High-level visual representation of [[data]] requirements.
2. Uses Entity-Relationship (ER) modeling.
3. [[Entities]] represent real-world objects or concepts.
4. Relationships depict interactions between [[entities]].
5. [[Attributes]] describe properties of [[entities]].
6. Identifies key [[entities]], [[attributes]], and relationships.
7. Provides a clear blueprint for [[database]] design.
8. Ensures alignment with [[business requirements]].
9. Supports efficient [[data]] management.
10. Abstracts technical details for stakeholder understanding.

## TAKEAWAYS:
1. ER modeling visually represents [[data structures]] and relationships.
2. [[Entities]], relationships, and [[attributes]] form the core components.
3. Provides a blueprint aligning [[database]] design with business needs.
4. Facilitates efficient and organised [[data]] management.
5. Abstracts technical complexities, aiding stakeholder communication.
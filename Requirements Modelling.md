- A [[data]] model:
	- identifies the [[entities]] or objects that the organisation will need to hold [[data]] about.
	- identifies the [[data]] that must be captured, stored and retrieved.
	- describes the [[data]] in a logical (conceptual) manner.
	- creates a graphical representation of the [[entities]], and the relationships between [[entities]].
	- Focuses on what [[data]] is required and how it should be organised.
	- is a plan for building a [[database]].

## What is Requirements Modelling?
- Requirements modelling is the [[process]] of defining, analyzing, and documenting the needs and specifications of a system. It serves as the foundation for system design and development, ensuring that the final product meets the user and [[business requirements]].

## [[Data]] Model
- A [[data]] model is a conceptual representation of the [[data structures]] that are required by a [[database]] system. It is essential in the early stages of requirements modelling to ensure that the [[data]] requirements are fully understood and captured.

### Key Aspects of a [[Data]] Model
- **Identifies [[Entities]] or Objects**:
  - Defines the key [[entities]] or objects that the organisation needs to maintain [[data]] about.
  - **Example**: In a university system, [[entities]] might include `Student`, `Course`, `Instructor`.
  
- **Identifies [[Data]] Requirements**:
  - Specifies the [[data]] that must be captured, stored, and retrieved by the system.
  - **Example**: For a `Student` entity, required [[data]] might include `StudentID`, `Name`, `DateOfBirth`.

- **Logical (Conceptual) Description of [[Data]]**:
  - Provides a logical view of the [[data]] without considering how it will be physically implemented in the [[database]].
  - Focuses on what [[data]] is required and how it should be organised conceptually.
  
- **Graphical Representation of [[Entities]] and Relationships**:
  - Uses diagrams to represent the [[entities]] and the relationships between them.
  - **Example**: Entity-Relationship Diagrams (ERDs) are commonly used to illustrate the [[data]] model.

- **Plan for Building a [[Database]]**:
  - Serves as a blueprint for the creation of a [[database]], guiding the physical design and [[implementation]].
  - Ensures that the [[database]] will support the required [[data]] and relationships.

## [[Process]] Modelling with BPMN
- **What is BPMN?**
  - Business [[Process]] Model and Notation (BPMN) is a graphical notation used to model business [[processes]] and workflows. It provides a standard way to represent the sequence of tasks, [[decision]] points, and [[data]] flows in a [[process]].

### Key Components of BPMN
- **Flow Objects**:
  - **Events**: Represent triggers that start, interrupt, or end a [[process]] (e.g., `Start`, `Intermediate`, `End` events).
  - **Activities**: Represent the work that needs to be done (e.g., `Task`, `Sub-process`).
  - **Gateways**: Represent [[decision]] points that can alter the flow based on conditions (e.g., `Exclusive Gateway`, `Parallel Gateway`).
  
- **Connecting Objects**:
  - **Sequence Flows**: Indicate the order in which activities and events occur.
  - **Message Flows**: Show the communication between different participants or [[processes]].
  - **Associations**: Link artifacts or [[data]] with flow objects.

- **Swimlanes**:
  - **Pools and Lanes**: Organize activities and events into different participants or departments, representing roles or organisational units.

- **Artifacts**:
  - **[[Data]] Objects**: Represent the [[data]] required or produced by an activity.
  - **Annotations**: Provide additional information or explanations about the [[process]].

### Importance of BPMN
- **Standardization**: Provides a universally understood way to model business [[processes]], enhancing communication and understanding.
- **Clarity**: Offers a clear and concise representation of how business [[processes]] are carried out and how different elements interact.
- **[[Flexibility]]**: Can be used to model both simple and complex [[processes]], making it suitable for a wide range of applications.

## [[Data]] Modelling with ERD
- **What is ERD?**
  - An Entity-Relationship Diagram (ERD) is a graphical representation of the [[entities]], relationships, and [[attributes]] within a system. It is a key tool in [[data]] modelling, helping to design and visualize the [[database]] structure.

### Key Components of ERD
- **[[Entities]]**:
  - Represent objects or concepts that have [[data]] stored about them in the [[database]].
  - **Example**: `Student`, `Course`, `Instructor`.

- **[[Attributes]]**:
  - Describe the properties or characteristics of an entity.
  - **Example**: `Student` might have [[attributes]] such as `StudentID`, `Name`, `DateOfBirth`.

- **Relationships**:
  - Define how [[entities]] are related to one another.
  - **Example**: `Student` enrolls in `Course` is a relationship that shows how students and courses are connected.

- **[[Cardinality]] and Participation**:
  - [[Cardinality]] specifies the number of instances of one entity that can be associated with instances of another entity.
  - Participation indicates whether all instances of an entity are involved in a relationship.

### Importance of ERD in [[Data]] Modelling
- **Visual Representation**: ERDs provide a clear and visual way to design the [[database]] structure, making it easier to understand and communicate.
- **Foundation for [[Database]] Design**: Serves as the foundation for the logical and physical design of a [[database]], ensuring that all [[data]] requirements are met.
- **Ensures [[Data]] [[Integrity]]**: Helps in identifying and establishing the necessary constraints and relationships to maintain [[data]] [[integrity]].

## [[Object]]-Oriented Modelling with UML
- **What is UML?**
  - Unified Modeling Language (UML) is a standardised modeling language used to visualize the design of [[object]]-oriented systems. It provides a variety of diagrams to represent different aspects of the system.

### Key UML [[Models]] for [[Object]]-Oriented Modelling
- **[[Class]] Diagrams**:
  - Represent the static structure of a system by showing the system's classes, their [[attributes]], methods, and relationships.
  - **Example**: A `Student` [[class]] with [[attributes]] like `StudentID` and methods like `EnrollInCourse`.

- **Use Case Diagrams**:
  - Represent the functionality of the system from the user's perspective, showing the interactions between users (actors) and the system.
  - **Example**: A `Register for Course` use case that involves a `Student` actor interacting with the system.

- **Sequence Diagrams**:
  - Represent the sequence of messages exchanged between objects to carry out a particular [[function]] or [[process]] within the system.
  - **Example**: A sequence diagram showing the interactions between `Student`, `Registration System`, and `Course` objects during course enrollment.

- **[[State]] Diagrams**:
  - Represent the states an [[object]] can be in, and how it transitions from one [[state]] to another in response to events.
  - **Example**: A `Student` [[object]] might transition from `Prospective` to `Enrolled` to `Graduated`.

### Importance of UML in [[Object]]-Oriented Modelling
- **Comprehensive Representation**: UML offers a variety of diagrams that provide a detailed and comprehensive view of the system's structure and behaviour.
- **Standardization**: As a standard modeling language, UML is widely used and understood, making it easier to communicate designs across teams.
- **[[Flexibility]]**: UML can model both the static and dynamic aspects of a system, making it versatile for different stages of development.


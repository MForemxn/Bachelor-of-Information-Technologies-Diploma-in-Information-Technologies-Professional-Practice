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

# Week 8: Use Case Modelling

## Objectives
By the end of this lecture, you will:
- Understand how [[Object]]-Oriented (OO) modelling techniques can [[help]] in understanding business systems.
- Learn how OO modelling can be used to specify systems and user requirements.
- Use OO system analysis techniques to develop a system model (Use Case Model) and Use Case Narrative.

## Structured Approach vs [[Object]]-Oriented Approach

### Structured Approach
- Focuses on **[[Processes]]**:
  - **BPMN** to describe actions and transformations.
  - **ERD** to describe [[data]] consumed and produced by the system.
  - [[Processes]] interact via [[data]] flows and produce outputs from inputs.
  
### [[Object]]-Oriented Approach
- Focuses on **Objects**:
  - Objects represent real-world things, containing methods and [[attributes]].
  - Objects interact with each other and people, sending and responding to messages.
  
## Unified Modelling Language (UML)
- **UML** is a standard language for specifying, visualizing, constructing, and documenting software system artifacts.
- UML is industry-standard (version 2.X) and supports OO analysis and design.
- UML diagrams are useful not only for developers but also for business users and stakeholders.

## Use Case Model and Narratives

### Development Steps
1. **User Stories**
2. **Use Case Diagram**: Shows the use cases within the system and the actors interacting with them.
3. **Use Case Scenarios/Narratives**
4. **User [[Interface]], Wireframe, or Screenshot**

### Use Case Model Components
- **Actors**: Represent people, organizations, or systems interacting with the system.
- **Use Cases**: Generalized descriptions of a set of interactions between the system and one or more actors.
- **System Boundary**: Indicates the scope of the system.
- **Relationships**: Links between actors and use cases, which can include associations, generalizations, and include/extend relationships.

## Identifying Use Cases
Two main techniques:
1. **User Goal Technique**
   - Identify users, classify them by roles and organizational level.
   - For each type of user, identify their goals and create preliminary use cases.
2. **Event Decomposition Technique**
   - Focuses on identifying system events that trigger specific use cases.

## Example Use Case Model: Online Sales System
**Actors**:
- Customer, Customer Service Representative, Store Sales Representative.

**Use Cases**:
- Search for Item
- View Product [[Comments]] and Ratings
- Fill Shopping Cart
- Checkout Shopping Cart
- Create/Update Customer Account

## Relationships in Use Case Diagrams
- **Association**: A relationship between an actor and a use case.
- **Include**: A use case that includes common behavior from another use case.
- **Extend**: A use case that extends a base use case with additional behavior.
- **Generalization**: A link between a general and a more specific use case or actor.

## Use Case Diagram Example
An example of a use case diagram might involve an **Online Ticketing System**, where actors interact with use cases like "Buy Ticket" or "View [[Timetable]]."

## Use Case Narratives
A **use case narrative** details the interactions between an actor and the system. It includes:
- **Main Flow**: The main sequence of actions and responses.
- **Alternatives**: Other paths leading to successful outcomes.
- **[[Exceptions]]**: What happens when the main flow fails.

### Use Case Narrative Template
- **Header**: Pre-main flow details.
- **Main Flow**: User actions and system responses.
- **Footer**: Post-main flow details.
- **Alternatives**: Secondary successful paths.
- **[[Exceptions]]**: Points where the main flow can fail and how the system handles it.

## Difference Between User Stories and Use Cases
- **User Story**: A simple statement of the user’s feature needs, typically smaller in scope and used in agile development for planning and prioritization.
- **Use Case**: A more structured narrative that describes the interactions and system responses in detail.
- **Longevity**: Use cases often exist as long as the product is under development, whereas user stories are temporary artifacts used for planning iterations.

## [[Object]]-Oriented Modelling Tools
Common tools for OO modelling:
- **Visual Paradigm**
- **IBM Rational Modeler**
- **MS Visio**
- **Sparx Enterprise Architect**

## Assessment 4: Improved CC System
- The assignment requires the use of:
  - **User Story Map**
  - **User Stories, Use Cases, and Use Case Diagram**
  - **Sequence Diagram**
  - **[[Class]] Diagram**
  - **[[State]] Transition Diagram**
  - **Wireframes for UI Requirements**

### Steps for Developing the Use Case Diagram
- Identify user stories and match them to one or more use cases.
- Develop a **Project Boundary Diagram** showing all the use cases.
- Narrate each use case using the provided template, including any **included** or **extended** use cases.

## Conclusion
- Use case modelling is a crucial part of understanding and documenting system requirements and interactions.
- A combination of user stories, use case diagrams, and narratives can [[help]] both developers and business stakeholders to capture the system's functionality and user needs effectively.

## [[Class]] Diagram

A **[[Class]] Diagram** is a type of static structure diagram that depicts the system's classes, [[attributes]], methods, and relationships.

### Key Points:

- **Purpose**: Conceptual modeling of an application and detailed modeling for code generation.
- **Components**:
    - **Classes**: Blueprints for creating objects, sharing the same [[attributes]] and methods.
    - **[[Attributes]]**: Properties describing the [[class]] [[state]].
    - **Methods**: Describe [[class]] behavior.
    - **Relationships**: Associations between classes.
    - **Multiplicity**: Defines the numerical relationship between two classes.

### Example:

- **[[Class]]**: A plan/blueprint for creating objects.
    - A **Doctor** system might have classes like `Doctor`, `Patient`, and `Appointment`.
    - Each `Patient` (e.g., Jim Maloney, Mary Wilson) is an **instance** of the `Patient` [[class]].

---

## Steps in Developing a Class Diagram

1. **Identify Classes**: Look for nouns in the narrative (e.g., Subject, Teacher).
2. **Identify [[Attributes]]**: Phrases indicating possession (e.g., Student’s name).
3. **Identify Methods**: Look for verbs indicating what a [[class]]/[[object]] can do (e.g., Student can enrol).
4. **Define Relationships**: Associations, aggregation, composition, and generalisation.
5. **Set Multiplicities**: Define numerical relationships between classes.

---

## Class Structure

- **Attributes**: Describe characteristics in the second compartment.
- **Operations/Methods**: Describe actions in the third compartment. Format:
    
    java
    
    Copy code
    
    `Modifier  ReturnType  MethodName  (Parameters) public void setExchange(double rate) {    exchangeRate = rate; }`
    

### Example:

plaintext

Copy code

`Person - Attributes:      name      : String     address   : [[String]]     birthdate : Date     age       : Int - Methods:     eat(), sleep(), work(), play()`

---

## Relationships Between Classes

### Types of Relationships:

1. **Association**: A meaningful connection between classes.
    - Example: “A person works for a company.”
    - Represented as a bold unbroken line between two classes.
    - **Multiplicity**: Shown at the ends of the association (e.g., 1..*, 0..1).
2. **Aggregation**:
    - A "has-a" relationship. Weak association.
    - If the whole is removed, the part may still exist (e.g., Library and Books).
    - Represented by a hollow diamond.
3. **Composition**:
    - Stronger relationship. Parts cannot exist independently (e.g., Building and Room).
    - Represented by a filled black diamond.
4. **Generalization**:
    - [[Inheritance]] relationship.
    - Subclasses inherit [[attributes]] and methods from the [[superclass]] (e.g., `Employee` and `Part-time Employee`).

---

## Examples of [[Class]] Diagrams

- **Customer Ordering System**: Includes common classes like `Customer`, `Order`, `Product`, etc.
- **Online Order Processing System**: Involves customer, order, payment, and shipment-related classes.

---

## Summary

- **[[Class]] Diagram**: Foundation of [[object]]-oriented [[software development]]. It is used for both visualizing and documenting a system, as well as constructing executable code.
- **Relationships**: Four main types—Association, Aggregation, Composition, Generalisation.
- **Use Case Integration**: Combine Use Case Narratives with identified classes, [[attributes]], and methods to create comprehensive system [[models]].

---

## Steps for Developing a [[Class]] Diagram for the Ticketing System

1. **Use Case**: Start with the `Buy Ticket` use case narrative.
2. **Identify Classes**: Look for nouns in the use case (e.g., Ticket, Purchase).
3. **Define [[Attributes]] and Methods** for each [[class]].
4. **Identify Relationships**: Use appropriate multiplicities for the relationships.

---

## [[Class]] Diagram for Assessment 4 (Improved CC System)

- You should have completed user stories and use case narratives.
- **Approach 1**: Convert ERD into a [[Class]] Diagram.
- **Approach 2**: Read the narratives, identify classes, [[attributes]], methods, and relationships with multiplicity.

---

## Interaction Diagrams

- **Interaction Diagrams** in UML illustrate how objects interact via messages.
- These diagrams model how a group of objects collaborate to perform specific behavior.
- **Two types of Interaction Diagrams**:
    1. **Sequence Diagram**: Shows interactions over time.
    2. **Collaboration Diagram**: Focuses on [[object]] collaborations.

---

## Sequence Diagram: Purpose

- A **Sequence Diagram** is a visual representation of a use case scenario.
- It captures one use case and shows the communication between objects using messages over time.
- **Components**:
    - **Lifeline box**: Represents an [[object]], system, or actor.
    - **Messages**: Passed between lifelines to represent interactions.

---

## Relationship between Use Cases and Sequence Diagrams

- Each use case can have a sequence diagram to show its main flow, [[exceptions]], or alternative paths.
- Sequence diagrams map the [[process]] flow to the use case and show the interaction between objects for that flow.

---

## Sequence Diagram Notations

- **Lifeline box**: Represents an [[object]] or actor.
- **Message line**: Horizontal arrows representing messages sent between classes.
    - **Synchronous messages**: Full arrowheads, sender waits for a response.
    - **Asynchronous messages**: Half arrowheads, sender does not wait for a response.
- **Activation bar**: Indicates how long an [[object]] is active or when a method executes.
- **Lifeline**: Dashed vertical line showing the life of the [[object]] during the interaction.
- **Destruction (optional)**: Indicated by an "X" at the bottom of the activation bar.

---

## Components of a Sequence Diagram

1. **Columns**:
    - **Lifeline boxes**: Represent objects, actors, or systems.
    - **Activation bar**: Shows how long an [[object]] is active in an interaction.
2. **Rows**:
    - **Messages**: Shown in time order from top to bottom, representing communication between objects.

### Message Types:

- **Synchronous messages**: Sender waits for a return value.
- **Asynchronous messages**: Sender does not wait for a return value.
- **Self-messages**: A message sent to the same [[object]].
- **Conditional messages**: Messages based on conditions.
- **Loops/Iterations**: Repeated interactions.
- **Alternative and Optional fragments**: Represent conditional and optional paths.

---

## Steps in Creating a Sequence Diagram

1. **Identify Participants**:
    - Read the use case narrative and identify classes, objects, and actors (nouns).
2. **Identify Messages**:
    - Look for actions (verbs) that represent the interactions or methods between objects.
3. **Arrange Participants and Messages**:
    - Lifelines are placed in columns, and messages flow horizontally across rows in time order.

---

## Example: Booking a Room

**Narrative Steps**:

1. Customer queries available rooms.
2. Store customer details.
3. Check room [[availability]] in the diary.
4. Room is available; advise the customer.
5. Customer requests a reservation.
6. Provisionally book the room.
7. Calculate price and advise the customer.
8. Check customer credit and finalize the booking if credit is valid.

---

## Conditional and Iterative Messages in Sequence Diagrams

- **Conditional fragments (`alt`)**: Represent choices based on conditions (e.g., if a room is available).
- **Loop fragments (`loop`)**: Represent iterations or repeated actions (e.g., multiple rooms).
- **Optional fragments (`opt`)**: Optional interactions that only occur if certain conditions are true.

---

## System Sequence Diagram vs. [[Object]] Sequence Diagram

- **System Sequence Diagram**: Represents interactions between the actor and system as a black box.
- **[[Object]] Sequence Diagram**: Focuses on interactions between internal objects within the system.

---

## Relation to [[Class]] Diagrams

- Sequence diagrams are closely related to [[class]] diagrams:
    - They can reveal new methods or classes that need to be added to the [[class]] diagram.
    - Sequence diagrams [[help]] refine [[class]] diagrams by updating relationships and methods based on [[object]] interactions.

---

## Example Use Case: Online Booking System (OBS) Registration

**Use Case Steps**:

1. User clicks "Register Online" on the OBS.
2. OBS displays the registration page.
3. Customer fills out the required fields.
4. OBS validates the [[input]] and either creates a new user or displays an error.
5. OBS stores the [[data]] and shows "Registration Complete."

---

## Summary of Sequence Diagrams

- **Lifeline boxes** represent participants (actors, systems, objects).
- **Messages** show interactions between participants over time.
- **Activation bars** indicate when an [[object]] is active in the [[process]].
- Sequence diagrams provide a visual representation of interactions within a system and [[help]] refine [[class]] diagrams.

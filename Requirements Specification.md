# Software requirements specifications
- Software Requirements Specification (SRS) is a document that provides the detailed description of what the system should do.
	- structured document setting out the system services and capabilities in detail.
		- sometimes called as functional specification.
		- often serves as a contract between the client and vendor.
	- To analyse the elicited requirements.
	- Define what designers/developers must build.
		- Validate that they are indeed what stakeholders want.
	- Baseline for evaluating the software.
		- Support for testing (verification and validation).

# Quality [[attributes]] of requirements specifications
- A legal document. A contractual device for judging the completion of the specified job.
- Functional device for improving the understanding of the customer’s real needs (both in business and technical terms).
- So, it is a communication device that conveys an understanding between different teams in the [[software development]] [[process]].
- Used as basis for a user manual for the customer
- Statement of commitment. Validation device for validating the requirements stated in a formal manner.
- Used to develop test cases.

# Agile Manifesto
- Customer satisfaction through early and continuous delivery
- Welcome changing requirements, even late in development
- Working software is delivered frequently (weeks rather than months)
- Close, daily cooperation between business people and developers
- Build projects around motivated individuals
- Face-to-face conversation is the best form of communication (co-location)
- Working software is the principal measure of progress
- Agile [[processes]] promote sustainable development
- Continuous attention to technical excellence and good design enhances agility.
- Simplicity--the art of maximizing the amount of work not done--is essential.
- Self-organizing teams
- Regular adaptation to changing circumstance
## State and Event Modelling with State Transition Diagrams

### Objectives

- Understand how objects change states in response to internal or external events.
- Learn how to model system behavior using state transition diagrams (STDs).

### Importance of State Transition Diagrams

- **State transition diagrams** depict the various states of a single object in a system.
- Each object or class in a class diagram should have its own state transition diagram.
- They help analysts, designers, and developers clearly understand object behavior across different use cases.
- Especially useful for modeling complex business logic and understanding object lifecycle.

### Key Concepts

- **State**: A condition or situation in an object's life where it performs an action or waits for an event.
- **Event**: A trigger that causes a change in state (e.g., pressing a button).
- **Transition**: The movement from one state to another.

### State Transition Diagrams – When to Use

- Useful when tracking an object’s lifecycle.
- They provide a clear view of how objects transition between various states based on events.
- Ideal for situations where business logic is complex or needs more developer clarity for coding purposes.

### Creating State Transition Diagrams

1. Identify the object you are modeling (from the class diagram).
2. List all the possible states that object can have.
3. Determine the events that trigger a change in the object’s state.
4. Draw the transitions between states based on those events.

### UML Syntax for State Transition Diagrams

- **Initial State**: Represented by a solid circle.
- **State**: Shown as a rectangle with rounded corners and compartments for state name, actions, and activities.
- **Transition**: An arrow between states with event/action names written beside it.
- **Final State**: Denoted by a bullseye symbol.

---

## Examples of State Transition Diagrams

### 1. Student Object

- Describes the various states (e.g., prospective, enrolled) a student can be in and how events (e.g., enroll()) transition them between states.

### 2. Buyer Object

- The diagram tracks the lifecycle of a buyer, from initiating trade, considering offers, confirming payment, to completing the purchase.

### 3. SalesPerson Object

- Demonstrates state changes when interacting with a customer, from waiting to responding based on events like quoting a price.

### 4. ATM Machine

- Shows the customer’s interaction with an ATM, including state transitions like inserting a card, entering a PIN, selecting an account, and withdrawing money.

### 5. Reservation Object (Hotel Room Booking)

- Tracks a reservation through states such as created, confirmed, or cancelled.

---

## Summary of Key Points

- **States**: Different conditions an object can be in during its lifecycle.
- **Events**: Actions that cause transitions between states.
- **State Transition Diagrams**: Useful for tracking object lifecycles and clarifying system behavior.

---

### Assessment 4: Improved CCS (Customer-Centric System)

- **Task**: Document one State Transition Diagram for the "Customer/Passenger" object in the CCS case study.
- The diagram should include at least five states and must feature an alternate flow.
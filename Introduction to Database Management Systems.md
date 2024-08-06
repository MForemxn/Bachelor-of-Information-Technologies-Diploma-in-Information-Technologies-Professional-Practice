> A [[database]] is a organised collection of logically related [[data]].
# [[Relational Database]]
- A relational [[database]] organises [[data]] into tables with rows and columns, enabling efficient [[data]] management, querying, and relationships between datasets.
# [[Business Rules]]
> In this subject, [[business rules]] are "A sentence which gives us information on what we want to store or track in our [[database]]."
- [[Business rules]] (BR) are explicit statements that define or constrain aspects of a business, guiding behaviour, decisions, and [[processes]].
- They are defined from:
	- Policies
	- Procedures
	- Events
	- Functions
- They can be automated through our DBMS software.
- Good [[business rules]] are:
	- declarative
	- precise
	- atomic
	- consistent
	- expressible
	- distinct
	- business oriented
- Good [[data]] names are:
	- unique
	- relevant to the business
	- repeatable
	- written in a standard [[syntax]]
# [[Structured Query Language (SQL)]]
- [[Structured Query Language (SQL)]] is a standardised language used to manage and manipulate relational databases by performing tasks such as querying, updating, and managing [[data]].
# [[Entity Relationship Diagram (ERD)]]
- An [[Entity Relationship Diagram (ERD)]] visually represents the relationships between [[entities]] in a [[database]], aiding in [[database]] design and structure understanding.
# [[Database Management Systems (DBMS)]]
- A [[Database]] Management System (DBMS) is software that enables the creation, management, and manipulation of databases, ensuring [[data]] [[integrity]], [[security]], and efficient access.
# [[Data]]
- [[Data]] refers to information that is collected, analysed, and used for various purposes, including [[decision]]-making, research, and technological advancements.
	- Structured [[Data]]: can include numbers, text and dates
	- Unstructured [[Data]]: can include images, videos and documents. 
## [[Metadata]] (About the [[Data]])
- [[Metadata]] is [[data]] that provides information about other [[data]], enhancing its usability, organisation, and management across various applications.

# [[Entities]]
- [[Entities]] are distinct objects or concepts within a system that have unique [[attributes]] and are crucial for [[data]] organisation and management.
- For example:
	- ENTITY: student
	- ENTITY INSTANCE: one particular student (like yourself)
	- ENTITY TYPE: template for storing [[data]] relating to students. this could include name, student ID, ZIP code, etc.
# [[Attributes]]
- [[Attributes]] are specific properties or characteristics of an entity that provide detailed information and [[help]] in [[data]] organisation and analysis.
- These can include
	- Identifier [[attributes]]
	- required vs optional [[attributes]]
	- simple vs composite [[attributes]]
	- stored vs derived [[attributes]]
		- derived [[attributes]] can be calculated or otherwise created from other [[attributes]]
	- single valued vs multivalued [[attributes]]
## Naming [[Attributes]]
- Should be a singular noun or phrase
- should be unique
- should follow a standard format
- similar [[attributes]] of different entity types should use the same qualifiers and classes
> For example: `[Entity name {[qualifier]}] Class`
# [[Identifiers (Keys)]]
- Identifiers, including primary and foreign [[keys]], are unique [[attributes]] used to establish and maintain relationships between [[entities]] in a [[database]].
- these:
	- should be unique
	- can not contain NULL values
	- should be the minimum possible amount of columns whilst remaining unique (if using composite [[attributes]] for primary [[keys]])
- A unique attribute that identifies individual instances of an entity type.
- These could be simple (one attribute) or composite (combination of multiple [[attributes]])
- Identifiers are always compulsory.


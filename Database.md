- Organised collection of data
- self describing collection of integrated records
## Primary Key
> Every record in a file must contain at least one file which uniquely identifies each record so that it can be retrieved, updated, and stored. 
> 	for example, a student ID at UTS.
## Advantages
|Advantages|Description|
|---|---|
|Minimal data redundancy|A single copy of data ensures that storage requirements are minimised.|
|Improved data consistency|Eliminating redundancy greatly reduces the possibilities of inconsistency.|
|Increased security|A centralised system makes it easier to enforce access restrictions.|
|Improved data quality|Centralised control, minimised redundancy, and improved data consistency help to enhance the quality of data.|
|Improved data accessibility and sharing|A centralised system makes it easier to deploy and control access for personnel within or outside organisational boundaries.|
|Enforcement of standards|A centralised system makes it much easier to enforce standards and rules for data creation, modification, naming, and deletion.|
|Increased productivity of application development|Data standards make it easier to build and modify applications.|

# Entity Relationship Modelling
- A data model is a diagram that represents entities in the database and their relationships.
	- An entity is a person, place, thing, or event—such as a customer, an employee, or a product—about which information is maintained.
- An instance of an entity is a specific, unique representation of the entity. For example, an instance of the entity STUDENT would be a particular student.
	- Each characteristic or quality of a particular entity is called an attribute.
		- For example, if our entities were an employee, and a product, entity attributes would include employee number, and product colour.
## [[Cardinality]]
- [[Cardinality]] shows the largest number of occurrences allowed in a relationship, not the smallest. The only two options for [[cardinality]] are one or many.
## [[Modality]]
- [[Modality]] refers to whether the relationship between two or more entities is mandatory, or not. 
- ![[Screenshot 2024-03-18 at 11.10.56 am.png]]
- There are four possible [[modality]] cases:
	- Mandatory-optional: Every occurrence of entity A must be related to at least one occurrence of entity B, but an occurrence of entity B need not be related to any occurrences of entity A.
	- Mandatory-mandatory
		- ![[Screenshot 2024-03-18 at 11.10.38 am.png]]
	- Optional-optional
	- Optional-mandatory: Every occurrence of entity A need not be related to any occurrences of entity B, but Every occurrence of entity B must be related to at least one occurrence of entity A.
		- ![[Screenshot 2024-03-18 at 11.10.22 am.png]]
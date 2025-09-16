## 1. Learning Objectives

- Introduction to **Force.com Developer Edition (PaaS)**
    
- Cloud [[object]] creation, storage, and tabs in Force.com
    
- Fields within objects (standard vs custom)
    
- Relationships between objects (lookup, master-detail)
    
- [[Data]] [[validation rules]]
    
- Page layouts and customization
    

---

## 2. Force.com PaaS

- **Developer Edition Limits:** thresholds on apps, custom objects, and fields.
    
- Resource: [Salesforce Trailhead](https://trailhead.salesforce.com/)
    
- Register free developer account at: [developer.salesforce.com/signup](https://developer.salesforce.com/signup)
    
    - Use non-UTS ID
        
    - Activate via email → login → launch Force.com
        

---

## 3. Force.com Application Components

- Applications
    
- Objects
    
- Tabs
    
- [[Object]] Fields
    
- Validations
    
- Relationships
    
- Page Layouts
    
- [[Security]] & [[Sharing Rules]] (Week 8)
    
- Workflows (Week 9)
    
- Approvals (Week 10)
    

---

## 4. Creating Applications in Force.com

1. Navigate: **Setup → Build → Create → Apps**
    
2. Select type of application (default/custom).
    
3. Enter name, description, and logo.
    
4. Select tabs to include ([[Home]] tab always present).
    
5. Assign user [[profiles]] with access.
    

- Applications appear in the Force.com app menu.
    

---

## 5. Objects and Tabs

- Applications = collection of tabs.
    
- Tabs = [[interface]] for exposing **objects** (predefined or user-defined).
    
- Examples:
    
    - Position [[Object]] → Position Tab
        
    - Application [[Object]] → Application Tab
        

### Creating a Custom [[Object]]

1. Setup → Build → Create → [[Object]]
    
2. Select “New Custom [[Object]]”
    
3. Define:
    
    - Unique name
        
    - Label
        
    - Description
        
    - Primary identifier (name/ID type)
        
    - Optional features (reports, history tracking, logic)
        
    - Development status (In Development/Deployed)
        

### Creating a Tab for an [[Object]]

1. Setup → Build → Create → Tabs
    
2. Select “New Custom [[Object]] Tab”
    
3. Define:
    
    - Associated [[object]]
        
    - Tab style (logo)
        
    - Description
        
4. Assign user [[profiles]] and applications for access.
    

---

## 6. [[Object]] Fields

- **Standard Fields** – built-in when [[object]] is created.
    
- **Custom Fields** – user-defined as needed.
    
- Path: **Setup → Build → Create → Objects**
    

### Custom Field Types

- **[[Identifiers]]:** Auto Number, Formula
    
- **[[Boolean]]:** Checkbox
    
- **[[Numeric]]:** Number, Percent, Currency
    
- **Date/Time:** Date, Date/Time, Time
    
- **[[Communication]]:** Email, Phone, URL
    
- **Geo:** Geolocation (lat/long)
    
- **[[Textual]]:** Text, Text Area, Long Text Area, Rich Text Area, Encrypted Text
    
- **Lists:** Picklist, Multi-Select Picklist
    

### Field Properties

- Label, Name, Description
    
- Mandatory or optional
    
- Unique values
    
- Default values (or formula)
    
- Access control (Field-Level [[Security]])
    
- Page layout placement
    

---

## 7. [[Object]] Relationships

### Lookup Relationship

- Loose association between objects.
    
- Example: Subject [[Object]] ↔ Employee [[Object]].
    
- Independent lifecycle (no cascade delete).
    
- Defined as a **lookup field** in one [[object]].
    

### Master-Detail Relationship

- Strong association (composition).
    
- Example: Job Application [[Object]] ↔ Interviewer’s [[Review]] [[Object]].
    
- **Cascade delete:** deleting master removes all detail records.
    
- Master = controlling [[object]], Detail = dependent [[object]].
    

---

## 8. [[Validation Rules]]

- Enforce constraints on fields.
    
- If rule fails → record not stored, error message displayed.
    
- Defined per [[object]] under **[[Validation Rules]]**.
    
- Formula-based rules, with operators/functions ([reference](https://help.salesforce.com/articleView?id=customize_functions.htm&type=5)).
    
- Rules can be **active** or **inactive**.
    

**Steps:**

1. Create new validation rule.
    
2. Define name, description.
    
3. Specify formula condition.
    
4. Set active/inactive.
    
5. Configure error message and location.
    

---

## 9. Page Layouts

- Controls field arrangement and visibility for an [[object]].
    
- Created automatically with objects; can be customized.
    

### Uses:

- Show/hide fields
    
- Set read-only or editable fields
    
- Group fields into sections
    
- Insert blank spaces
    
- Control display style (single vs double column, field order)
    

**Steps:**

1. Go to [[object]] → Page Layouts.
    
2. Select/edit/create layout.
    
3. Use **palette** to drag and drop fields/sections.
    

---

## 10. Summary

- Force.com platform supports app development via:
    
    - **Applications, Objects, Tabs**
        
    - **Fields (standard & custom)**
        
    - **Relationships (lookup, master-detail)**
        
    - **[[Validation rules]]**
        
    - **Page layouts** for UI customization


# Force.com [[Security]] and Access Control
## [[Security]] of Cloud Objects

### Overview

- [[Force.com]] applications are sets of collaborating objects delivering desired functionality
- Cloud applications contain sensitive information requiring [[security]] mechanisms
- [[Force.com]] platform provides simple-to-configure [[security]] mechanisms for access regulation

### [[Security]] Control Capabilities

Application owner/designer can control:

- Who accesses the application
- Who accesses objects comprising the application
- Level of access to fields within objects
- Access to records of an [[object]]

### [[Security]] Control Mechanisms

|What to Control|[[Force.com]] [[Security]] Control Mechanism|
|---|---|
|Access to user-defined objects|[[Object-level Access]]|
|Access to user-defined fields within objects|[[Field-level Access]]|
|Access to records of user-defined objects|[[Organization-wide Defaults]], [[Role Hierarchies]], [[Sharing Rules]], [[Manual Sharing Rules]]|

### [[Security]] Layers Visualization

```
Object 1
├── Record 1
├── ...
└── Record n

Layers:
- Object-Level Security (OLS)
- Field-Level Security (FLS)
- Record Level Security (RLS)
- Access to applications
```

---

## Case Study: Human [[Resource Management]] Application

### User Types and Access Requirements

#### Any Other User (General Public/Employees)

- **Can view:** Name, qualification, email address, extension number
- **Cannot view:** Any other employee information

#### Head of Area

- **Can edit:** All employee information under supervision (except sensitive [[data]])
- **Cannot edit:** Tax File Number, Date of Birth, Salary, Illness records
- **Cannot:** Add/delete employees
- **Access scope:** Only employees in their area/supervision
- **Special permission:** Update "Employment Performance Record" field

#### Human Resource Manager

- **Can:** Change HR Staff assignments to areas/units
- **Access:** Complete employment records of all staff under supervision (including HR Staff)

#### Chief Executive Officer

- **Access:** Complete employment records of all staff (including HR Manager)

### Organizational Hierarchy

```
Chief Executive Officer
└── Human Resource Manager
    ├── Human Resource Staff
    └── Head of Area
        └── Employee
```

---

## Permission Tables

### Creating Permission Tables

- Required for each user type
- Columns correspond to different objects in application
- Must clearly specify access levels

#### Example Permission Table Structure

|User Type|[[Object]]|Access Level|
|---|---|---|
|Any User|Employee [[Object]]|Read (name, qualification, email, extension only)|
|Head of Area|Employee [[Object]]|Edit (employees under supervision, except sensitive fields)|
|HR Manager|Employee [[Object]]|Edit complete details, Create new records, Delete records|

---

## Types of Access Controls

### [[Object-Level Security]] ([[OLS]])

- Controls whether user can view, create, edit, or delete records and fields of an [[object]]
- Applied to entire objects (e.g., Employee, Account)

### [[Field-Level Security]] ([[FLS]])

- Controls if user can see or edit specific fields within an [[object]]
- Example: Can view "Name" but not "Salary"

### [[Record-Level Security]] ([[RLS]])

- Controls which users can access specific records
- Example: Only records related to employees they supervise

---

## [[Profiles]]

### Definition

- Collection of settings and permissions determining what a user can do on [[Force.com]] Platform
- Used to define and regulate access for given user type to:
    - Applications developed using [[Force.com]]
    - [[Object Permissions]] ([[Object]]-level permissions)
    - [[Field-level Permissions]]

### Profile Characteristics

- **User Assignment:** Each new user must be assigned to a profile
- **Access Uniformity:** All users in same profile have same access control properties
- **[[Cardinality]]:** Multiple users per profile, but one profile per user at any time

### Profile Determines

- Custom applications user can access
- Objects user can view, create, edit, delete
- Tabs user can view in application
- [[Object]] fields user can view or edit
- Login hours permitted
- [[IP]] addresses from which user can log in

### Profile Types

#### Standard (Force.com-defined) [[Profiles]]

- [[System Administrator Profile]]
- [[Standard User Profile]]
- Include default permissions for pre-defined objects

#### Custom (User-defined) [[Profiles]]

- Created for different user types
- Based on existing standard [[profiles]]
- Custom objects invisible unless explicitly assigned to profile

### Creating [[Profiles]] and Users

#### Create New Profile

**Path:** Setup → Administer → Manage Users → [[Profiles]]

- Must base on existing [[Force.com]] defined profile
- Use [[Standard User Profile]] as base

#### Create New User

**Path:** Setup → Administer → Manage Users → Users

- Assign profile to user during creation

---

## [[Object-Level Access]] Control

### Access Control Types

|Access Level|Description|
|---|---|
|**Read**|Users can read all records of [[object]]|
|**Create**|Users can create new records for [[object]]|
|**Edit**|Users can edit records of [[object]]|
|**Delete**|Users can delete records of [[object]]|

### Tab Access Control Levels

|Access Control|Description|
|---|---|
|**Tab Hidden**|[[Object]] completely hidden from profile users|
|**Default Off**|Available to users but hidden from page (accessible via "All Tabs")|
|**Default On**|Available and visible on user's page|

---

## [[Field-Level Access]] Control

### Purpose

- Regulate access to individual fields within objects
- Build on top of [[Object-level Access Control]]
- Cannot be achieved through [[object]]-level controls alone

### Access Rules

|Read Access|Edit Access|Result|
|---|---|---|
|✓|✓|Field is **Editable**|
|✓|✗|Field is **Read-only**|
|✗|✗|Field is **Hidden**|

### Configuration Path

Setup → Administer → Manage Users → [[Profiles]] → Select Profile → Field Settings

---

## Record-Level Access Controls

### Overview

- Build on top of [[object]]-level and [[field-level access]] controls
- Specify [[exceptions]] for access to specific records
- Always evaluated as combination of [[object]]-level and record-level permissions

### Four Types of [[Record-Level Access Control]]

#### 1. [[Organization-Wide Defaults]]

- Baseline access level for most restricted user
- Locks down access to most restrictive level
- Other settings provide [[exceptions]] to this baseline

#### 2. [[Role Hierarchies]]

- Ensure users with organizational roles have access to records of subordinate roles
- Automatic access [[inheritance]] up the hierarchy

#### 3. [[Sharing Rules]]

- Automatic [[exceptions]] to [[organization-wide defaults]] for particular groups
- Can only open up access (cannot be more restrictive than org-wide defaults)

#### 4. [[Manual Sharing Rules]]

- Individual record sharing
- Used when consistent group definition is impossible

---

## [[Organization-Wide Defaults]]

### Access Levels

|Level|Description|
|---|---|
|**Private**|Only record owner can view and edit|
|**Public Read Only**|All users can view, only owner can edit|
|**Public Read/Write**|All users can view and edit|

### Determining Organization-Wide Default

**Questions to Ask:**

1. Who is the most restricted user of this [[object]]?
2. Is there ever an instance this user shouldn't view?
3. Is there ever an instance this user shouldn't edit?

**[[Decision]] Flowchart:**

```
Most Restricted User Identified
↓
Should they see ALL instances? → No → Private
↓ Yes
Should they edit ALL instances? → No → Public Read Only
↓ Yes
Public Read/Write
```

### Example: Employee [[Object]]

- **Most restricted user:** General Public Users, co-workers
- **Can view all instances:** Yes
- **Can edit all instances:** No
- **Result:** PUBLIC READ ONLY

### Configuration Path

Setup → Administer → [[Security]] Controls → Sharing Settings

---

## [[Role Hierarchies]]

### Purpose

- Ensure users with organizational roles automatically access subordinates' records
- Build on [[organization-wide defaults]] to expose selected records

### Key Differences from [[Profiles]]

|[[Profiles]]|[[Role Hierarchies]]|
|---|---|
|[[Object-level access]] control|[[Record-level access control]]|
|[[Field-level access]] control|Automatic record access [[inheritance]]|

### Configuration Steps

1. **Path:** Setup → Administer → Manage Users → Roles
2. Define role titles and reporting structure
3. Assign users to roles
4. Enable "Grant access using hierarchies" for relevant objects

---

## [[Sharing Rules]]

### Purpose

- Make automatic [[exceptions]] to [[organization-wide defaults]] for particular groups
- Create additional groups ([[Public Groups]])
- **Important:** Can only open up access, cannot be more restrictive

### [[Public Groups]] Definition

Public group can contain:

- Collection of individual users
- Collection of roles and/or roles with subordinates
- Any combination of above requiring access to certain records

### Configuration Steps

1. **Create Public Group:** Setup → Administer → Manage Users → [[Public Groups]]
2. **Define Sharing Rule:** Setup → Administer → [[Security]] Controls → Sharing Settings
3. Specify rule name and criteria
4. Select public group for access
5. Define access level

### Sharing Criteria Options

- **Owner-based:** Share records based on record ownership
- **Criteria-based:** Share records matching specific criteria

---

## Manual [[Sharing Rules]]

### Purpose

- Share individual records of an [[object]]
- Used when consistent user groups cannot be defined
- Helpful for ad-hoc access requirements

### Example Use Case

**Interview [[Process]]:**

- Interviewers need complete candidate information
- Any employee may conduct interviews
- Interview panels vary by candidate
- **Solution:** Manual sharing for each candidate record

### Characteristics

- Always specified against single record
- Specified for given user(s) only
- Most granular level of sharing control

### Configuration Steps

1. Select record to share
2. Click "Sharing" option
3. Click "Add" to specify sharing rule
4. Select users, roles, or [[public groups]]
5. Add/remove access permissions
6. Specify access level

---

## Summary

### [[Security]] Control Hierarchy

```
Application Level
├── Object Level (OLS)
│   └── Field Level (FLS)
│       └── Record Level (RLS)
│           ├── Organization-Wide Defaults
│           ├── Role Hierarchies
│           ├── Sharing Rules
│           └── Manual Sharing Rules
```

### Key Components

- **[[Profiles]]:** Define user capabilities and [[object]]/field access
- **[[Object-level Access Control]]:** Control access to entire objects
- **[[Field-level Access Control]]:** Control access to specific fields
- **[[Record-level Access Control]]:** Control access to specific records through multiple mechanisms

### Best Practices

1. Start with most restrictive [[organization-wide defaults]]
2. Use [[role hierarchies]] for organizational structure
3. Apply [[sharing rules]] for group-based [[exceptions]]
4. Use manual sharing for individual record [[exceptions]]
5. Create comprehensive permission tables before [[implementation]]
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
    
- [[Security]] & Sharing Rules (Week 8)
    
- Workflows (Week 9)
    
- Approvals (Week 10)
    

---

## 4. Creating Applications in Force.com

1. Navigate: **Setup → Build → Create → Apps**
    
2. Select type of application (default/custom).
    
3. Enter name, description, and logo.
    
4. Select tabs to include ([[Home]] tab always present).
    
5. Assign user profiles with access.
    

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
        
4. Assign user profiles and applications for access.
    

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
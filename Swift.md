# Types

- int = [[integer]] (whole number)

- [[float]] = at least 15 decimal places

- double = at least 6 decimal places

- [[string]] = numbers and letters
    - this is in quotation marks “I hope this course is good”

- bool = [[boolean]] (true or false)
    
    - true
    
    - false

Type Inference: Swift is smart enough to know what type you mean most of the time

```swift
var highScore = 0
```

# [[Variables]] and Constants

🚨

[[variables]] and constants capture values

- [[variables]] can be changed or mutated

- constants cannot be changed or mutated

```swift
import UIKit

var highScore: Int = 0
highScore = 55

let myName: String = "Mason"

var currentActiveUsers = 124

currentActiveUsers = 1458
```

## Define Variable

```swift
var [variableName]: [type] = [value]
```

```swift
var highScore: Int = 0
```

## Define Constant

```swift
let [variableName]: [type] = [value]
```

```swift
let highScore: Int = 0
```

# Arrays

- container or lists of objects

🚨

Starts At Zero

🚨

Always Ordered by when they were Assigned

- empty arrays require type declaration

- type inference can be utilised when an array is populated upon creation

```swift
import UIKit

var ages: Int = [21, 55, 19, 47, 22, 37, 88, 71]
var persons: [String] = []

ages.count
ages.first
ages.last
ages[2]


ages.append(99)
print(ages)
ages.insert(44, at: 0)

ages.sort()
ages.reverse()

ages.shuffle()
print(ages)
```

# Set

🚨

collection of items

- unordered

- cannot have duplicate values

- Key Advantage:
    
    - speed
    
    - performance

- very fast
    
    - insertion
    
    - lookup
    
    - deletion

- sets must conform to Hashable
    
    - essentially an identifier
        - direct pointer to a location
    
    - don’t need to worry about it until building custom classes
    
    - works well for “Constant Time Lookup”
        - means that anytime an array is questioned, the result time will always be the same, no matter the size of the array
            - doesn’t matter if a set has 10 or 1,000,000,000 items

- Sets don’t have an append feature because there is no order
    - instead we use .insert

```swift
import UIKit

var agesArray = [18, 33, 55, 17, 94, 26, 33, 17]

var agesSet: Set<Int> = []

var agesSetFromArray = Set(agesArray)

print(agesSetFromArray)

agesSetFromArray.contains(17)

agesSetFromArray.insert(101)
```

# Dictionary

- In a real dictionary, you have a ==word== and a ==definition==
    - in a code dictionary you have a ==key== and a ==value==

```swift
[let or var] [arrayName]: [keyType: valueType] = [
"key1" : "value1"
"key2" : "value2"
"key3" : "value3"
]
```

```swift
import UIKit

let devices: [String: String] = [
    "phone" : "iPhone X",
    "laptop" : "2016 MacBook Pro",
    "tablet" : "2018 iPad Pro",
    "desktop" : "2017 iMac pro",
]

devices["laptop"]
devices["phone"]
```

# Functions

- set of instructions
    - reusable throughout your code base

- function name should always be a verb

- scope of a function is everything between the curly brackets

- need to be as generic as possible

## Define a Function

```swift
func [functionName]() {
[functionCode]
[functionCode]
[functionCode]
}
```

## Calling a Function

```swift
functionName()
```

## Parsing Data into Functions

```swift
func [functionName](varName: varType) {
[functionCode]
}

functionName(varName: "Value")
```

```swift
import UIKit

func printInstructorsName() {
    print("Sean Allen")
}

printInstructorsName()

func printInstructorsRealName(name: String) {
    print(name)
}

printInstructorsRealName(name: "Mason Foreman")

//"to" can be whatever you want it to be
func add(firstNumber: Int, to secondNumber: Int) -> Int {
    let sum = firstNumber + secondNumber
    return sum
}

add(firstNumber: 3, to: 8)
```

# If / Else

- simple statement that says
    
    - if this happens, the do this
    
    - else, do this

- one equals sign means setting value

- two equals signs means assessing the value

```swift
//setting dark mode to on
isDarkModeOn = true
//checking to see if dark mode is on
isDarkModeOn == true
```

## If and Else

```swift
import UIKit

var isDarkModeOn = true

if isDarkModeOn == true {
    print("thats how it should be")
} else {
    print("you are a psycho. ")
}

var myHighScore = 555
var yourHighScore = 444

if myHighScore > yourHighScore {
    print("you win")
}
```

## Else If

```swift
import UIKit

var highScore = 111

if highScore > 500 {
    print("you're the best")
} else if highScore > 250 {
    print("you're average")
} else if highScore > 100 {
    print("you need improvement")
} else {
    print("Yikes")
}
```

# For Loops

- iterate over a collection

- do something a certain x of times

```swift
import UIKit

var allStars = ["james", "davis", "harden", "Doncic", "leonard"]

for player in allStars {
    print(player)
}

print("break")

for player in allStars where player == "harden" {
    print(player)
}
```

## Ranges

```swift
//will run 26 times (incl. zero)
for i in 0...25
//will run 25 times (incl. zero, not equal to 25)
for i in 0..<25
```

```swift
import UIKit

for i in 0..<25 {
    print(i)
}
```

```swift
import UIKit

for i in 0...25 {
    print(i)
}
```

```swift
import UIKit

var randomInts: [Int] = []

for _ in 0..<25 {
    let randomNumber = Int.random(in: 0...100)
    randomInts.append(randomNumber)
}

for number in randomInts {
    print(number)
}
```

# Enum

- group of values which are related

- for example, north, south, east and west are all directions
    - these would be enumerated as directions

```swift
enum Direction {
	case north
	case east
	case south
	case west
}
```

- another example would be days of the week
    
    - monday
    
    - tuesday
    
    - wednesday
    
    - thursday
    
    - friday
    
    - saturday
    
    - sunday

```swift
enum DayOfWeek {
	case monday
	case tuesday
	case wednesday
	case thursday
	case friday
	case saturday
	case sunday
}
```

🚨

enums can be listed as comma seperated

```swift
enum DayOfWeek {
	case monday
	case tuesday
	case wednesday
	case thursday
	case friday
	case saturday
	case sunday
}
```

```swift
enum DayOfWeek {
	case monday, tuesday, wednesday, thursday, friday, saturday, sunday
}
```

## An example of getting Sean’s opinion on a phone

```swift
import UIKit

enum Phone {
    case iPhone11Pro
    case iPhoneSE
    case pixel
    case nokia
}

func getSeansOpinion(on phone: Phone) {
    if phone == .iPhone11Pro {
        print("this will be my next phone")
    }
    else if phone == .iPhoneSE {
        print("I disklike this phone size, it makes design hard")
    }
    else if phone == .pixel {
        print("hardware is great, dont like google tracking my ads")
    }
    else {
        print("can't be broken. classic. ")
    }
}



getSeansOpinion(on: .iPhone11Pro)
```

🚨

We can clean this up by using “Raw Value”.

🚨

This can be any type ( `string` ,`integer`), and can be called using the `.rawValue` method

```swift
import UIKit

enum Phone: String {
    case iPhone11Pro        = "this will be my next phone"
    case iPhoneSE           = "I disklike this phone size, it makes design hard"
    case pixel              = "hardware is great, dont like google tracking my ads"
    case nokia              = "can't be broken. classic. "
}

func getSeansOpinion(on phone: Phone) {
    print(phone.rawValue)
    }



getSeansOpinion(on: .iPhoneSE)
```

# Switch Statements

- casewhere statement

- often paired with enums
    - don’t have to be

🚨

Put simply, it is a neater, cleaner way to write a if, if else, else statement.

Formatted as:

```swift
switch <#value#> {
    case <#pattern#>:
        <#code#>
    default:
        <#code#>
    }
```

## When used in conjunction with an Enum:

```swift
enum Phone {
    case iPhone11Pro
    case iPhoneSE
    case pixel
    case nokia
}


func getSeansOpinion(on phone: Phone) {
    
    switch phone {
    case .iPhone11Pro:
        print("this will be my next phone")
    case .iPhoneSE:
        print("I disklike this phone size, it makes design hard")
    case .pixel:
        print("hardware is great, dont like google tracking my ads")
    case .nokia:
        print("can't be broken. classic. ")
    }
    
}
```

## When not used in conjunction with an Enum (Default Case Required):

```swift
import UIKit


let matchmakingRank = 51

func determinePlayerLeague(from rank: Int) {
    switch rank {
    case 0:
        print("Play the game to determine your league. ")
    case 1..<50:
        print("You are in BRONZE League")
    case 51..<100:
        print("You are in SILVER League")
    case 101..<150:
        print("You are in GOLD League")
    case 151..<200:
        print("You are in DIAMOND League")
    case 201..<250:
        print("You are in PLATINUM League")
    default:
        print("You are in a league of your own, you are too good. ")
    }
    }
    
determinePlayerLeague(from: matchmakingRank)
```

# Operators

🚨

Operators allow you to check, change and combine values

|Symbol|Name|Function|
|---|---|---|
|+|Plus or Sum|Add values (add)|
|-|Minus or Difference|Find the difference between values (subtract)|
|*|Product|Multiply values by each other (times)|
|/|Division|Divide values by each other (divide)|
|%|Modulo|Similar to divide, except tells you the remainder after the operation|
|<|Less than|is [left] smaller than [right]|
|>|Greater than|is [left] greater than [right]|
|≤ or <=|Less than or equal to|is [left] less than or equal to [right]|
|≥ or >=|greater than or equal to|is [left] greater than or equal to [right]|
|! or !=|Bang|IS THIS NOT equal to this?|
|==|Comparing|IS THIS equal to this?|
|=|Assigning|THIS IS equal to this.|
|&&|And|returns a true if both conditions are met|
|\| \||Or|returns a true if one of the conditions are met|
|+=|Plus equals|shortened way of writing X = X + Y|
|-=|Minus equals|shortened way of writing X = X - Y|

🚨

Integer will ALWAYS be a whole number. It will not round up or down, it will just cutoff the decimal (if it exists)

```swift
import UIKit

let valueOne: Float = 55
let valueTwo: Float = 88

var isDarkModeOn = true

var sum = valueOne + valueTwo
var difference = valueOne - valueTwo
var product = valueOne * valueTwo
var division = valueOne / valueTwo
var modulo = valueOne % valueTwo

var counter = 0
counter += 1
counter -= 1

if valueOne == valueTwo || isDarkModeOn {
    print("Either dark mode is on or your values are equal")
}
```

```swift
import UIKit

var counter = 0

counter += 1

let greeting: String = "Hello"
let name: String = "Sean"

print(greeting + " " + name)

let agesYoung = [3, 6, 9]
let agesOld = [99, 67]

let allAges = agesYoung + agesYoung
```

# Optionals

🚨

Declaring something as an optional means you’re giving it the ability to handle the absence of values

- basically this means a function can handle values, or the absence of values

- what this is going to be useful for is “unwrapping the array”
    - this entails defining what happens if there are values, or if there aren’t

```swift
import UIKit

//var ages: [Int] = [21, 45, 18, 71, 44, 23, 17]
//var ages: [Int] = []
ages.sort()

// if let
if let oldestAge = ages.last {
    print("the oldest age is \(oldestAge)")
} else {
    print("there is no oldest age, you must have no students. ")
}

// nil coalescing
let oldestAge = ages.last ?? 999

// guard statement
func getOldestAge() {
    guard let oldestAge = ages.last else {
        return
    }
    print("\(oldestAge) is the oldest age")
}

// force unwrap
let oldestAge = ages.last!
// basically saying "i dont care what it is, use it anyways."
```

🚨

Optionals are marked with a `?`

## String Interpolation

🚨

The process of adding variable values into strings

```swift
print("The oldest age is \(oldestAge)")
```

# Self

- refers to itself
    
    - the value of an object
    
    - relevant when talking about classes

# Class

🚨

an object which can have objects and functions attached to it

## Initialising a Class with Values Assigned

```swift
import UIKit

class Developer {
    var name: String
    var jobTitle: String
    var yearsExp: Int
    
    init(name: String, jobTitle: String, yearsExp: Int) {
        self.name       = name
        self.jobTitle   = jobTitle
        self.yearsExp   = yearsExp
    }
}

let sean = Developer(name: "Sean", jobTitle: "iOS Engineer", yearsExp: 5)

sean.name
sean.jobTitle
sean.yearsExp
```

## Initialising a Class without Values Assigned

🚨

This allows for values or properties to be nil

```swift
import UIKit

class Developer {
    var name: String?
    var jobTitle: String?
    var yearsExp: Int?
    
    init() {}
}


let sean = Developer()

sean.name = "Joe"
sean.jobTitle = "Coder"
sean.yearsExp = 10
```

## Functions within Classes

```swift
import UIKit

class Developer {
    var name: String
    var jobTitle: String
    var yearsExp: Int
    
    init(name: String, jobTitle: String, yearsExp: Int) {
        self.name       = name
        self.jobTitle   = jobTitle
        self.yearsExp   = yearsExp
    }
        
    func speakName() {
        print(name)

    }
}

let sean = Developer(name: "Sean", jobTitle: "iOS Engineer", yearsExp: 5)

sean.speakName()
```

# Inheritance

- classes can have subclasses
    - this means they can have inheritance

🚨

Subclasses are written as:

```swift
class ChildClassName: ParentClassName {}
```

🚨

By default, all attributes and functions are inherited from the parent class

🚨

This can be changed by using the `override` method

```swift
override func speakName() {}
```

```swift
import UIKit

class Developer {
    var name: String?
    var jobTitle: String?
    var yearsExp: Int?
    
    init(name: String, jobTitle: String, yearsExp: Int) {
        self.name = name
        self.jobTitle = jobTitle
        self.yearsExp = yearsExp
    }
    
    func speakName() {
        print(name!)
    }
}


class iOSDeveloper: Developer {
    var favouriteFramework: String?
    
    func speakFavouriteFramework() {
        if let favouriteFramework = favouriteFramework {
            print("My favourite framework is " + favouriteFramework)
        } else {
            print("I don't have a favourite framework")
        }
    }
    override func speakName() {
        print("\(name!) - \(jobTitle!)")
        }
        

}

let sean = iOSDeveloper(name: "Sean", jobTitle: "iOS Engineer", yearsExp: 5)

sean.speakName()


sean.favouriteFramework = "ARKit"
sean.speakFavouriteFramework()
```

# Struct

- similar to a class
    - also an object
        - can have:
            
            - properties
            
            - functions

- struct’s are more lightweight and performant than classes
    - they are value types

🚨

Classes are Reference Types

🚨

Struct’s are Value Types

## Reference Type

- point to a specific set of data

- think of it like a shared google sheet
    - changes made by one party are changed everywhere

## Value Type

- copy data and create a new instance

- think of it like a shared excel spreadsheet
    
    - saved, duplicated, and sent as a copy
    
    - other changes don’t affect the original

## Example of Reference Type (Class)

```swift
var sean = Developer(name: "Sean", jobTitle: "iOS Engineer", yearsExp: 5)

var joe = sean

joe.name = "joe"
sean.name
// sean.name returns joe
```

## Example of Value Type (Struct)

```swift
var sean = Developer(name: "Sean", jobTitle: "iOS Engineer", yearsExp: 5)

var joe = sean

joe.name = "joe"
sean.name
// sean.name still returns sean
```

```swift
import UIKit

class Developer {
    var name: String?
    var jobTitle: String?
    var yearsExp: Int?
    
    init(name: String, jobTitle: String, yearsExp: Int) {
        self.name = name
        self.jobTitle = jobTitle
        self.yearsExp = yearsExp
    }
}

var sean = Developer(name: "Sean", jobTitle: "iOS Engineer", yearsExp: 5)

var joe = sean

joe.name = "joe"
sean.name
```

```swift
import UIKit

struct Developer {
    var name: String?
    var jobTitle: String?
    var yearsExp: Int?
    
    init(name: String, jobTitle: String, yearsExp: Int) {
        self.name = name
        self.jobTitle = jobTitle
        self.yearsExp = yearsExp
    }
}

var sean = Developer(name: "Sean", jobTitle: "iOS Engineer", yearsExp: 5)

var joe = sean

joe.name = "joe"
sean.name
```

# Extension

🚨

Add existing functionality to an existing type

```swift
import UIKit

extension String {
    
    func removeWhitespace() -> String {
        return components(separatedBy: .whitespaces).joined()    }
}

let alphabet = "A B C D E F G H I J K L M N O P Q R S T U V Q X Y Z"
print(alphabet)
print(alphabet.removeWhitespace())
```

# Xcode Tour

- left pane - folder structures and hirachey
    - also search

- middle - code [[editor]]
    - you can have 2 editors side by side for maximum notionality

- storyboard visually represents the end user experience
    - not necessarily a direct representation of the actual code

# What’s new in Xcode 12

- new [[GUI]] changes

- new folder for [[iOS]], MacOS, and shared

- Open pages in tabs to switch between them

- New preview toolbar allows for quick actions when previewing apps

# Key UIKit ideas

- command + shift + L for adding objects

- use autolayout to make the app look good on any phone

# FizzBuzz

- write a [[function]] that interates through numbers 1-100

- for numbers divisible by 3, print “FIZZ”

- for numbers divisible by 5, print “BUZZ”

- for numbers divisible by 3 & 5, (like the number 15), print “FIZZBUZZ!”

- for numbers that don’t meet any of these qualifications, print the number

# Steps for Creating Apps

- layout in storyboard
    
    - objects
    
    - constraints
    
    - [[attributes]]

- code/logic

# Creating Screens

- create ViewController (storyboard page)

- for each element on storyboard
    
    - create file
    
    - link file

- outlet gives you access to a storyboard image in code

- action gives you access to reference actions to an [[object]].

- create IBOutlet by holding control and dragging from storyboard element into the view controller code

- the hierarchy should exist as follows:

```swift
//
//  CardSelectionVC.swift
//  CardWorkout
//
//  Created by Mason Foreman on 12/12/2022.
//

import UIKit

[[class]] CardSelectionVC: UIViewController {
    
    @IBOutlet var cardImageView: UIImageView!
    @IBOutlet var stopButton: UIButton!
    @IBOutlet var restartButton: UIButton!
    @IBOutlet var rulesButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        stopButton.layer.cornerRadius = 8
        restartButton.layer.cornerRadius = 8
        rulesButton.layer.cornerRadius = 8
        

    }
    
    

}
```

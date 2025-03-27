### 1. Project Setup and Initial Planning

- **Requirements Analysis:**  
    • Read the full project description and highlight every core functionality and extended feature.  
    • Define additional advanced features (e.g. online leaderboards, achievements, sound/particle effects, adaptive difficulty, social sharing).
    
- **Documentation:**  
    • Create a Software Design Document (SDD) detailing your game’s features, data models, and flow diagrams.  
    • Draft wireframes/mockups for the main gameplay screen, settings, high score board, and any additional interfaces.
    
- **Tooling and Environment:**  
    • Set up an Xcode project using SwiftUI (Storyboard is not allowed).  
    • Configure version control (e.g. Git) for iterative development.
    

---

### 2. Core UI and Data Modeling

- **Player and Game Models:**  
    • Define data models for Player (name, high score), Bubble (color, point value, position, combo state), and Game State (timer, current score, bubble list).  
    • Consider using immutable data structures where possible to ensure idempotency.
    
- **Initial UI Screens:**  
    • **Name Entry Screen:** Allow players to input their name (optionally load from GameKit).  
    • **Main Game Screen:** Design an area for displaying bubbles, a game timer, and a score counter.  
    • **Settings Screen:** Include options to adjust game duration and maximum number of bubbles, with validations (prevent negative or overly large inputs).  
    • **High Score Board:** Layout a leaderboard that shows saved scores along with player names.
    

---

### 3. Implementing Core Gameplay Mechanics

- **Game Timer and Score:**  
    • Build a countdown timer starting at 60 seconds (or user-adjusted time) that updates every second.  
    • Implement score updating logic that starts at zero and increases as bubbles are popped.
    
- **Bubble Generation:**  
    • Write logic to randomly determine the number of bubbles (up to the maximum allowed) per game second.  
    • Generate bubble colors based on the specified probability distribution (e.g. 40% red, 30% pink, etc.).  
    • Position bubbles randomly within screen bounds while ensuring:  
      – Entire bubble appears on-screen.  
      – No overlapping bubbles (consider collision detection on spawn).
    
- **Bubble Interaction:**  
    • Enable tap gesture recognition on bubbles.  
    • On tap: remove the bubble from the screen, update the score based on the bubble’s point value, and apply a 1.5× multiplier for consecutive same-color pops.  
    • Provide immediate visual feedback (e.g. shrinking or fading animations).
    
- **Bubble Refresh Cycle:**  
    • Every game second, randomly remove a subset of bubbles (not already popped) and replace them with new bubbles according to the generation rules.
    

---

### 4. Persistence and Scoreboard Management

- **Score Persistence:**  
    • When the game ends (timer reaches zero), save the player’s score along with their name using persistent storage (e.g., local file system or Core Data).
    
- **High Score Display:**  
    • Develop a view to retrieve and display high scores, ordering them from highest to lowest.  
    • Optionally, show the highest score live during gameplay for added competitiveness.
    

---

### 5. Extended and Advanced Functionalities

- **Dynamic Bubble Movement:**  
    • Implement movement for bubbles that causes them to drift across the screen and eventually exit if not popped.  
    • Increase the movement speed as the game timer decreases, adding dynamic difficulty.
    
- **Advanced Animations and Transitions:**  
    • Create animated state transitions such as a “3-2-1” countdown before game start.  
    • Add animations when bubbles are tapped (e.g. bubbles “popping” with particle effects).  
    • Animate score changes and combo streaks to visually highlight bonus points.
    
- **Additional Features:**  
    • **Sound and Haptics:** Integrate sound effects for bubble pops and background music, plus haptic feedback for taps.  
    • **Online Leaderboards:** Extend the local high score board with online leaderboards via GameKit for competitive play (optional advanced integration).  
    • **Achievements and Power-Ups:** Consider adding achievements for high combo counts or rapid play, along with power-ups that temporarily boost scoring.  
    • **Adaptive UI:** Ensure the layout is responsive across different iOS devices and orientations.
    

---

### 6. Testing, Optimization, and Deployment

- **Testing on Multiple Devices:**  
    • Run your app on different simulators (e.g. iPhone, iPad) to verify that UI elements, animations, and interactions scale appropriately.  
    • Test the game flow for logic errors, performance issues, and responsiveness.
    
- **Error Handling and Validations:**  
    • Add user-friendly error messages for invalid settings inputs.  
    • Implement robust error handling for persistence and gameplay interactions.
    
- **Code Review and Refactoring:**  
    • Review your code for consistency, clarity, and adherence to SwiftUI best practices.  
    • Refactor components to ensure loose coupling and ease of future extensions.
    
- **Final Polish and Submission:**  
    • Polish the final GUI design, ensuring it is both functional and visually appealing.  
    • Remove debugging artifacts, address any warnings, and ensure the project compiles without errors.  
    • Test thoroughly before final submission to Canvas.
    

---

### Summary Timeline

1. **Week 1:**
    
    - Complete requirements analysis and design documents.
        
    - Set up project and design initial wireframes.
        
2. **Week 2:**
    
    - Develop core UI components and data models.
        
    - Implement basic gameplay (timer, bubble generation, bubble popping).
        
3. **Week 3:**
    
    - Integrate bubble refresh logic and persistent high score storage.
        
    - Test on various devices and fix UI scaling issues.
        
4. **Week 4:**
    
    - Add extended functionalities (bubble movement, animations, advanced score display).
        
    - Integrate additional features (sound, haptics, optional online leaderboard).
        
5. **Final Days:**
    
    - Conduct comprehensive testing, optimize code, and finalize submission.
        

Following this detailed game plan should help you develop a robust and advanced version of the BubblePop game that meets all assessment requirements and includes extra features for an impressive final product.
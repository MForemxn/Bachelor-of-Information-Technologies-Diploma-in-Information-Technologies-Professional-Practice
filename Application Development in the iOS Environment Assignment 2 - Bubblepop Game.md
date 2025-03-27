# [[Step by Step]]
## Project Overview: BubblePop Game

### Project Specifications

- **Platform**: iOS (iPhone/iPad)
- **Development Framework**: SwiftUI
- **Project Weight**: 30% of overall course mark
- **Due Date**: 28 April 2023 at 11:59 pm

### Core Game Mechanics

1. **Player Name Entry**
    - Player must enter their name before starting the game
2. **Game Timer**
    - Default game duration: 60 seconds
    - Countdown timer displayed on screen
    - Timer configurable in app settings
3. **Bubble Mechanics**
    - Bubbles randomly displayed on screen
    - Maximum 15 bubbles on screen at once
    - Bubbles have different colors with specific point values:
        - Red (1 point, 40% probability)
        - Pink (2 points, 30% probability)
        - Green (5 points, 15% probability)
        - Blue (8 points, 10% probability)
        - Black (10 points, 5% probability)
4. **Scoring System**
    - Score starts at zero
    - Points earned by popping bubbles
    - Consecutive same-color bubble pops earn 1.5x points
5. **Bubble Refresh**
    - Screen refreshes bubbles every game second
    - Random bubble removal and replacement
    - Ensures bubbles stay within screen boundaries
    - No bubble overlap
6. **Game Completion**
    - Save player's score in persistent storage
    - Display high score board with player names and scores

### Extended Functionalities (Optional)

1. Moving bubbles with increasing speed
2. Game state transition animations
3. Display highest score during gameplay
4. Additional creative features

### Assessment Criteria

- **Functionality (20 marks)**
    - Core and extended functionality completion
    - Compilation without errors
    - Error-free runtime
    - Responsive to different screen sizes/orientations
- **Code Style (3 marks)**
    - Consistent indentation
    - Clear comments
    - Meaningful symbol naming
- **Program Design (7 marks)**
    - Effective data modeling
    - Functional separation
    - Loose coupling
    - Extensibility
    - Error handling

### Key Development Considerations

- Use SwiftUI exclusively
- Implement robust error handling
- Design for multiple device sizes and orientations
- Validate user settings (game time, max bubbles)
- Ensure individual, original work
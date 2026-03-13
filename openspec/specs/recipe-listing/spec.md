### Requirement: Fetch recipes from API
The system SHALL fetch the list of recipes from `GET /recipes` using RTK Query when the recipe listing page loads.

#### Scenario: Successful data fetch
- **WHEN** the recipe listing page loads
- **THEN** the system fetches recipes from `http://localhost:3001/recipes` and displays them

#### Scenario: API request in progress
- **WHEN** the recipes are being fetched
- **THEN** the system SHALL display a loading indicator

#### Scenario: API request fails
- **WHEN** the fetch request fails
- **THEN** the system SHALL display an error message to the user

### Requirement: Display recipes as cards in a grid
The system SHALL display all fetched recipes in a responsive grid layout using card components.

#### Scenario: Grid layout on desktop
- **WHEN** the viewport width is >= 1024px
- **THEN** the grid SHALL display 3 columns of recipe cards

#### Scenario: Grid layout on tablet
- **WHEN** the viewport width is >= 640px and < 1024px
- **THEN** the grid SHALL display 2 columns of recipe cards

#### Scenario: Grid layout on mobile
- **WHEN** the viewport width is < 640px
- **THEN** the grid SHALL display 1 column of recipe cards

### Requirement: Recipe card displays key information
Each recipe card SHALL display the recipe image, name, category, difficulty, and preparation time.

#### Scenario: Card content rendering
- **WHEN** a recipe is displayed in a card
- **THEN** the card SHALL show the recipe's image (from `imageUrl`), name, category, difficulty level, and preparation time in minutes

### Requirement: RTK Query integration with Redux store
The RTK Query API slice SHALL be integrated into the existing Redux store with its reducer and middleware.

#### Scenario: Store configuration
- **WHEN** the application initializes
- **THEN** the Redux store SHALL include the recipes API reducer and middleware for RTK Query cache management

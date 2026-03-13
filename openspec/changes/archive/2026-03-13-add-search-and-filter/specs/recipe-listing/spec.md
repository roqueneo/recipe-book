## MODIFIED Requirements

### Requirement: Display recipes as cards in a grid
The system SHALL display all fetched recipes that match the active filters in a responsive grid layout using card components. When no recipes match the active filters, the grid SHALL be replaced by an empty state message.

#### Scenario: Grid layout on desktop
- **WHEN** the viewport width is >= 1024px
- **THEN** the grid SHALL display 3 columns of recipe cards

#### Scenario: Grid layout on tablet
- **WHEN** the viewport width is >= 640px and < 1024px
- **THEN** the grid SHALL display 2 columns of recipe cards

#### Scenario: Grid layout on mobile
- **WHEN** the viewport width is < 640px
- **THEN** the grid SHALL display 1 column of recipe cards

#### Scenario: Empty filtered results
- **WHEN** active filters produce zero matching recipes
- **THEN** the grid SHALL be replaced by an empty state message

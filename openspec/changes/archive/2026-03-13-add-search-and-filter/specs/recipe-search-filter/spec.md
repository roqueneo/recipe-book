## ADDED Requirements

### Requirement: Text search filters recipes by name and description
The system SHALL provide a text input that filters the displayed recipes. The search SHALL match against recipe name and description fields using case-insensitive substring matching.

#### Scenario: Search matches recipe name
- **WHEN** the user types "chilaquiles" in the search field
- **THEN** only recipes whose name contains "chilaquiles" (case-insensitive) SHALL be displayed

#### Scenario: Search matches recipe description
- **WHEN** the user types "cremoso" in the search field
- **THEN** recipes whose description contains "cremoso" (case-insensitive) SHALL be displayed

#### Scenario: Search with no matches
- **WHEN** the user types a term that matches no recipe name or description
- **THEN** no recipe cards SHALL be displayed and an empty state message SHALL appear

#### Scenario: Empty search shows all recipes
- **WHEN** the search field is empty
- **THEN** all recipes SHALL be displayed (subject to category filter)

### Requirement: Category filter via dropdown
The system SHALL provide a dropdown populated with categories from `GET /categories` that filters recipes by their category field.

#### Scenario: Dropdown shows all categories from API
- **WHEN** the categories have loaded from the API
- **THEN** the dropdown SHALL display an "all categories" option plus each category name from the response

#### Scenario: Selecting a category filters recipes
- **WHEN** the user selects "Postre" from the category dropdown
- **THEN** only recipes with category "Postre" SHALL be displayed

#### Scenario: Selecting all categories shows all recipes
- **WHEN** the user selects the "all categories" option
- **THEN** all recipes SHALL be displayed (subject to search filter)

### Requirement: Combined filters work with AND logic
The system SHALL apply both the text search and category filter simultaneously. A recipe MUST match both filters to be displayed.

#### Scenario: Search and category applied together
- **WHEN** the user types "fácil" in search and selects "Desayuno" as category
- **THEN** only recipes that match both "fácil" in name/description AND belong to "Desayuno" category SHALL be displayed

### Requirement: Results counter
The system SHALL display a counter showing the number of recipes that match the current filters.

#### Scenario: Counter reflects filtered results
- **WHEN** filters result in 3 matching recipes
- **THEN** the system SHALL display "3 recetas encontradas"

#### Scenario: Counter with single result
- **WHEN** filters result in 1 matching recipe
- **THEN** the system SHALL display "1 receta encontrada"

### Requirement: Empty state
The system SHALL display an appropriate empty state message when no recipes match the active filters.

#### Scenario: No results empty state
- **WHEN** the combination of search and category filter produces zero results
- **THEN** the system SHALL display a message indicating no recipes were found and suggest adjusting the filters

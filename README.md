This project upgrades the static Stage 0 Todo Card into a functional, stateful component using Vanilla JavaScript, HTML, and CSS. The card now supports real-time status transitions, an interactive editing and deleting mode, and responsive time-tracking.
 
 
What changed from stage 0
- State Management: The card is no longer just a visual template. It uses a JavaScript state object to sync values across the UI (e.g., checking the box automatically updates the status dropdown to "Done").
- Editing Mode: A dedicated form view allows users to modify the title, description, priority, and due date without leaving the card.
- Dynamic Time Logic: Added an auto-refreshing timer that calculates "Time Remaining" or "Overdue" status every 30 seconds.
- Interactive Status: Users can now cycle through "Pending", "In Progress", and "Done" using a dropdown or a checkbox.
- Collapsible Content: Long descriptions are hidden by default to keep the UI clean, with an accessible toggle to reveal them.


New Design Decisions
- Mobile-First Grid/Flex: The layout uses a 1D flexbox approach for mobile (320px) where fields stack vertically, transitioning to a more horizontal "dashboard" look for desktop (1024px+).
Visual Status Cues:
- Priority: Indicated via a colored text (Green for Low, Yellow for Medium, Red for High).
- Overdue: Triggers a red right-border accent and an explicit "OVERDUE" badge.
- Done: Applies a grayscale filter (opacity) and strike-through text to signify completion.
- Text Safety: Implemented overflow-wrap: anywhere to prevent the layout from "exploding" if a user enters an extremely long word without spaces.


Known Limitations
- No Persistence: Refreshing the page will reset the card to its default state. (Requires localStorage or a backend to save data).
- Single Instance: The current script is scoped to a single ID (todo-1). To support multiple cards on one page, the JS would need to be refactored into a Class or Factory function.
- No Character Limits: While the layout won't break, there is currently no hard limit on title length or description size.


Accessibility Notes
- ARIA States: The expand/collapse button dynamically updates aria-expanded and targets the specific content ID via aria-controls.
- Live Regions: The time-remaining display uses aria-live="polite" so screen readers announce changes in "Due in..." status without interrupting the user.
- Focus Management:
- Entering "Edit Mode" automatically focuses the first input field.
- Exiting "Edit Mode" (Save or Cancel) returns focus to the "Edit" button, preventing the keyboard focus from getting lost.
- Form Labeling: All inputs are explicitly linked to <label> elements for screen reader clarity.

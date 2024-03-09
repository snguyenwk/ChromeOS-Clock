# ChromeOS Clock

Native clock app implementation for ChromeOS with world clocks, stopwatch, timers, and alarms.\
\
[Licenses under BSD 3-Clause License](LICENSE "LICENSE")

# Release Notes

## v 0.2.0
### Features
- World Clocks
  - Implement ability to search cities when selecting a time zone
  - Make selecting a city add that city's time zone to the worldclock
- Stopwatch
  - Add lap functionality  
  - Display laps sequentially beneath stopwatch in side panel
- Timers
  - Implement timer feature
  - Add button to add a new timer
  - Add popup with fields to create a label and input time for each new timer
  - Add pause, resume, reset, delete, and add time buttons for timers and their corresponding functionalities
- Alarms
  - Implement alarm feature
  - Add button to add a new timer
  - Add popup with fields to create a label and input time/select AM/PM for each new alarm
  - Add edit and delete buttons for alarms and their corresponding functionalities
### Bug Fixes
- Fixed bug where the stopwatch was counting time at about 1/3 the rate it was supposed to
- Originally could not have multiple clock widgets from the same time zone since it was before city search functionality. With new city search functionality, you can since there's more than one city per time zone 
### Known Issues
- Clicking outside any popups (instead of clicking confirm/cancel, for example) then makes it impossible to open that same popup again

## v 0.1.0
### Features
- Stopwatch
  - Add stopwatch side panel including start, stop, reset, and lap buttons
  - Implement start, stop, and reset functionality
- World Clocks
  - Add options button for each world clock
  - Implement time zone reset option when clicking options button
### Bug Fixes
- No issues/bugs fixed
### Known Issues
- Clicking outside the time zone selector (instead of cancel/confirm) closes it, but it is then impossible to open it again
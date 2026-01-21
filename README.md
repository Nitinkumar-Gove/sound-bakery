# 🍞 Sound Bakery

> Tiny (< 1KB) browser-based sound synthesis library. No audio files, just code.

## Features

- 📦 **Tiny**: < 1KB (gzipped).
- ⚡ **Fast**: Generates sounds on the fly using Web Audio API.
- 🚫 **Zero Dependencies**: Pure JavaScript.
- 🎛️ **19 Presets**: UI, Notifications, Success/Error feedback.
- 🛡️ **Type Safe**: Exported constants for all sound names.

## Installation

```bash
npm install sound-bakery
```

## Usage

Import the `play` function and the sound constants.

```javascript
import { play, CLICK, SUCCESS, ERROR } from 'sound-bakery';

// Play a simple click
play(CLICK);

// Handle a successful action
play(SUCCESS);

// Handle an error
play(ERROR);
```

> **Note**: Modern browsers require user interaction (e.g., a click) before the `AudioContext` can start. The library handles unlocking, but the first sound must strictly be triggered by a user action.

## Supported Sounds

All sounds are exported as constants.

### UI Interactions
- `CLICK` - Short crisp click
- `TAP` - Soft tap
- `TOGGLE` - Toggle switch
- `HOVER` - Gentle hover feedback

### Navigation
- `SWIPE` - Swipe gesture
- `BACK` - Navigate back (descending)
- `FORWARD` - Navigate forward (ascending)

### Positive Feedback
- `SUCCESS` - Task completion
- `COMPLETE` - Major achievement
- `CONFIRM` - Confirmation

### Neutral Feedback
- `POP` - Bubble/pop effect
- `BLIP` - Quick blip
- `TICK` - Subtle tick

### Negative Feedback
- `ERROR` - Error (descending)
- `WARNING` - Warning tone
- `CANCEL` - Cancel action

### Notifications
- `NOTIFICATION` - Incoming notification
- `MESSAGE` - New message
- `ALERT` - Important alert

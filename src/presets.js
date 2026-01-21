// [type, freq, duration, vol, sliding]
// type: 0=sine, 1=square, 2=sawtooth, 3=triangle

export const presets = {
    // UI Interactions
    click: [1, 800, 0.05, 0.1],           // Short crisp click
    tap: [0, 600, 0.08, 0.08],            // Soft tap
    toggle: [3, 700, 0.06, 0.09],         // Toggle switch
    hover: [0, 400, 0.04, 0.05],          // Gentle hover feedback

    // Navigation
    swipe: [0, 500, 0.12, 0.08, true],    // Swipe gesture
    back: [1, 600, 0.08, 0.09, true],     // Navigate back (descending)
    forward: [0, 400, 0.08, 0.09],        // Navigate forward (ascending)

    // Feedback - Positive
    success: [3, 800, 0.25, 0.12],        // Task completion
    complete: [0, 1000, 0.3, 0.11],       // Major achievement
    confirm: [0, 650, 0.15, 0.1],         // Confirmation

    // Feedback - Neutral
    pop: [0, 600, 0.1, 0.1, true],        // Bubble/pop effect
    blip: [1, 900, 0.06, 0.08],           // Quick blip
    tick: [1, 1200, 0.03, 0.07],          // Subtle tick

    // Feedback - Negative
    error: [2, 200, 0.3, 0.12, true],     // Error (descending)
    warning: [2, 350, 0.25, 0.11],        // Warning tone
    cancel: [1, 300, 0.15, 0.09, true],   // Cancel action

    // Notifications
    notification: [0, 800, 0.2, 0.11],    // Incoming notification
    message: [0, 900, 0.15, 0.1],         // New message
    alert: [2, 600, 0.35, 0.13],          // Important alert
};

// Export constants for easier usage
export const CLICK = 'click';
export const TAP = 'tap';
export const TOGGLE = 'toggle';
export const HOVER = 'hover';
export const SWIPE = 'swipe';
export const BACK = 'back';
export const FORWARD = 'forward';
export const SUCCESS = 'success';
export const COMPLETE = 'complete';
export const CONFIRM = 'confirm';
export const POP = 'pop';
export const BLIP = 'blip';
export const TICK = 'tick';
export const ERROR = 'error';
export const WARNING = 'warning';
export const CANCEL = 'cancel';
export const NOTIFICATION = 'notification';
export const MESSAGE = 'message';
export const ALERT = 'alert';

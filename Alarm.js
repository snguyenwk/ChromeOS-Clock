//
// Alarm.ts
//
// Class which represents an abstract alarm object.
//
export default class Alarm {
    /**
     * Construct an instance of Alarm.
     *
     * @param milliseconds the time in day which the alarm should fire; represented as milliseconds from midnight.
     * @param title (OPTIONAL) the title of the alarm
     * @param repeats (OPTIONAL) a set which contains which days of the week the alarm should repeat
     * @param timezone (OPTIONAL) the timezone for which the alarm should fire, regardless of the device time zone
     */
    constructor(milliseconds, title, repeats, timezone) {
        this.milliseconds = milliseconds;
        if (title == undefined) {
            this.title = "";
        }
        else {
            this.title = title;
        }
        if (repeats == undefined || repeats == null) {
            this.repeats = null;
        }
        else {
            this.repeats = repeats;
        }
        if (timezone == undefined || timezone == undefined) {
            this.timezone = undefined;
        }
        else {
            this.timezone = timezone;
        }
    }
    /** Getter/Setter functions for private values */
    setMilliseconds(milliseconds) {
        this.milliseconds = milliseconds;
    }
    getMilliseconds() {
        return this.milliseconds;
    }
    setTitle(title) {
        this.title = title;
    }
    getTitle() {
        return this.title;
    }
    setRepeats(repeats) {
        this.repeats = repeats;
    }
    getRepeats() {
        return this.repeats;
    }
    setTimezone(timezone) {
        this.timezone = timezone;
    }
    getTimezone() {
        return this.timezone;
    }

    /**
     * Notification when alarm duration hits 0.
     */
    shouldNotify() {
        const alarmTimeToday = new Date(now);
        alarmTimeToday.setHours(0, 0, 0, 0);
        alarmTimeToday.setMilliseconds(this.milliseconds);

        if (now >= alarmTimeToday && !this.didNotify) {
            this.didNotify = true;
            return true;
        }
        return false;
    }

    /**
     * Return a human-readable string for the alarm time
     * @param is24Hour boolean indicating whether formatted string should be in a 12-hour or 24-hour format
     * @returns a string representing the alarm time in the format "HH:mm AM/PM" (12-hour) or "HH:mm" (24-hour)
     */
    formattedTimeString(is24Hour) {
        console.log("Repeats:", this.repeats, "Timezone:", this.timezone); // use these vars so TS doesn't get mad
        var hours = Math.floor(this.milliseconds / 3600000);
        var minutes = Math.floor((this.milliseconds % 3600000) / 60000);
        if (hours > 23 || hours < 0 || minutes > 60 || minutes < 0) {
            return "FORMAT ERROR";
        }
        if (is24Hour) {
            // 24-hour time
            return this.paddedInt(hours, 2) + ":" + this.paddedInt(minutes, 2);
        }
        else if (hours < 12) {
            // 12-hour AM time
            if (hours == 0) {
                hours = 12;
            }
            return this.paddedInt(hours, 1) + ":" + this.paddedInt(minutes, 2) + " AM";
        }
        else {
            // 12-hour PM time
            hours -= 12;
            if (hours == 0) {
                hours = 12;
            }
            return this.paddedInt(hours, 1) + ":" + this.paddedInt(minutes, 2) + " PM";
        }
    }
    // pad integer with zeros and return as string
    paddedInt(val, padding) {
        return val.toLocaleString('en-US', { minimumIntegerDigits: padding, useGrouping: false });
    }
}
//# sourceMappingURL=Alarm.js.map
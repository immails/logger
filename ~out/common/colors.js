const $light = (color) => "\x1b[0m" + color + "\x1b[1m";
const $dark = (color) => "\x1b[0m" + color + "\x1b[2m";
const $reset = (color) => "\x1b[0m" + color;
export const Colors = {
    "SYS": {
        "RESET": "\x1b[0m",
        "BRIGHT": "\x1b[1m",
        "DIM": "\x1b[2m"
    },
    "FG": {
        "GRAY": "\x1b[90m",
        "WHITE": "\x1b[37m",
        "GREEN": "\x1b[32m",
        "YELLOW": "\x1b[33m",
        "RED": "\x1b[31m",
        "BLUE": "\x1b[34m",
        "CYAN": "\x1b[36m",
        "LIGHTWHITE": $light("\x1b[37m"),
        "LIGHTGRAY": $light("\x1b[90m"),
        "LIGHTGREEN": $light("\x1b[32m"),
        "LIGHTYELLOW": $light("\x1b[33m"),
        "LIGHTRED": $light("\x1b[31m"),
        "LIGHTBLUE": $light("\x1b[34m"),
        "LIGHTCYAN": $light("\x1b[36m"),
        "DARKWHITE": $dark("\x1b[37m"),
        "DARKGRAY": $dark("\x1b[90m"),
        "DARKGREEN": $dark("\x1b[32m"),
        "DARKYELLOW": $dark("\x1b[33m"),
        "DARKRED": $dark("\x1b[31m"),
        "DARKBLUE": $dark("\x1b[34m"),
        "DARKCYAN": $dark("\x1b[36m"),
        "RESETWHITE": $reset("\x1b[37m"),
        "RESETGRAY": $reset("\x1b[90m"),
        "RESETGREEN": $reset("\x1b[32m"),
        "RESETYELLOW": $reset("\x1b[33m"),
        "RESETRED": $reset("\x1b[31m"),
        "RESETBLUE": $reset("\x1b[34m"),
        "RESETCYAN": $reset("\x1b[36m"),
    },
};

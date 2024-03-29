import { Colors } from "./common/colors";
import { convertTypes, timestamp } from "./common/misc";
export { Colors as Colors };
export const Tags = {
    /** Creates a custom console logger tag */
    "createCustom": ({ label, brackets_color = Colors.FG.RESETGREEN, label_color = Colors.FG.LIGHTGREEN, key }) => {
        let string = brackets_color + `${brackets_color}[${label_color + label + brackets_color}]` + Colors.SYS.RESET;
        if (key)
            Tags[key] = string;
        return string;
    },
    "INFO": `${Colors.FG.RESETGREEN}[${Colors.FG.LIGHTGREEN}INFO${Colors.FG.RESETGREEN}]${Colors.SYS.RESET}`,
    "WARN": `${Colors.FG.RESETYELLOW}[${Colors.FG.LIGHTYELLOW}WARN${Colors.FG.RESETYELLOW}]${Colors.SYS.RESET}`,
    "ERROR": `${Colors.FG.RESETRED}[${Colors.FG.LIGHTRED}ERROR${Colors.FG.RESETRED}]${Colors.SYS.RESET}`
};
export const Logger = {
    log: (tags, ...data) => {
        console.info(`${timestamp()} ${tags instanceof Array ? tags.join(" ") : tags} ${convertTypes(data).join(" ") + Colors.SYS.RESET}`);
        return data;
    },
    info: (...data) => Logger.log(Tags.INFO, ...data),
    warn: (...data) => Logger.log(Tags.WARN, ...data),
    error: (...data) => Logger.log(Tags.ERROR, ...data)
};

import { Colors } from "./common/colors";
import { convertTypes, timestamp } from "./common/misc";

const Tags = {
    /** Creates a custom console logger tag */
    "createCustom": ({label, brackets_color = Colors.FG.RESETGREEN, label_color = Colors.FG.LIGHTGREEN, key } : IConsoleLoggerTag) : string  => {
        let string = brackets_color + `${brackets_color}[${label_color + label + brackets_color}]` + Colors.SYS.RESET;
        if(key) Tags[key] = string;
        return string
    },
    "INFO": `${Colors.FG.RESETGREEN}[${Colors.FG.LIGHTGREEN}INFO${Colors.FG.RESETGREEN}]${Colors.SYS.RESET}`,
    "WARN": `${Colors.FG.RESETYELLOW}[${Colors.FG.LIGHTYELLOW}WARN${Colors.FG.RESETYELLOW}]${Colors.SYS.RESET}`,
    "ERROR": `${Colors.FG.RESETRED}[${Colors.FG.LIGHTRED}ERROR${Colors.FG.RESETRED}]${Colors.SYS.RESET}`
}

const Logger = {
    log: (tags : string | string[] | "INFO" | "WARN" | "ERROR", ...data : any) => {
        console.info(`${timestamp()} ${tags instanceof Array ? tags.join(" ") : tags} ${convertTypes(data).join(" ") + Colors.SYS.RESET}`)
        return data
    },
    info: (...data : any) => Logger.log(Tags.INFO, ...data),
    warn: (...data : any) =>  Logger.log(Tags.WARN, ...data),
    error: (...data : any) =>  Logger.log(Tags.ERROR, ...data)
}

interface IConsoleLoggerTag {
    /** Tag name */
    label: string,
    /** Color of brackets, import { Colors } */
    brackets_color?: string,
    /** Color of the label, import { Colors } */
    label_color?: string,
    /** Tags dictionary key. Adds this tag to Tags dictionary, import { Tags } */
    key?: string,

}

export {
    Logger as Logger,
    Tags as Tagas,
    Colors as Colors
}
import { Colors } from "./common/colors.js";
import { convertTypes, timestamp } from "./common/misc.js";
import LoadingAnimation from './common/loading_animation';

export {
    Colors as Colors,
    LoadingAnimation as LoadingAnimation
}

export const Tags = {
    /** Creates a custom console logger tag 
     * @example
     * const custom_tag = Tags.create({label: "EPIC/TAG"});
     * @example
     * Tags.create({label: "EPIC/TAG", "key": "epictag"}); 
     * // Now avaiable as Tags.get("epictag") or Tags["epictag"].
    */
    "create": ({label, brackets_color = Colors.FG.RESETGREEN, label_color = Colors.FG.LIGHTGREEN, key } : IConsoleLoggerTag) : string  => {
        let string = brackets_color + `${brackets_color}[${label_color + label + brackets_color}]` + Colors.SYS.RESET;
        if(key) Tags[key] = string;
        return string
    },
    /** Returns tag by key or INFO if it's not found */
    "get": (key : string = "INFO") : string => key in Tags ? Tags[key] : [Tags.INFO],
    /** Green tag with INFO label */
    "TIME": `${Colors.FG.RESETCYAN}[${Colors.FG.LIGHTCYAN}TIME${Colors.FG.RESETCYAN}]${Colors.SYS.RESET}`,
    /** Green tag with INFO label */
    "INFO": `${Colors.FG.RESETGREEN}[${Colors.FG.LIGHTGREEN}INFO${Colors.FG.RESETGREEN}]${Colors.SYS.RESET}`,
    /** Yellow tag with WARN label */
    "WARN": `${Colors.FG.RESETYELLOW}[${Colors.FG.LIGHTYELLOW}WARN${Colors.FG.RESETYELLOW}]${Colors.SYS.RESET}`,
    /** Red tag with ERROR label */
    "ERROR": `${Colors.FG.RESETRED}[${Colors.FG.LIGHTRED}ERROR${Colors.FG.RESETRED}]${Colors.SYS.RESET}`
}

export const Logger = {
    /** Log info with custom tag(s) 
    * @example <caption>Completely new tag</caption>
    * Logger.log(Tags.create({label: "EPIC/TAG"}), "some", "value", false, 1)
    * @example <caption>Tag created before</caption>
    * Logger.log(Tags.get("customtag?"), "some other", "value", true, 0)
    */
    log: (tags : string | string[], ...data : any) => {
        let tags_str = tags instanceof Array ? tags.map((tag) => Tags.get(tag)).join(" ") : Tags.get(tags)
        console.info(`${timestamp()}${Colors.SYS.RESET}${tags_str.length > 0 ? tags_str + " " : ""}${convertTypes(data).join(Logger.config.log_args_separator) + Colors.SYS.RESET}`)
        return data
    },
    /** Returns a callable function that logs elapsed time when called. */
    time: (text : string = "") : CallableFunction => {
        let timestamp = Date.now()
        const resolve = () => Logger.log(Tags.TIME, text + `${Colors.FG.YELLOW}${(Date.now() - timestamp) / 1000}${Colors.SYS.RESET}s.`)
        return resolve
    },
    /**
    * @example <caption>Log info</caption>
    * Logger.info("some", "value", false, 1)
    */
    info: (...data : any) => Logger.log(Tags.INFO, ...data),
    /**
    * @example <caption>Log warn</caption>
    * Logger.warn("some", "warning", false, 1)
    */
    warn: (...data : any) => Logger.log(Tags.WARN, ...data),
    /**
    * @example <caption>Log error</caption>
    * Logger.error("some", "error!!")
    */
    error: (...data : any) => Logger.log(Tags.ERROR, ...data),
    /** Logger config */
    config: {
        /** Logger args separator string. <Space> by default. Set empty to disable separation */
        log_args_separator: " ",
        /** Should logs include time? */
        time_enabled: true,
        /** Should logs also include date? */
        date_enabled: false,
    }
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
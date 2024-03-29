import { Colors } from "./common/colors";
export { Colors as Colors };
export declare const Tags: {
    /** Creates a custom console logger tag */
    createCustom: ({ label, brackets_color, label_color, key }: IConsoleLoggerTag) => string;
    INFO: string;
    WARN: string;
    ERROR: string;
};
export declare const Logger: {
    log: (tags: string | string[] | "INFO" | "WARN" | "ERROR", ...data: any) => any;
    info: (...data: any) => any;
    warn: (...data: any) => any;
    error: (...data: any) => any;
};
interface IConsoleLoggerTag {
    /** Tag name */
    label: string;
    /** Color of brackets, import { Colors } */
    brackets_color?: string;
    /** Color of the label, import { Colors } */
    label_color?: string;
    /** Tags dictionary key. Adds this tag to Tags dictionary, import { Tags } */
    key?: string;
}

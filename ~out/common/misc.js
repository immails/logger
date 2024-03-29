import { Colors } from "./colors";
export function timestamp() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    return `${Colors.SYS.DIM + Colors.FG.GRAY}[${Colors.FG.WHITE}${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}${Colors.FG.GRAY}]${Colors.SYS.RESET}`;
}
export const convertTypes = (data_array) => data_array.map((data) => {
    switch (typeof data) {
        case "object": return JSON.stringify(data)
            .replace(/(({|\[) ?)/g, `${Colors.FG.RESETYELLOW}$1 \x1b[0m`)
            .replace(/( ?(}|\]))/g, `${Colors.FG.RESETYELLOW} $1\x1b[0m`)
            .replace(/(: ?)(([^"])+)(, ?)/g, `: ${Colors.FG.LIGHTGREEN}$2${Colors.FG.RESETGREEN}$4 `)
            .replace(/", ?"/g, `"${Colors.FG.RESETGRAY}, "`)
            .replace(/("(([^"]|\\")*)": ?)/g, `${Colors.FG.RESETCYAN}$2${Colors.FG.DARKCYAN}: `)
            .replace(/(: "(([^"]|\\")*)")/g, `: ${Colors.FG.DARKWHITE}"${Colors.FG.RESETWHITE}$2${Colors.FG.DARKWHITE}"`);
        case "function": return Colors.FG.RESETYELLOW + data.toString();
        case "undefined": return Colors.FG.RESETGRAY + "undefined";
        case "string": return Colors.FG.RESETWHITE + data;
        case "bigint": return Colors.FG.LIGHTYELLOW + data;
        case "number":
        case "boolean": return Colors.FG.RESETYELLOW + data;
        default:
            return data.toString();
    }
});

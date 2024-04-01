import { Logger, Tags } from "../index.js";

export default class LoadingAnimation {
    static characters = ['⠋⠁', '⠉⠉', '⠈⠙', ' ⠹', ' ⠼', '⠠⠴', '⠤⠤', '⠦⠄', '⠧ ', '⠏ ']
    static shouldClear = false;
    static doesInstanceExist = false
    constructor(label: string = null, tags = [Tags.INFO], step_function : (animation_symbol: string, label: string, startedAt: number) => number = undefined) {
        if(!(process.stdout.cursorTo instanceof Function)) {
            clearInterval(this.interval);
            return this;
        }
        if(step_function) this.step = step_function;
        this.label = label;
        this.tags = tags;
        LoadingAnimation.shouldClear = false;
        LoadingAnimation.doesInstanceExist = true;
    }

    characterI = 1;
    label: string = null;
    tags = [Tags.INFO]
    startedAt = Date.now()

    step = (animation_symbol: string, label: string, elapsed: number) => {
        Logger.log(this.tags, `\x1b[7m${animation_symbol} ${label}: ${Math.round(elapsed / 10) / 100}s.`)
    }
    interval = setInterval(() => {
        process.stdout.cursorTo(0, 0)
        process.stdout.clearLine(1)
        this.step(LoadingAnimation.characters[Math.round(this.characterI)], this.label, Date.now() - this.startedAt);
        process.stdout.cursorTo(0, process.stdout.columns)
        this.characterI += 0.50;
        if(this.characterI > LoadingAnimation.characters.length - 1) this.characterI = 0;
    }, 50)

    end() {
        if(!(process.stdout.cursorTo instanceof Function)) {
            return null;
        }
        clearInterval(this.interval);
        process.stdout.cursorTo(0, 0)
        process.stdout.clearLine(1)
        process.stdout.cursorTo(0, process.stdout.columns)
        return null;
    }
}
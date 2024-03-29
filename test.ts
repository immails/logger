import { Logger, Tags } from ".";

Tags.create({
    "key": "custom",
    "label": "CUSTOM",
});
const another = Tags.create({
    "label": "CUSTOM"
});

Logger.config.date_enabled = true;
Logger.config.log_args_separator = ", ";

Logger.info("Example info", "hello world!")
Logger.log(Tags.get("custom"), "Custom tag", "hello tag!")
Logger.log(another, "Another custom tag", "hello another tag!")
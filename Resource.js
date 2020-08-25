export function Resource(path) {

        const pathStr = path.toString();
        const headMap = new Map([
                ["/", ["Web Developer Portfolio",
"Web Development Homepage. Trevor is a developer located in Grant County, Wisconsin."]],
                ["/contact", ["Contact The Developer", "Send an email to the developer."]],
                ["/about", ["About The Developer","Completely custom websites at an affordable price."]]]);

        if (headMap.has(pathStr)) {
                return headMap.get(pathStr);
        }

        return null;
}
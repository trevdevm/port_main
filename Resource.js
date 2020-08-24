export function Resource(path) {

        const pathStr = path.toString();
        const headMap = new Map([
                ["/", `<title id="myTitle">Web Developer Portfolio</title>
<meta id="myDescribe" name="description" content="Web Development Homepage. Trevor is a developer located in Grant County, Wisconsin." />`],
                ["/contact", `<title id="myTitle" >Contact The Developer</title>
<meta id="myDescribe" name="description" content="Send an email to the developer." />`],
                ["/about", `<title id="myTitle" >About The Developer</title>
<meta id="myDescribe" name="description" content="Completely custom websites at an affordable price." />`]]);

        if (headMap.has(pathStr)) {
                return headMap.get(pathStr);
        }

        return null;
}
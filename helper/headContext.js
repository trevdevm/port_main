//stream rendering end of file
/*const writeFile = fs.createWriteStream('./static.txt', { encoding: "utf-8" });
console.log(css.size);
let cssString = "";

if (css.size > 0) {
    for (let item of css) {
        cssString += item.toString();
    }
}

const readHead = readableString(headerStream);
const cssStream = readableString(cssString);
readHead.pipe(writeFile, { end: false });


await res.write(headerStream);




reactMarkup.pipe(writeFile, { end: false });
cssStream.pipe(writeFile, { end: true })


await reactMarkup.pipe(res, { end: false });

eos(reactMarkup, (err) => {
    if (err) {
        winston.error(`react markup Error: ${err.toString()}`);
        process.exit(1);
    }

    res.end(`</div>${chunkExtractor.getScriptTags()}</body></html>`)
})
} */

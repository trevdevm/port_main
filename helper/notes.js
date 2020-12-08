//syntax for importing mod dynamically
const shitModule = () => {
    import(/* webpackPrefetch: true */"../getShit");
};

let getShit;
shitModule().then((myMod) => {
    getShit = myMod.default;
}).catch((err) => {
    console.log(`Error processing request: ${err}`);
})
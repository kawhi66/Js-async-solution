"use strict";

async function sleep(ms) {
    await new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    console.log("Ready!");
    await sleep(ms);
    console.log(value);
}

asyncPrint('hello world', 1000);

var print = async function print() {
    for (var i = 1; i <= 10; i++) {
        console.log("\u5F53\u524D\u662F\u7B2C" + i + "\u6B21\u7B49\u5F85..");
        await sleep(1000);
    }
};

print();
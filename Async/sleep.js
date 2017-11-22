async function sleep(ms) {
    await new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    console.log("Ready!");
    await sleep(ms);
    console.log(value);
}

asyncPrint('hello world', 1000);

const print = async function() {
    for (var i = 1; i <= 10; i++) {
        console.log(`当前是第${i}次等待..`);
        await sleep(1000);
    }
};

print()
function logDataInInterval(interval) {
    setInterval(() => {
        console.log("Hallo Welt");
    }, interval);
}

function setTimeOutWithLog(timeout) {
    setTimeout(() => {
        console.log("Hallo Welt 2");
    }, timeout);
}

//exports.logData = logDataInInterval;

exports.logDataInInterval = logDataInInterval;
exports.setTimeOutWithLog = setTimeOutWithLog;
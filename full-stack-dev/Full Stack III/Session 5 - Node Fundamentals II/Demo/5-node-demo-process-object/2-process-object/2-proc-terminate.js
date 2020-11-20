
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    process.stdout.write('Data! => ' + chunk);
});

process.stdin.on('end', function() {
    process.stderr.write('End!\n');
});

process.on('SIGINT', function() {
    console.log('Terminate command triggered!!.');
    process.exit(0);
});

process.on('SIGWINCH', function() {
    console.log('RESIZING!!!!');
});


process.on('exit', () => {
    process.stdout.write("EXITING");
})
console.log('Node process ID #' + process.pid);

//taskkill /pid 1904 /f
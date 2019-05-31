process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/process.ver':
                console.log(process.versions);
                break;
            case '/process.env':
                console.log(process.env);
                break;
            default:
                console.log('Wrong instruction!\n');
        }
    }
});
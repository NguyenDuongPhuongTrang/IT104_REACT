const typeConsole = (type = 'log') => {
    const message = `Đây là type: ${type}`;
    if (typeof console[type] === 'function') {
        console[type](message);
    } else {
        console.log(message);
    }
}

typeConsole('log');
typeConsole('warn');
typeConsole('error');
typeConsole();

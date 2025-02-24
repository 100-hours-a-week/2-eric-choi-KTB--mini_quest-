function messageMaker(prefix) {
    return function makeMessage(suffix) {
        return prefix + suffix;
    };
}
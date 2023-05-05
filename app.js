function printf(format) {
    // Retrieve the format string and the variable arguments
    var args = Array.prototype.slice.call(arguments, 1);

    // Use a regular expression to find all placeholders in the format string
    var regex = /%[sd]/g;
    var matches = format.match(regex);

    // Replace each placeholder with the corresponding variable argument
    for (var i = 0; i < matches.length; i++) {
        var match = matches[i];
        var arg = args[i];
        if (match === "%s") {
            format = format.replace("%s", arg);
        } else if (match === "%d") {
            format = format.replace("%d", parseInt(arg));
        }
    }

    return format
}

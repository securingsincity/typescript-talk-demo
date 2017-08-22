var multiply = function (x, y) {
    return x * y;
};
function showResult(number, userName, showUserName) {
    var displayUserName = '';
    if (showUserName) {
        displayUserName = " " + userName;
    }
    return number + " is your number" + displayUserName;
}

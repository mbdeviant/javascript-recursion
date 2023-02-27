function fibs(n) {
    //n = n-1 + n-2;
    if (n <= 1) return n;

    const arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}

const arr = [];
function fibsRec(n) {
    if (n < 2) return n;
    else return fibsRec(n - 1) + fibsRec(n - 2);
}


function miniMaxSum(arr) {
    let totalSum = arr.reduce((acc, curr) => acc + curr, 0);
    let minSum = totalSum;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sumWithoutCurrent = totalSum - arr[i];
        if (sumWithoutCurrent < minSum) {
            minSum = sumWithoutCurrent;
        }
        if (sumWithoutCurrent > maxSum) {
            maxSum = sumWithoutCurrent;
        }
    }
    console.log(minSum + ' ' + maxSum);
}

    console.log(miniMaxSum([3,2,4,5,7]))
    
const arr = [[1, 3], [2, 5], [7, 8], [10, 15]]

        const arr1 = [[1, 4], [4, 5]]

        function test(arr) {

            let newArray = [];

            for (let i = 0; i < arr.length; i++) {
                // console.log(arr[i])
                if (arr[i + 1] && Math.max(...arr[i]) >= Math.min(...arr[i + 1])) {
                    newArray.push([Math.min(...arr[i]), Math.max(...arr[i + 1])])
                    i++
                } else {
                    newArray.push(arr[i])
                }
            }

            // console.log(newArray);

            return newArray;
        }

        test(arr1)

        function test1(arr) {
            let newArray = [];

            for (let i = 0; i < arr.length; i++) {
                if (newArray.length !== 0 && Math.max(...newArray[newArray.length - 1]) >= Math.min(...arr[i])) {
                    const mid = newArray.pop()
                    newArray.push([Math.min(...mid), Math.max(...arr[i])])
                } else {
                    newArray.push(arr[i])
                }
            }
            console.log(newArray, "newArray")
            return newArray;
        }

        test1(arr);

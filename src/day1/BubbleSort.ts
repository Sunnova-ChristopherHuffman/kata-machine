export default function bubble_sort(arr: number[]): void {
    let n = arr.length

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n - 1 - i; ++j) {
            // swap if needed
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j+1)
            }
        }
    }
}

function swap(arr: number[], x: number, y: number) {
    let temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp
}

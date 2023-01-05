export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0
    let hi = haystack.length

    do {
        // get mid point
        let m = Math.floor(lo + (hi - lo) / 2)
        let v = haystack[m]

        // Check if middle value is needle
        if (v === needle) {
            return true
        } else if (v > needle) {
            hi = m
        } else {
            lo = m + 1
        }
    } while (lo < hi)
    return false
}



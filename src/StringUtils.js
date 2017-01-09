export function pad(n, p) {
    if(!p) { p = 2}
    return ('0'.repeat(p) + n).slice(-1 * p)
}

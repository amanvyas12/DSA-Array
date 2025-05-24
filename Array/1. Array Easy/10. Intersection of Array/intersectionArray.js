/* TO RUN THE JS FILE MAKE CHANEGS IN SCRIPTS{} UNDER START IN PACKAGE.JSON FILE */
// Optimal solution which is having a better Time and space complexity then brute force.

let a1 = [2, 2, 3];
let a2 = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9];

function intersectionArray(a1, a2) {
    let n = a1.length;
    let m = a2.length;
    let visited = [];

    for (let i = 0; i < n; i++) {
        const e1 = a1[i];
        for (let j = 0; j < m; j++) {
            const e2 = a2[j];
            if (e1 == e2) {
                let alreadyExists = false;
                for (let k = 0; k < visited.length; k++) {
                    console.log(visited[k])
                    if (visited[k] === e2) {
                        alreadyExists = true;
                        break;
                    }
                }
                if (!alreadyExists) {
                    visited.push(e2);
                }
                break;
            }
        }
    }
    console.log(visited)
}
intersectionArray(a1, a2)
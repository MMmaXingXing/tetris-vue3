export function getBottomPointers(matrix: any[]) {
    const pointer: any = [];
    const row = matrix.length;
    matrix.forEach((x, j) => {
        pointer.push({
            x: j,
            y: row - 1,
        });
    });

    return pointer;
}

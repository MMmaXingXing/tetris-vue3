import { getBottomPointers } from "../src/game/matrix";
test("should return button pointers", () => {
    const matrix = [
        [1, 1],
        [1, 1],
    ];
    expect(getBottomPointers(matrix)).toEqual([
        {
            x: 0,
            y: 1,
        },
        {
            x: 1,
            y: 1,
        },
    ]);
});

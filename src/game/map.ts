import { gameRol, gameCol } from "../game";

export function initMap(map: any) {
    // initmap
    for (let i = 0; i < gameRol; i++) {
        const arr: Array<number> = [];
        for (let j = 0; j < gameCol; j++) {
            arr.push(0);
        }
        map.push(arr);
    }
}

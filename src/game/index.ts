export * from "./config";
import { initMap } from "./map";
import { Box } from "./box";
import { render } from "./render";
import { addTicker } from "./ticker";
import { intervalTimer } from "./utils";
import { getBottomPointers } from "./matrix";
import { gameRol } from "../game/config";

export function startGame(map: any) {
    initMap(map);

    // box
    // 要有一个方块

    const box = new Box();
    box.x = 1;
    box.y = 2;

    // 1s 执行一次
    let timeInterval = 1000;
    const isDown = intervalTimer(timeInterval);
    function handleTicker(n) {
        console.log(n);
        if (isDown(n)) {
            moveDown(box, map);
        }
        render(box, map);
    }

    addTicker(handleTicker);

    // 方块可以掉落
    window.addEventListener("keydown", () => {
        box.y++;
    });
}

export function moveDown(box, map) {
    // 1. 获取box地步所有的点
    const points = getBottomPointers(box.shape);
    // 2. 检测是否某个点超出了游戏的范围
    // y
    // point.y + box.y + 1 > gameRow
    const mapRol = map.length;
    const boo = points.some((point) => {
        return point.y + box.y + 1 >= mapRol;
    });

    // 只要有一个点大雨游戏的范围的话，就不可以移动了
    if (boo) return;

    box.y++;
}

<template>
    <div>
        <div class="row" v-for="row in gameRol" :key="`row${row}`">
            <div v-for="col in gameCol" :key="`col${col}`">
                <Box :type="map[row - 1][col - 1]"></Box>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Box from "./Box.vue";
import { gameRol, gameCol, startGame } from "../game";
import { reactive } from "vue";

const map = reactive([]);
startGame(map);
</script>

<style>
.row {
    display: flex;
    align-items: flex-start;
}
</style>

<script setup lang="ts">
import * as THREE from 'three'
</script>

<template>
    <div class="container3D">
        <TresCanvas window-size clear-color="#82DBC5">
            <TresPerspectiveCamera />
            <OrbitControls />

            <TresMesh>
                <TresBoxGeometry />
                <TresMeshStandardMaterial color="#82DBC5" />
            </TresMesh>

            <TresLineSegments>
                <TresEdgesGeometry attach="geometry" :args="[new THREE.BoxGeometry()]" />
                <TresLineBasicMaterial color="black" :linewidth="5" />
            </TresLineSegments>

            <TresAmbientLight :intensity="1" />
        </TresCanvas>
    </div>
</template>

<style lang="scss">
.container3D {
    position: fixed;
    inset: 0;
    z-index: 100;
    pointer-events: none;
}
</style>

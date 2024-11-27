<script setup lang="ts">
import * as THREE from 'three'
</script>

<template>
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
</template>

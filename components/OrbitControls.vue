<script setup lang="ts">
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extendTres({ OrbitControls })
const { camera, renderer } = useTresContext()
</script>

<template>
    <TresOrbitControls v-if="renderer" :args="[camera, renderer?.domElement]" />
</template>
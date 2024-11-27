<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: 'Title'
    }
})
</script>

<template>
    <div class="badge">
        <h3>{{ title }}</h3>
    </div>
</template>
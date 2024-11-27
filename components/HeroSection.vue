<template>
    <div class="container">
        <img src="~/public/hero.jpg" class="photo" />
        <div>
            <HeroBadge title="Career" />
            <HeroBadge title="Projects" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
}

.photo {
    object-fit: contain;
    width: 100%;
    height: 90vh;
}
</style>
<script setup>

</script>

<template>
    <div class="description">
        <div class="title item-block">Название</div>
        <div class="autor item-block">Автор</div>
        <div class="year item-block">Год издания</div>
        <div class="format item-block">Формат книги</div>
    </div>
</template>

<style scoped>
.description {
    display: flex;
    font-size: 12px;
    color: #667185;
    background-color: #F7F9FC;

    .title {
        flex: 0 1 240px;
    }

    .autor {
        flex: 0 1 180px;
    }

    .year {
        flex: 0 1 125px;
    }

    .item-block {
        padding: 12px 24px;
    }
}
</style>
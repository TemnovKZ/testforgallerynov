<script setup>


defineProps({
    title: String,
    author: String,
    year: Number,
    formats: Array,
})

</script>

<template>
    <div class="item">
        <div class="title item-block">{{ title }}</div>
        <div class="autor item-block">{{ author }}</div>
        <div class="year item-block">{{ year }}</div>
        <div class="formats item-block">
            <div
                v-for="format in formats"
                :key="format"
                class="format"
            >
                {{ format }}
            </div>
        </div>
    </div>
</template>

<style scoped>
    .item {
        display: flex;
        width: 100%;

        .title {
            flex: 0 0 240px;
        }

        .autor {
            flex: 0 0 180px;
        }

        .year {
            flex: 0 0 125px;
        }

        .formats {
            max-height: 24px;
            display: flex;
            gap: 12px;
            .format {
                padding: 4px 8px;
                font-size: 12px;
                border-radius: 8px;
                background-color: #E6F2FF;
                white-space: nowrap;
            }
        }

        .item-block {
            padding: 24px;
        }
    }
</style>
<script setup>
import ItemApp from "@/components/list/ItemApp.vue";
import ListDescription from "@/components/list/ListDescription.vue";
import {useStore} from "@/store/store.js";

const store = useStore();

</script>

<template>
    <ListDescription/>
    <ItemApp
        v-for="(item, index) in store.items"
        :key="index"
        :title="item.title"
        :author="item.author"
        :year="item.year"
        :formats="item.formats"
    />
</template>

<style scoped>

</style>
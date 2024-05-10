<script setup>
import {ref} from "vue";
import IconSearch from "@/icon/IconSearch.vue";
import { useStore } from "@/store/store.js";

const store = useStore()
const searchApp = ref('')

const fetchBook = async () => {
    store.searchApp = searchApp.value
    await store.fetchBook()
    searchApp.value = ''
}

defineProps({
    widthValue: {
        type: String,
        default: '240px'
    }
})
</script>

<template>

    <div
        :style="{width: widthValue}"
        class="search-container"
    >
        <input
            v-model="searchApp"
            @keyup.enter="fetchBook"
            class="input"
            type="text"
            placeholder="Поиск"
        >
        <IconSearch class="icon"/>
    </div>

</template>

<style scoped>

.search-container {
    position: relative;

    .input {
        height: 45px;
        width: 100%;
        padding: 12px 40px 12px 16px;
        border: 1px solid transparent;
        font-size: 16px;
    }

    &:hover .input {
        background-color: #E6F2FF;
    }

    .input:focus {
        border: 2px solid #007BFF;
        background-color: white;
    }

    .icon {
        position: absolute;
        width: 16px;
        height: 16px;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
    }
}
</style>
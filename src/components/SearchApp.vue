<script setup>

import SearchInput from "@/components/search/SearchInput.vue";
import ButtonSubmit from "@/components/search/ButtonSubmit.vue";
import DropdownSearch from "@/components/search/DropdownSearch.vue";
import IconCalendar from "@/icon/IconCalendar.vue";
import IconFormat from "@/icon/IconFormat.vue";

</script>

<template>
    <div class="wrapper">
        <SearchInput :widthValue="'360px'"/>
        <div class="options">
            <DropdownSearch>
                <template #icon>
                    <IconCalendar/>
                </template>
                <template #button-name>
                    Год
                </template>
            </DropdownSearch>
            <DropdownSearch>
                <template #icon>
                    <IconFormat/>
                </template>
                <template #button-name>
                    Формат книги
                </template>
            </DropdownSearch>
            <ButtonSubmit/>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    justify-content: space-between;

    .options {
        position: relative;
        display: flex;
        gap: 12px;
    }
}
</style>
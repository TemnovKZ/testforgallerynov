<script setup>

import { onMounted, onUnmounted, ref, watchEffect } from 'vue';
import SearchInput from "@/components/search/SearchInput.vue";
import CheckboxApp from "@/components/CheckboxApp.vue";
import { useStore } from "@/store/store.js";

const store = useStore()

const isOpen = ref(false);
const id = Math.random().toString();

const checkboxTitle = [
    {
        title: 'Аудиокнига',
        id: '1'
    },
    {
        title: 'DVD диск',
        id: '2'
    },
    {
        title: 'Бумажный',
        id: '3'
    },
    {
        title: 'Твердый переплет',
        id: '4'
    },
    {
        title: 'Audio CD',
        id: '5'
    }
]

onMounted(() => {
    isOpen.value = store.isDropdownOpen(id);
});

onUnmounted(() => {
    if (isOpen.value) store.closeDropdown();
});

function dropdown() {
    if (isOpen.value) {
        store.closeDropdown();
    } else {
        store.openDropdown(id);
    }
    isOpen.value = !isOpen.value;
}

watchEffect(() => {
    isOpen.value = store.isDropdownOpen(id);
});
</script>

<template>
    <div class="dropdown">
        <button
            class="dropdown-toggle"
            @click="dropdown"
        >
            <slot name="icon" />
            <slot name="button-name" />
        </button>
        <div
            v-if="isOpen"
            class="dropdown-menu"
        >
            <SearchInput/>
            <div v-for="item in checkboxTitle" class="dropdown-item">
                <CheckboxApp
                    :id="item.id"
                >
                    {{ item.title }}
                </CheckboxApp>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .dropdown {
        max-width: 240px;

        .dropdown-toggle {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 20px;
        }
        .dropdown-toggle:hover {
            background-color: #E6F2FF;
        }
        .dropdown-toggle:focus {
            background-color: #D0D5DD;
        }

        .dropdown-menu {
            width: 240px;
            margin-top: 12px;
            position: absolute;
            border-radius: 8px;
            background-color: white;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
        }
    }
</style>
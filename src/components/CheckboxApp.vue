<script setup>

import IconDone from "@/icon/IconDone.vue";

const props = defineProps({
    id: String
})

</script>

<template>
    <div class="checkbox-block">
        <input type="checkbox" :id="id" class="custom-checkbox" />
        <label class="checkbox-label" :for="id">
            <IconDone class="icon"/>
            <slot></slot>
        </label>
    </div>
</template>

<style scoped>
.checkbox-block {
    padding: 16px 20px;
    position: relative;
    display: inline-block;
}

.custom-checkbox {
    display: none;
}

.checkbox-label {
    position: relative;
    padding-left: 35px;
    cursor: pointer;
}

.icon {
    width: 10px;
    height: 10px;
    position: absolute;
    top: 4.5px;
    left: 4.5px;
    z-index: 2;
}

.checkbox-label:after {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    position: absolute;
    left: 0;
    top: 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    transition: 0.3s ease;
}

.custom-checkbox:hover + .checkbox-label:after {
    border: 1px solid #007BFF;
    border-radius: 4px;
}

.custom-checkbox:hover + .checkbox-label:before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 32px;
    background-color: #E6F2FF;
    border-radius: 50%;
    position: absolute;
    top: -7.5px;
    left: -7.5px;
    transition: 0.3s ease;
}

.custom-checkbox:checked + .checkbox-label:after {
    background-color: #007BFF;
}
</style>
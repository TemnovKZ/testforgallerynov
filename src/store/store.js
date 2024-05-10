
import {reactive, ref} from 'vue';
import {useFetch} from "@vueuse/core";
import {defineStore} from "pinia";

export const useStore = defineStore("book", () => {

    const items = ref([
        {
            title: "Война и мир",
            author: "Боба фетт",
            year: "1992",
            formats: ["CD", "DVD", "Aux"]
        },
        {
            title: "Призрачный гонщик",
            author: "Птушкнин В.В",
            year: "1701",
            formats: ["Book", "Podcast", "Magazine", "CD", "Audio CD"]
        },
        {
            title: "Огонь",
            author: "Скайуокер Э.К",
            year: "2013",
            formats: ["Book", "CD", "Audio CD"]
        },
    ]);

    const searchApp = ref('');

    const fetchBook = async () => {
        try {
            const res = await useFetch(`https://openlibrary.org/search.json?q=${searchApp.value}`).json()
            const findRequest = res.data.value.docs
            if(findRequest.length > 0) {
                const firstItem = findRequest[0];

                const newItem = {
                    title: firstItem.title,
                    author: firstItem.author_name[0],
                    year: firstItem.first_publish_year,
                    formats: firstItem.format
                };
                items.value.unshift(newItem);
            }

            console.log(findRequest)
        } catch (e) {
            console.log('подумай ещё')
        } finally {
            searchApp.value = '';
        }
    }


    // дропдауны для сёрча

    let state = reactive({ openDropdown: null });

    function openDropdown(id) {
        state.openDropdown = id;
    }

    function closeDropdown() {
        state.openDropdown = null;
    }

    function isDropdownOpen(id) {
        return state.openDropdown === id;
    }

    return {
        fetchBook,
        searchApp,
        items,
        openDropdown,
        closeDropdown,
        isDropdownOpen
    }

})

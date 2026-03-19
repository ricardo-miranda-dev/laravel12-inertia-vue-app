<script setup>
import { usePage } from '@inertiajs/vue3'; 
import { router } from '@inertiajs/vue3';

defineProps({
    data: {
        type: Object,
        required: true
    }
});

//console.log(usePage().props.data);

const updatPageNumber = (link) => {
    let pageNumber =link.url.split("=")[1];
    router.visit('/students?page='+pageNumber,{
        preserveScroll:true,
    });
}
</script>

<template>
<div class="max-w-7xl mx-auto py-6">
        <div class="max-w-none mx-auto">
            <div class="bg-white overflow-hidden shadow sm:rounded-lg">
            <div v-if="data.meta.links && data.meta.links.length > 3"
                class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
            >
        <div class="flex-1 flex justify-between sm:hidden"></div>
    

        
        
        <!-- Mobile -->
        <div class="flex flex-1 justify-between sm:hidden">
            <button
                @click.prevent="updatPageNumber(link)"
                v-for="(link, index) in data.meta.links"
                :key="index"
                :disabled="link.active || !link.url"
                class="px-4 py-2 text-sm border rounded-md"
                :class="{
                    
                            'bg-gray-200 text-gray-500': link.active, 
                            'bg-white hover:bg-gray-100':!link.active,
                    
                }"
            >
            <span v-html="link.label"></span>
            </button>
            
        </div>

        <!-- Desktop -->
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            
            <div>
                <p class="text-sm text-gray-700">
                    Showing 

                    <span class="font-medium">{{ data.meta.from }}</span>

                    to

                    <span class="font-medium">{{ data.meta.to }}</span>

                    of

                    <span class="font-medium">{{ data.meta.total }}</span>

                    results
                </p>
            </div>

            <div>
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm">
                    <button
                    @click.prevent="updatPageNumber(link)"
                        v-for="(link, index) in data.meta.links"
                        :key="index"
                        :disabled="link.active || !link.url"
                        class="relative inline-flex items-center px-4 py-2 text-sm font-semibold border"
                        :class="{
                            
                                 'z-10 bg-indigo-600 text-white': link.active, 'bg-white text-gray-900 hover:bg-gray-50':!link.active,
                           
                        }"
                    >
                    <span v-html="link.label"></span>
                    </button>
                </nav>
            </div>

        </div>

        </div>
    </div>
  </div>
</div>
   
</template>
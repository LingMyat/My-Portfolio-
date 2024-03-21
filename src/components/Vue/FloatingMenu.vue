<template>
    <div class="fixed left-[20px] flex flex-col gap-2 p-2 bg-[#2E2E34] rounded-full">
        <div class="w-7 h-7 flex items-center justify-center rounded-full bg-white text-gray-600 font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="M104 40H56a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 64H56V56h48zm96-64h-48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 64h-48V56h48zm-96 32H56a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64H56v-48h48zm96-64h-48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64h-48v-48h48z"/></svg>
        </div>
        <div class="w-7 h-7 flex items-center justify-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>
        </div>
        <MusicVue class="cursor-pointer"/>
        
    </div>
</template>
  
<script setup>
    import MusicVue from "./components/Music.vue";
</script>


<style scoped>

</style>
<template>
  <header class="w-full absolute top-0 left-0 z-50">
    <div class="grid grid-cols-3 justify-between  w-full max-w-screen-2xl mx-auto px-8 py-4 h-full">
      <div></div>
      <NuxtLink to="/" class="flex justify-center items-center text-2xl text-white font-semibold cursor-pointer">Travel My life</NuxtLink>
      <div class="text-base font-medium text-white h-full inline-flex justify-end gap-6 mr-20">
        <div class="px-2 py-10  relative h-full group">
          <span class="hover:opacity-70 cursor-pointer">Направления</span>
          <div
            class="navbar__submenu invisible translate-y-10 group-hover:translate-y-0 group-hover:visible absolute top-full group-hover:block bg-white text-gray-900 min-w-[320px] translate-x-[-50%] left-1/2 opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">
            <ul class="pb-6">
              <li
                class="py-2 px-8 border-[1px] border-bordergray border-y-solid cursor-pointer hover:bg-hovergray hover:text-btnblue">
                <NuxtLink to="/australia">
                  Австралия
                </NuxtLink>
              </li>
              <li
                class="py-2 px-8 border-[1px] border-bordergray border-y-solid cursor-pointer hover:bg-hovergray hover:text-btnblue">
                Азия</li>
              <li
                class="py-2 px-8 border-[1px] border-bordergray border-y-solid cursor-pointer hover:bg-hovergray hover:text-btnblue">
                Антарктида</li>
              <li
                class="py-2 px-8 border-[1px] border-bordergray border-y-solid cursor-pointer hover:bg-hovergray hover:text-btnblue">
                Африка</li>
              <li
                class="py-2 px-8 border-[1px] border-bordergray border-y-solid cursor-pointer hover:bg-hovergray hover:text-btnblue">
                Европа</li>
              <li
                class="py-2 px-8 border-[1px] border-bordergray border-y-solid cursor-pointer hover:bg-hovergray hover:text-btnblue">
                Северная Америка</li>
              <li
                class="py-2 px-8 border-[1px] border-bordergray border-y-solid cursor-pointer hover:bg-hovergray hover:text-btnblue">
                Средний Восток</li>
              <li
                class="py-2 px-8 border-[1px] border-bordergray border-y-solid cursor-pointer hover:bg-hovergray hover:text-btnblue">
                Южная Америка</li>
            </ul>
            <span class="py-2 px-8 bg-btnblue text-white inline-flex cursor-pointer w-full text-center">Смотреть все
              направления</span>
          </div>
        </div>
        <div class="px-2 py-10 cursor-pointer h-full hover:opacity-70 ">Истории</div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">

</script>
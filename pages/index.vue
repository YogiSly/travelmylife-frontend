<template>
  <main class="">
    <section class="header h-full flex justify-center items-center">
      <div class="bg-bgtransparent w-full h-full absolute top-0 left-0 z-30"></div>
      <img class="absolute top-[-150px]  left-0 z-20" src="~/assets/images/bg-header.jpg" alt="">
      <span class="flex justify-center items-center text-7xl font-medium text-white pt-12 relative z-40 text-center">Открой<br/>мир путешествий</span>
    </section>
    <section class="w-full flex flex-col max-w-screen-2xl mx-auto px-8 py-4 my-20">
      <div class="w-full flex justify-between mb-16">
        <span class="text-5xl font-medium">Куда поехать?</span>
        <div class="flex justify-center items-center text-sm py-2 px-5 rounded-full border-[1px] border-solid border-border h-full font-semibold cursor-pointer hover:text-white hover:bg-btnblue hover:border-btnblue">Смотреть все направления</div>
      </div>
      <div class="flex justify-between gap-8">
        
        <NuxtLink class="flex flex-col w-full group cursor-pointer">
          <img class="object-cover max-h-[350px] rounded-2xl" src="~/assets/images/malawi.avif" alt="">
          <span class="text-2xl font-semibold pt-4 group-hover:underline">Малави</span>
        </NuxtLink>
        <NuxtLink class="flex flex-col w-full group cursor-pointer">
          <img class="object-cover max-h-[350px] rounded-2xl" src="~/assets/images/costarica.avif" alt="">
          <span class="text-2xl font-semibold pt-4 group-hover:underline">Коста-Рика</span>
        </NuxtLink>
        <NuxtLink class="flex flex-col w-full group cursor-pointer">
          <img class="object-cover max-h-[350px] rounded-2xl" src="~/assets/images/neworleans.avif" alt="">
          <span class="text-2xl font-semibold pt-4 group-hover:underline">Новый Орлеан</span>
        </NuxtLink>
      </div>
    </section>
<section class="py-36"></section>
   
  </main>
</template>


<script setup>
  import { useSampleStore } from '~/store/sample';
  
  const Store = useSampleStore();

  function changeSampleStoreData(testString) {
    Store.setSampleData(testString);
  }

</script>

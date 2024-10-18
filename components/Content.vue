<template>
  <section class="bg-[#fef2f1] py-8 antialiased dark:bg-gray-900 md:py-12" id="vendors">
    <h1 class="text-center font-harman text-6xl md:text-8xl text-primary-text pb-4 md:pb-8">Vendors</h1>

    <div class="
      w-[90%]
      block 
      md:max-w-lg
      m-auto 
      p-4
      px-8
      bg-white 
      border 
      border-gray-200 
      rounded-lg
      overflow-hidden
      text-center
    ">
      <div class="flex justify-between px-2 font-harman">
        <div>region</div>
        <div>Vendor</div>
      </div>
      <!-- <hr class="pb-4" /> -->
      <nuxt-link v-for="vendor in vendors" :to="vendor.link" target="_blank">

        <hr class="my-1 pt-2" />
        <div
          class="w-full flex justify-between items-center p-2 hover:rounded-lg hover:cursor-pointer hover:bg-gray-100 ease-in-out duration-75 hover:scale-105">
          <div class="flex items-center gap-x-4">
            <div v-html="vendor.country.icon"></div>
            <div class="">
              {{ vendor.country.name }}
            </div>
          </div>
          <div class="flex items-center gap-x-2">
            <h1 class="font-bold">{{ vendor.name }}</h1>
            <div class="opacity-50 hidden sm:block">|</div>
            <img class="w-10 h-10 hidden sm:block" :src="vendor.logo" alt="" />
          </div>
        </div>
      </nuxt-link>

    </div>


    <div v-if="false" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
        <nuxt-link v-if="false" v-for="vendor in vendors" :to="vendor.link"
          class="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 hover:scale-105 ease-in-out duration-100">
          <div class="p-6">
            <div class=" md:h-56 w-full">
              <img class="mx-auto h-full" :src="vendor.logo" alt="" />
            </div>
          </div>
          <div :style="vendor.country.flag"
            class="px-6 py-10 flex items-center justify-center bg-primary-text border-gray-200 border-b border-x rounded-b-lg bg-center bg-no-repeat bg-cover">
            <h3 class="text-2xl font-extrabold leading-tight text-white text-center">{{ vendor.country.name }}</h3>
          </div>
        </nuxt-link>
        <nuxt-link v-for="vendor in vendors" :to="vendor.link"
          class="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 hover:scale-105 ease-in-out duration-100">
          <div class="">
            <div class="rounded w-full">
              <img class="mx-auto h-full rounded-t-lg"
                src="https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png" alt="" />
            </div>
          </div>
          <div
            class="px-6 py-4 flex items-center justify-center border-gray-200 border-b border-x rounded-b-lg bg-center bg-no-repeat bg-cover">
            <h3 class="text-2xl font-extrabold leading-tight text-primary-text text-center">{{ vendor.name }}</h3>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import pt from '~/assets/img/vendors/prototypistsmall.svg';
import keygem from '~/assets/img/vendors/keygemlogo.png';
import cafege from '~/assets/img/vendors/cafegelogo.png';

const vendors = ref([
  {
    name: 'proto[Typist]',
    link: 'https://prototypist.net',
    logo: pt,
    country: {
      name: 'UK',
      icon: '<span class="fi fi-gb text-4xl rounded"></span>',
    }
  },
  {
    name: 'Keygem',
    link: 'https://keygem.com',
    logo: keygem,
    country: {
      name: 'EU',
      icon: '<span class="fi fi-de text-4xl rounded"></span>',
    }
  },
  {
    name: 'NovelKeys',
    link: 'https://novelkeys.com',
    country: {
      name: 'US',
      icon: '<span class="fi fi-us text-4xl rounded"></span>',
    }
  },
  {
    name: 'cafege',
    logo: cafege,
    link: 'https://cafege.com.au',
    country: {
      name: 'OCE',
      icon: '<span class="fi fi-au text-4xl rounded"></span>',
    }
  },
]);
</script>

<style>
@import "/node_modules/flag-icons/css/flag-icons.min.css";
</style>
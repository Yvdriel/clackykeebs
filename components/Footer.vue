<template>
  <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <nuxt-link to="/" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
      
        <img src="~/assets/img/horizontallogo.svg" class="h-28 sm:h-36" alt="ClackyKeebs Logo" />
      </nuxt-link>
      <p class="my-6 text-gray-500 dark:text-gray-400">Een uitgebreide reeks premium diensten en technieken, ontwikkeld
        door DECustoms, om uw auto grondig te reinigen en te beschermen voor een schitterend en langdurig resultaat.</p>
      <ul class="hidden flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white" v-if="false">
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Premium</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">Campaigns</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Blog</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Affiliate Program</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">FAQs</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
        </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#"
          class="hover:underline">ClackyKeebs B.V.</a> All Rights Reserved.</span>
    </div>
  </footer>
</template>

<script lang="ts" setup>

</script>

<style></style>
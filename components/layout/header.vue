<template>
    <section class="overflow-hidden">
        <div class="flex items-center justify-between px-7 xl:px-40 py-5">
          <div class="w-auto">
            <div class="flex flex-wrap items-center">
              <div class="w-auto mr-14">
                <a href="#">
                  <img src="~/assets/logos/flaro-logo-black.svg" alt="">
                </a>
              </div>
            </div>
          </div>
          <div class="w-auto">
            <div class="flex flex-wrap items-center">
              <div class="w-auto hidden lg:block">
                <ul class="flex items-center mr-16">
                  <li class="mr-9 font-medium hover:text-gray-700">
                    <a v-smooth-scroll href="#about">About</a>
                  </li>
                  <li class="mr-9 font-medium hover:text-gray-700">
                    <a v-smooth-scroll href="#service">Solutions</a>
                  </li>
                  <li class="mr-9 font-medium hover:text-gray-700">
                    <a v-smooth-scroll href="#faq">Resources</a>
                  </li>
                </ul>
              </div>
              <div class="w-auto hidden lg:block">
                <div class="inline-block">
                  <a href="#contact" v-smooth-scroll class="py-3 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-black hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Contact Us</a>
                </div>
              </div>
              <div class="w-auto lg:hidden">
                <a href="#">
                  <svg @click="toggle()" class="navbar-burger text-indigo-600" width="56" height="56" viewbox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                    <path d="M37 32H19M37 24H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div :class="menu ?'':'hidden'" class=" navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
          <div :class="menu ?'':'hidden'" @click="toggle()" class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
          <nav class="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
            <div class="flex flex-wrap justify-between h-full">
              <div class="w-full">
                <div class="flex items-center justify-between -m-2">
                  <div class="w-auto p-2">
                    <a class="inline-block" href="#">
                      <img src="~/assets/logos/flaro-logo-black.svg" alt="">
                    </a>
                  </div>
                  <div class="w-auto p-2">
                    <a @click="toggle()" class="navbar-burger" href="#">
                      <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-center py-16 w-full">
                <ul>
                  <li class="mr-12 font-medium hover:text-gray-700">
                    <a v-smooth-scroll href="#about">About</a>
                  </li>
                  <li class="mr-12 font-medium hover:text-gray-700">
                    <a v-smooth-scroll href="#service">Solutions</a>
                  </li>
                  <li class="mr-12 font-medium hover:text-gray-700">
                    <a v-smooth-scroll href="#faq">Resources</a>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col justify-end w-full pb-8">
                <div class="flex flex-wrap">
                  <div class="w-full">
                    <div class="block">
                      <button class="py-3 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" type="button">Try 14 Days Free Trial</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
                
</template>

<script setup lang="ts">
  const menu = ref(false);

function toggle() {
  menu.value = ! menu.value
}
</script>
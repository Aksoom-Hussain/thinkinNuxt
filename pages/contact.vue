<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Contact</template>
      <template v-slot:desc>we are here to help.</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          Contact Team Thinkin
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          Have something to say? I am here to help. connect on
          email or direct on whatsapp.
        </p>
        <div class="mt-5">
          <!-- <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:map-marker" />
            <span>1010 Vienna, Austria</span>
          </div> -->
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:envelope" /><a
              href="mailto:drgntnkin@gmail.com"
              >drgntnkin@gmail.com</a
            >
          </div>
          <!-- <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:phone" /><a
              href="tel:+1 (234) 5678 999"
              >+1 (234) 5678 999</a
            >
          </div> -->
        </div>
      </div>
      <div>

    <div class="flex mt-5 flex-1 w-fit">
        <LandingLink href="https://api.whatsapp.com/send?phone=918126961804&text=i%20am%20interested%20in%20application%20development"  class=" w-full flex flex-row justify-center item-center ">
        
        Connect on 
          <Icon class="h-4 flex flex-1 mt-1 text-green-600" name="simple-icons:whatsapp" size="48" />
      </LandingLink>
      </div>
        <!-- <LandingContactform /> -->
      </div>
    </div>
  </LandingContainer>
</template>

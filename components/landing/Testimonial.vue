<script lang="ts" setup>
const bgColors = ref([
  'bg-red-100 ',
  'bg-blue-100 ',
  'bg-purple-100 ',
  'bg-gray-300 ',
  'bg-slate-300 ',
  'bg-blue-100 ',
  'bg-indigo-100 ',
  'bg-green-100 ',
  'bg-yellow-100 '
])

const testimonies = ref([])
const testimonies1 = ref([])
const testimonies2 = ref([])
function bg() {
  const random = Math.floor(Math.random() * bgColors.value.length);
  return bgColors.value[random];
}

 function ranNo(): number {
  return Math.floor(Math.random() * (15 - 2 + 1)) + 2;
}

onMounted(async () => {
  testimonies.value = [
    
  ];
  const middleIndex = Math.ceil(testimonies.value.length / 2);
  testimonies1.value = testimonies.value.splice(0, middleIndex);   
  testimonies2.value = testimonies.value.splice(-middleIndex);
})

</script>

<template>
  <div class="container px-4 mx-auto">
    <h2 class=" text-lg md:text-4xl font-semibold font-heading text-center tracking-normal leading-tight">"Experience
      the power of our service through our clients' testimonials - see what they're saying!"</h2>

    <div class="marquee flex flex-wrap justify-center items-center">



      <div class="flex flex-nowrap justify-end items-end -m-1.5 mb-1.5">
        <div v-for="(item, index) in testimonies1" :key="index" class="flex-shrink-0 max-w-xs p-1.5">
          <div :class="bg()" class="flex flex-col justify-between h-full rounded-3xl p-6">
            <div class="pb-6">

              <p class="text-md font-medium">{{item.comment}}</p>
            </div>
            <div>
              <div class="flex flex-wrap items-center -m-2">
                <div class="w-auto p-2">
                  <img :src="`/testimonials/avatar${ranNo()}.png`" alt="">
                </div>
                <div class="w-auto p-2">
                  <h3 class="text-base font-semibold">{{item.name}}</h3>
                </div>
              </div>
            </div>
          </div>
      </div>

      </div>
      <div class="flex flex-nowrap justify-center -m-1.5">
        <div v-for="(item, index) in testimonies2" :key="index" class="flex-shrink-0 max-w-xs p-1.5">
          <div :class="bg()" class="flex flex-col justify-between h-full rounded-3xl p-6">
            <div class="pb-6">

              <p class="text-md font-medium">{{item.comment}}</p>
            </div>
            <div>
              <div class="flex flex-wrap items-center -m-2">
                <div class="w-auto p-2">
                  <img :src="`/testimonials/avatar${ranNo()}.png`" alt="">
                </div>
                <div class="w-auto p-2">
                  <h3 class="text-base font-semibold">{{item.name}}</h3>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.marquee {
  display: block;
  position: relative;

  width: 100%;
  animation: scroll 100s linear infinite;
  padding: 3px;
}

.marquee:hover {
  animation-play-state: paused
}


/* Make it move */
@keyframes scroll {
  0% {
    left: 800px;
  }

  100% {
    left: -800px;
  }
}
</style>
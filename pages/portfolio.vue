<script setup>
definePageMeta({
  layout: "landing",
});

const TeamImg1 = "https://source.unsplash.com/IF9TK5Uy-KI";
const TeamImg2 = "https://source.unsplash.com/iEEBWgY_6lA";
const TeamImg3 = "https://source.unsplash.com/ZHvM3XIOHoE";

const port = [
  {image:'/port/img1.png'},
  {image:'/port/img2.png'},
  {image:'/port/img3.png'},
  {image:'/port/img4.png'},
  {image:'/port/img5.png'},
  {image:'/port/img6.png'},
  {image:'/port/img7.png'},
  {image:'/port/img8.png'},
  {image:'/port/img9.png'},
  {image:'/port/img10.png'},
  {image:'/port/img11.png'},
  {image:'/port/img12.png'},
]
const team = [
  {
    name: "Janette Lynch",
    title: "Senior Director",
    avatar: {
      src: TeamImg1,
      width: 480,
      height: 560,
    },
  },
  {
    name: "Marcell Ziemann",
    title: "Principal Strategist",
    avatar: {
      src: TeamImg2,
      width: 580,
      height: 580,
    },
  },
  {
    name: "Robert Palmer",
    title: "Marketing Engineer",
    avatar: {
      src: TeamImg3,
      width: 580,
      height: 580,
    },
  },
];


</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Portfolio</template>
      <template v-slot:desc>Some presentable creation of aur team</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Empowering the world with tech.
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Our portfolio is a melting pot of cultures, hailing from various corners of the globe. With diverse backgrounds, personalities, experiences, and skills, we bring a unique blend of perspectives to the table. It's this diversity that truly sets us apart and makes our team extraordinary.
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-5 mx-auto max-w-4xl mt-12">
      <div v-for="item of port" class="group" v-motion-slide-visible-once-bottom>
        <a href="#" class="w-full ">
          <NuxtImg :src="item.image" alt="" srcset="" />
          <!-- <img
            :src="item.avatar.src"
            :width="item.avatar.width"
            :height="item.avatar.height"
            format="avif"
            alt="Team"
            class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
          /> -->
          </a>

        <div class="mt-4 text-center">
          <h2 class="text-lg text-gray-800">{{ item.name }}</h2>
          <h3 class="text-sm text-slate-500">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>

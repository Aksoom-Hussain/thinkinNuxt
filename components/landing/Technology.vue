<script setup lang="ts">
import type { TechnologyCategory } from "@/types/technologies.d";

defineProps<{
  plan: TechnologyCategory;
  inverted?: boolean;
}>();
</script>

<template>
    <div :class="inverted ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row' " class=" flex gap-8 items-center justify-center " v-motion-slide-visible-once-bottom>
      <div>
        <NuxtImg class="min-h-52 min-w-1/2 object-cover rounded-lg" :src="plan.image" alt="" />
      </div>
    <div>
      <h2 class="text-3xl font-bold">{{ plan.heading }}</h2>
      <ul>
        <li v-for="technology in plan.technologies" :key="technology.name" class="text-lg">
          <strong>{{ technology.name }}</strong>: {{ technology.description }}
        </li>
      </ul>
    </div>
  </div>
  <!-- <div>
    <div
      class="flex flex-col w-full order-first lg:order-none py-5 px-6 rounded-md"
    >
      <div class="text-center">
        <h4 class="text-lg font-medium text-gray-400">{{ plan.name }}</h4>
        <p class="mt-3 text-4xl font-bold text-black md:text-4xl">
          {{
            plan.price && typeof plan.price === "object"
              ? plan.price.monthly
              : plan.price
          }}
        </p>
         {
        plan.price.original && (
          <p class="mt-1 text-xl font-medium text-gray-400 line-through md:text-2xl">
            {plan.price.original}
          </p>
        )
      } 
      </div>
      <ul class="grid mt-8 text-left gap-y-4">
        <li
          v-for="item of plan.features"
          class="flex items-start gap-3 text-gray-800"
        >
          <LandingTick className="w-6 h-6" />
          <span>{{ item }}</span>
        </li>
      </ul>
      <div class="flex mt-8">
        <LandingLink
          :href="plan.button.link || '#'"
          block
          :styleName="plan.popular ? 'primary' : 'outline'"
        >
          {{ plan.button.text || "Get Started" }}
        </LandingLink>
      </div>
    </div>
  </div> -->
</template>

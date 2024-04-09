<script setup>
const features = [
  {
    title: "Bring Your Idea",
    description:
      "Turn your vision into reality with the expertise of our tech professionals.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Track Progress and Deliver",
    description:
      "Receive detailed progress reports and ensure timely delivery of your project.",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "On-Demand Products",
    description:
      "Explore our collection of trendy, ready-to-use apps, websites, and more.",
    icon: "bx:bxs-data",
  },
  {
    title: "Broad Integration",
    description:
      "Leverage our support for various development strategies and seamless integration with diverse platforms.",
    icon: "bx:bxs-bot",
  },
  {
    title: "SEO Enabled",
    description:
      "Boost your product's visibility on search engines with our SEO optimization features, including automatic sitemaps, RSS feeds, pagination, and collections.",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Community",
    description:
      "Join our vibrant community of open-source projects, powered by hundreds of contributors making thousands of individual contributions.",
    icon: "bx:bxs-user",
  },
];
</script>

<template>
  <div id="vision" class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Everything you need to start with your Idea
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Whether you're seeking strategic consulting, software development, or IT
      support, our dedicated team of professionals is here to help you navigate
      the ever-evolving landscape of technology. <wbr /> With our commitment to
      excellence and client satisfaction, we strive to empower businesses with
      cutting-edge solutions that drive growth and success. <wbr /> Partner with
      Thinkin Dragon today and embark on a journey towards technological
      excellence.<wbr />
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

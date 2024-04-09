<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/hero.jpg"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Modern Apps done right
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Welcome to Thinkin Dragon, your trusted partner in technology consultancy and services. <wbr />
        At Thinkin Dragon, we specialize in providing expert guidance and innovative solutions tailored to meet your technological needs. <wbr />
        <!-- Whether you're seeking strategic consulting, software development, or IT support, our dedicated team of professionals is here to help you navigate the ever-evolving landscape of technology. <wbr />
        With our commitment to excellence and client satisfaction, we strive to empower businesses with cutting-edge solutions that drive growth and success. <wbr />
        Partner with Thinkin Dragon today and embark on a journey towards technological excellence.<wbr /> -->
        
      </p>

      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink href="/tech">Get Started</LandingLink>
        <!-- <LandingLink size="lg"
          styleName="outline"
          rel="noopener"
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          >View Repo</LandingLink> -->
      </div>
    </div>
  </main>
</template>

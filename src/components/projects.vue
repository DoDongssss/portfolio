<template>
  <section>
    <div>
      <div class="font-PS2P font-bold flex items-end">
        <span class="w-8 h-[4px] bg-secondary"></span>
        <h1 class="ml-2 text-3xl rotate-[-2deg]">Projects</h1>
      </div>
      <div class="mt-12 flex flex-col gap-6">
        <div class="flex justify-start">
          <div
            class="h-[350px] w-[1000px] flex gap-3 rounded-l-xl p-4 border-l-[6px] border-primary bg-gradient-to-r from-secondary to-transparent bg-opacity-50"
          >
            <div class="h-full w-[65%]">
              <img
                src="/images/project1.jpg"
                alt=""
                class="rounded-xl h-full w-full rotate-[-1deg]"
              />
            </div>
            <div class="h-full w-[35%] flex flex-col font-kanit">
              <h2 class="text-[2em] font-extrabold color-00ADB5">
                Web Portfolio
              </h2>
              <p class="text-[.9rem] mt-2">
                This is my personal portfolio, it contains my information about
                skills, experience and projects.
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  class="px-2 py-1 rounded-xl bg-secondary text-white font-bold text-[.7rem]"
                  >Vue</span
                >
                <span
                  class="px-2 py-1 rounded-xl bg-secondary text-white font-bold text-[.7rem]"
                  >HTML</span
                >
                <span
                  class="px-2 py-1 rounded-xl bg-secondary text-white font-bold text-[.7rem]"
                  >TailWindCSS</span
                >
                <span
                  class="px-2 py-1 rounded-xl bg-secondary text-white font-bold text-[.7rem]"
                  >JS</span
                >
                <span
                  class="px-2 py-1 rounded-xl bg-secondary text-white font-bold text-[.7rem]"
                  >ElementPlus</span
                >
              </div>
              <a href="https://jaa.vercel.app/" target="_blank" class="mt-6">
                <button
                  class="mr-3 py-2 px-4 bg-secondary text-white rounded-md tracking-wide shadow-sm shadow-primary rotate-[-2deg]"
                >
                  take a look
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <div
            class="h-[350px] w-[1000px] flex gap-3 bg-c-393E46 rounded-r-xl p-4 mt-5 border-r-[6px] border-primary bg-gradient-to-r from-transparent to-secondary bg-opacity-50"
          >
            <div class="h-full w-[65%] order-2">
              <img
                src="/images/project2.jpg"
                alt=""
                class="rounded-xl object-fill h-full w-full rotate-[-1deg]"
              />
            </div>
            <div class="h-full w-[35%] flex flex-col order-1">
              <h2 class="text-[2em] font-kanit font-extrabold">Eulap SMS</h2>
              <p class="text-[.9rem] mt-2">
                Eulap SMS - a revolutionary communication solution that is
                transforming businesses' marketing endeavors.
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  class="px-2 py-1 rounded-xl bg-secondary text-white font-bold text-[.7rem]"
                  >Vue</span
                >
                <span
                  class="px-2 py-1 rounded-xl bg-secondary text-white font-bold text-[.7rem]"
                  >TailwindCSS</span
                >
                <span
                  class="px-2 py-1 rounded-xl bg-secondary text-white font-bold text-[.7rem]"
                  >DaisyUI</span
                >
                <span
                  class="px-2 py-1 rounded-xl bg-secondary text-white font-bold text-[.7rem]"
                  >AOS</span
                >
              </div>
              <a href="http://sms.eulap.com/" target="_blank" class="mt-5">
                <button
                  class="mr-3 py-2 px-4 bg-secondary text-white rounded-md tracking-wide shadow-sm shadow-primary rotate-[-2deg]"
                >
                  take a look
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="flex justify-start">
          <div
            class="h-[350px] w-[1000px] flex gap-3 rounded-l-xl p-4 border-l-[6px] border-primary bg-gradient-to-r from-secondary to-transparent bg-opacity-50"
          >
            <div class="h-full w-[65%]">
              <img
                src="/images/project3.jpg"
                alt=""
                class="rounded-xl h-full w-full rotate-[-1deg]"
              />
            </div>
            <div class="h-full w-[35%] flex flex-col font-kanit">
              <h2 class="text-[2em] font-extrabold color-00ADB5">DocKoto</h2>
              <p class="text-[.9rem] mt-2">
                DocKoTo is a mobile app. It offers a free, easy, and secure way
                to connect with medical specialists for online consultation
                anytime, anywhere.
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  class="px-2 py-1 rounded-xl bg-secondary text-white font-bold text-[.7rem]"
                  >Dockoto</span
                >
              </div>
              <a href="https://www.dockoto.com/" target="_blank" class="mt-6">
                <button
                  class="mr-3 py-2 px-4 bg-secondary text-white rounded-md tracking-wide shadow-sm shadow-primary rotate-[-2deg]"
                >
                  take a look
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="flex justify-end">
          <div
            class="relative h-[350px] w-[1000px] flex gap-3 bg-c-393E46 rounded-r-xl p-4 mt-5 border-r-[6px] border-primary bg-gradient-to-r from-transparent to-secondary bg-opacity-50 z-10"
          >
            <!-- <div
              class="absolute inset-0 h-full w-full border border-secondary rounded-xl rotate-[-1deg] z-[-1]"
            ></div> -->
            <div class="h-full w-[65%] order-2">
              <img
                src="/images/project4.jpg"
                alt=""
                class="rounded-xl object-fill h-full w-full rotate-[-1deg]"
              />
            </div>
            <div class="h-full w-[35%] flex flex-col order-1">
              <h2 class="text-[2em] font-kanit font-extrabold">VME SaaS</h2>
              <p class="text-[.9rem] mt-2">
                VME SaaS is a virtual Media Event which can manage an event,
                this project is still on going.
              </p>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  class="px-2 py-1 rounded-xl bg-secondary text-white font-bold text-[.7rem]"
                  >Vue</span
                >
                <span
                  class="px-2 py-1 rounded-xl bg-secondary text-white font-bold text-[.7rem]"
                  >Bootstrap</span
                >
                <span
                  class="px-2 py-1 rounded-xl bg-secondary text-white font-bold text-[.7rem]"
                  >ElementPlus</span
                >
                <span
                  class="px-2 py-1 rounded-xl bg-secondary text-white font-bold text-[.7rem]"
                  >Ant-Design</span
                >
              </div>
              <div class="mt-5">
                <button
                  class="mr-3 py-2 px-4 bg-secondary text-white rounded-md tracking-wide shadow-sm shadow-primary rotate-[-2deg]"
                >
                  take a look
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

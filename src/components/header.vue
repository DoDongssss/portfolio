<template>
  <div
    class="fixed top-0 w-full h-[90px] flex items-center justify-between px-[150px] shadow-sm shadow-secondary z-50 transition-all ease-linear duration-200"
    :class="
      headerStatus == false && scrollPosition != 0
        ? 'translate-y-0 opacity-100 bg-secondary'
        : scrollPosition == 0
        ? 'bg-secondary/50 translate-y-0 opacity-100 '
        : 'translate-y-[-100%] opacity-0'
    "
  >
    <div
      class="rotate-[-2deg] hover:animate-pulse hover:rotate-2 cursor-pointer transition-all ease-linear duration-300"
    >
      <span class="font-bold font-PS2P text-[20px] tracking-wider"
        ><span class="text-primary">D</span>o<span class="text-primary">D</span
        >ong</span
      >
    </div>
    <nav class="flex gap-1 list-none text-primary">
      <li class="relative font-bold text-[16px] cursor-pointer px-4 py-2 group">
        <span
          class="transition-all ease-linear duration-300"
          :class="
            activeSection == 'introduction' ? 'text-white' : 'text-primary'
          "
          >Home</span
        >
        <div
          class="absolute w-full h-full bg-secondary opacity-1000 group-hover:opacity-100 inset-0 rounded skew-x-[-15deg] z-[-1] transition-all ease-linear duration-300 shadow-sm shadow-primary"
          :class="activeSection == 'introduction' ? 'block' : 'hidden'"
        ></div>
      </li>
      <li class="relative font-bold text-[16px] cursor-pointer px-4 py-2 group">
        <span
          class="transition-all ease-linear duration-300"
          :class="activeSection == 'about' ? 'text-white' : 'text-primary'"
          >About</span
        >
        <div
          class="absolute w-full h-full bg-secondary opacity-1000 group-hover:opacity-100 inset-0 rounded skew-x-[-15deg] z-[-1] transition-all ease-linear duration-300 shadow-sm shadow-primary"
          :class="activeSection == 'about' ? 'block' : 'hidden'"
        ></div>
      </li>
      <li class="relative font-bold text-[16px] cursor-pointer px-4 py-2 group">
        <span
          class="transition-all ease-linear duration-300"
          :class="activeSection == 'projects' ? 'text-white' : 'text-primary'"
          >Projects</span
        >
        <div
          class="absolute w-full h-full bg-secondary opacity-1000 group-hover:opacity-100 inset-0 rounded skew-x-[-15deg] z-[-1] transition-all ease-linear duration-300 shadow-sm shadow-primary"
          :class="activeSection == 'projects' ? 'block' : 'hidden'"
        ></div>
      </li>
      <li class="relative font-bold text-[16px] cursor-pointer px-4 py-2 group">
        <span
          class="transition-all ease-linear duration-300"
          :class="activeSection == 'experience' ? 'text-white' : 'text-primary'"
          >Experience</span
        >
        <div
          class="absolute w-full h-full bg-secondary opacity-1000 group-hover:opacity-100 inset-0 rounded skew-x-[-15deg] z-[-1] transition-all ease-linear duration-300 shadow-sm shadow-primary"
          :class="activeSection == 'experience' ? 'block' : 'hidden'"
        ></div>
      </li>
      <li class="relative font-bold text-[16px] cursor-pointer px-4 py-2 group">
        <span
          class="transition-all ease-linear duration-300"
          :class="activeSection == 'contact' ? 'text-white' : 'text-primary'"
          >Contact</span
        >
        <div
          class="absolute w-full h-full bg-secondary opacity-1000 group-hover:opacity-100 inset-0 rounded skew-x-[-15deg] z-[-1] transition-all ease-linear duration-300 shadow-sm shadow-primary"
          :class="activeSection == 'contact' ? 'block' : 'hidden'"
        ></div>
      </li>
      <li class="flex items-center justify-center ml-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-moon cursor-pointer h-6 w-6 animat"
          :class="[darkMode ? 'block' : 'hidden']"
          @click="switchTheme"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-sun cursor-pointer h-6 w-6"
          :class="[darkMode ? 'hidden' : 'block']"
          @click="switchTheme"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </li>
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    scrollPosition: Number,
    prevScrollPosition: Number,
    headerStatus: Boolean,
    activeSection: String,
  },
  setup() {
    const darkMode = ref(false);

    return {
      darkMode,
    };
  },
  methods: {
    switchTheme() {
      this.darkMode = !this.darkMode;
    },
  },
};
</script>

<style lang="scss" scoped></style>

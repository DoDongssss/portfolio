<template>
  <section class="relative h-screen w-full overflow-hidden">
    <div class="w-full h-full flex">
      <div
        class="h-full w-[55%] flex items-start justify-center flex-col rotate-[-1deg]"
      >
        <div class="flex items-center">
          <p class="tracking-widest">HELLO I'M</p>
          <span class="w-[525px] h-[1.6px] bg-secondary ml-3"></span>
        </div>
        <h1 class="font-PS2P font-bold text-[20px] mt-2">Johnny A. Asumbra</h1>
        <div class="rotate-1 mt-9 text-4xl">
          <h1 class="font-kanit text-6xl font-extrabold">
            I <span class="text-secondary">create</span> and
            <span class="text-secondary">build</span> web-based.
          </h1>
          <!-- <p class="mt-5 text-justify pr-[40px]">
            Welcome to my portfolio! I'm a web developer passionate about
            developing websites. Explore my work, testimonials, and professional
            background. Let's connect and collaborate on exciting projects.
            Thank you for visiting!
          </p> -->
        </div>
        <div class="flex gap-5 mt-10">
          <button
            class="flex items-center px-4 py-2 text-md rounded bg-secondary text-white shadow-sm shadow-primary hover:shadow-none hover:bg-transparent border border-transparent hover:border-secondary transition-all ease-linear duration-200 group"
          >
            <span class="group-hover:text-primary transition-all"
              >Download CV</span
            >
          </button>
          <button
            class="flex items-center px-4 py-2 text-md rounded shadow-primary border border-secondary text-white hover:shadow-sm hover:shadow-primary hover:bg-secondary transition-all ease-linear duration-200 group"
          >
            <span class="group-hover:text-white text-primary transition-all"
              >Contact Me</span
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-right ml-1 w-6 group-hover:stroke-white stroke-primary transition-all"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
      <div class="h-full w-[45%] flex items-center justify-center">
        <div
          class="h-[300px] w-[300px] md:h-[400px] md:w-[400px] profile-wrapper z-20 group"
        >
          <img
            src="/public/images/profile.jpg"
            alt=""
            class="relative h-full w-full transition-all ease-linear duration-300 cursor-pointer overflow-hidden"
          />
        </div>
      </div>
    </div>
    <div class="absolute bottom-12 left-0 flex items-center justify-center">
      <p class="text-[11px] font-PS2P animate-pulse">Check Out My</p>
      <span class="w-[100px] h-[1px] bg-secondary ml-3"></span>
      <div class="flex gap-4 ml-3">
        <div
          class="bg-gray-100 rounded-full h-8 w-8 shadow-sm hover:shadow-md shadow-primary group cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github p-[10px] group-hover:translate-y-[-15px] group-hover:scale-[1.8] transition-all ease-linear duration-250"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </div>
        <div
          class="bg-gray-100 rounded-full h-8 w-8 shadow-sm hover:shadow-md shadow-primary group cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-linkedin p-[10px] group-hover:translate-y-[-15px] group-hover:scale-[1.8] transition-all ease-linear duration-250"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </div>
        <div
          class="bg-gray-100 rounded-full h-8 w-8 shadow-sm hover:shadow-md shadow-primary group cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-instagram p-[10px] group-hover:translate-y-[-15px] group-hover:scale-[1.8] transition-all ease-linear duration-250"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>
        <div
          class="bg-gray-100 rounded-full h-8 w-8 shadow-sm hover:shadow-md shadow-primary group cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-facebook p-[10px] hover:text-blue-500 group-hover:translate-y-[-15px] group-hover:scale-[1.8] transition-all ease-linear duration-250"
          >
            <path
              d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            ></path>
          </svg>
        </div>
        <div
          class="bg-gray-100 rounded-full h-8 w-8 shadow-sm hover:shadow-md shadow-primary group cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-twitter hover:text-blue-500 p-[10px] group-hover:translate-y-[-15px] group-hover:scale-[1.8] transition-all ease-linear duration-250"
          >
            <path
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-[200px] right-[-150px] flex items-center justify-center rotate-[-90deg]"
    >
      <p class="text-[11px] font-PS2P animate-pulse">Scroll down</p>
      <span class="w-[200px] h-[1px] bg-secondary ml-3"></span>
      <div class="flex gap-5"></div>
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

<style scoped>
.profile-wrapper {
  perspective: 800px;
}
.profile-wrapper::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  top: -20px;
  right: -20px;
  border-radius: 15px;
  background-color: #00adb5;
  transform: rotate3d(0, 1, 0, -30deg);
  z-index: -1;
  animation: animate-profile1 0.6s linear;
}
.profile-wrapper::before {
  font-family: "Press Start 2P", sans-serif;
  content: "BS Information Technology";
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: end;
  justify-content: center;
  color: #00494d;
  padding-bottom: 20px;
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  background: rgb(0, 170, 179);
  background: linear-gradient(
    365deg,
    rgba(0, 170, 179, 1) 0%,
    rgba(0, 170, 179, 0) 40%
  );
  inset: 0;
  transform: translateY(0);
  transform: rotate3d(0, 1, 0, -25deg);
  z-index: 1;
  animation: animate-profile2 0.7s linear;
}
.profile-wrapper img {
  border-radius: 15px;
  object-fit: cover;
  border: 3px solid #00adb5;
  transform: rotate3d(0, 1, 0, -25deg);
  animation: animate-profile2 0.7s linear;
}

@keyframes animate-profile1 {
  0% {
    transform: translateX(15%);
  }
  100% {
    transform: translateX(0);
    transform: rotate3d(0, 1, 0, -30deg);
  }
}
@keyframes animate-profile2 {
  0% {
    transform: translateX(-15%);
  }
  100% {
    transform: translateX(0);
    transform: rotate3d(0, 1, 0, -25deg);
  }
}
</style>

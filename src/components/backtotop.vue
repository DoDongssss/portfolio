<template>
  <div
    class="fixed items-center justify-center flex-col rounded-full gap-[1px] p-4 cursor-pointer bottom-12 right-5"
    :class="scrollPosition >= 300 ? 'flex' : 'hidden'"
    @click="backtotop"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      class="h-[20px] fill-secondary"
    >
      <path
        d="M96 256H128V512H0V352H32V320H64V288H96V256zM512 352V512H384V256H416V288H448V320H480V352H512zM320 64H352V448H320V416H192V448H160V64H192V32H224V0H288V32H320V64zM288 128H224V192H288V128z"
      />
    </svg>
    <span
      class="font-bold text-[10px] color-222831 rotate-[-90deg] mt-8 text-primary"
      >BACK TO TOP</span
    >
  </div>
</template>

<script>
export default {
  props: {
    scrollPosition: Number,
  },
  setup() {
    return {};
  },
  methods: {
    backtotop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
div {
  animation: animate-racket 1.5s linear infinite;
  transform: translateY(0);
  transition: all 0.5s ease;
}
div:hover {
  animation: none;
  transition: all 0.5s ease;
  bottom: 80px;
}

@keyframes animate-racket {
  0%,
  100% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(-5px);
  }
}
</style>

<template>
  <headerView />

  <div class="px-[150px] flex flex-col gap-[125px]">
    <introduction />
    <about />
    <education />
  </div>
</template>

<script>
import headerView from "../components/header.vue";
import introduction from "../components/introduction.vue";
import about from "../components/about.vue";
import education from "../components/education.vue";

export default {
  components: {
    headerView,
    introduction,
    about,
    education,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

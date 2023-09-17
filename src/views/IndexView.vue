<template>
  <headerView />

  <div class="px-[150px] flex flex-col">
    <introduction />
    <about />
  </div>
</template>

<script>
import headerView from "../components/header.vue";
import introduction from "../components/introduction.vue";
import about from "../components/about.vue";

export default {
  components: {
    headerView,
    introduction,
    about,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

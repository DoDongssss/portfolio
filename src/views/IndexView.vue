<template>
  <headerView />

  <div class="px-[150px] flex flex-col"></div>
  <introduction />
</template>

<script>
import headerView from "../components/header.vue";
import introduction from "../components/introduction.vue";

export default {
  components: {
    headerView,
    introduction,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

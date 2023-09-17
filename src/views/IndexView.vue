<template>
  <headerView />

  <div class="px-[150px] flex flex-col gap-[125px]">
    <introduction />
    <about />
    <projects />
    <skills />
    <contact />
  </div>

  <footerView />
</template>

<script>
import headerView from "../components/header.vue";
import introduction from "../components/introduction.vue";
import about from "../components/about.vue";
import projects from "../components/projects.vue";
import skills from "../components/skills.vue";
import contact from "../components/contact.vue";
import footerView from "../components/footer.vue";

export default {
  components: {
    headerView,
    introduction,
    about,
    projects,
    skills,
    contact,
    footerView,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

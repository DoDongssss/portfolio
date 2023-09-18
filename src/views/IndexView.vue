<template>
  <headerView
    :headerStatus="headerStatus"
    :scrollPosition="scrollPosition"
    :prevScrollPosition="prevScrollPosition"
    :activeSection="activeSection"
  />

  <div class="px-[150px] flex flex-col gap-[300px]">
    <introduction id="introduction" />
    <about id="about" />
    <projects id="projects" />
    <experience id="experience" />
    <contact id="contact" />
  </div>

  <footerView />

  <backtotop :scrollPosition="scrollPosition" />
</template>

<script>
import { ref } from "vue";
import headerView from "../components/header.vue";
import introduction from "../components/introduction.vue";
import about from "../components/about.vue";
import projects from "../components/projects.vue";
import experience from "../components/experience.vue";
import contact from "../components/contact.vue";
import footerView from "../components/footer.vue";
import backtotop from "../components/backtotop.vue";

export default {
  components: {
    headerView,
    introduction,
    about,
    projects,
    experience,
    contact,
    footerView,
    backtotop,
  },
  setup() {
    const scrollPosition = ref(0);
    const prevScrollPosition = ref(0);
    const headerStatus = ref(false);
    const activeSection = ref("introduction");
    return {
      scrollPosition,
      prevScrollPosition,
      headerStatus,
      activeSection,
    };
  },
  methods: {
    getScrollPosition() {
      this.scrollPosition = window.scrollY;

      if (this.scrollPosition > this.prevScrollPosition) {
        this.headerStatus = true;
      } else {
        this.headerStatus = false;
      }

      this.prevScrollPosition = this.scrollPosition;
    },
    checkVisibleSection() {
      const sections = [
        "introduction",
        "about",
        "projects",
        "experience",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            this.activeSection = section;
            break;
          }
        }
        console.log(section);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.getScrollPosition);
    window.addEventListener("scroll", this.checkVisibleSection);
  },
};
</script>

<style lang="scss" scoped></style>

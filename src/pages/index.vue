<template>
  <main :class="['pt-64', 'pb-64']">
    <div :class="['container', 'pr-24', 'pl-24']">
      <h2 :class="['mb-16', 'text-center', 'text-2xl']">Yutaka Kaneko</h2>

      <p :class="['text-center', 'text-gray']">I am Front-End Engineer.</p>

      <AppSocial :class="['mt-48']"></AppSocial>

      <div :class="['mt-64']">
        <section>
          <h2 :class="['mt-32', 'mb-16', 'text-xl']">Skills</h2>
          <section>
            <h3 :class="['mt-16', 'mb-8', 'text-lg']">Programing language</h3>
            <p>HTML, CSS, JavaScript, TypeScript, Node.js, PHP</p>
          </section>
          <section>
            <h3 :class="['mt-16', 'mb-8', 'text-lg']">Library</h3>
            <p>
              Vue.js(Nuxt.js), Riot.js, GraphQL(Apollo Client), Jest, Storybook,
              Puppeteer
            </p>
          </section>
          <section>
            <h3 :class="['mt-16', 'mb-8', 'text-lg']">Platform</h3>
            <p>Firebase, Amazon Web Service</p>
          </section>
          <section>
            <h3 :class="['mt-16', 'mb-8', 'text-lg']">CMS</h3>
            <p>WordPress</p>
          </section>
        </section>

        <section>
          <h2 :class="['mt-32', 'mb-16', 'text-xl']">Career</h2>
          <ul>
            <li>Markup Engineer. (<time>2017.09 - 2018.03</time>)</li>
            <li>Markup Engineer. (<time>2018.04 - 2018.07</time>)</li>
            <li>Front-End Engineer. (<time>2018.08 - 2021.03</time>)</li>
            <li>Front-End Engineer. (<time>2021.04 -</time>)</li>
          </ul>
        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { AppSocial } from "~/components/AppSocial";

export default defineComponent({
  components: {
    AppSocial,
  },
  setup() {},
});
</script>

<template>
  <main :class="['pt-20', 'pb-20', 'md:pt-64', 'md:pb-64']">
    <div :class="['container']">
      <h2
        :class="[
          'text-center',
          'mt-16',
          'mb-8',
          'text-2xl',
          'md:mt-36',
          'md:mb-20',
          'md:text-4xl',
        ]"
      >
        Yutaka Kaneko
      </h2>

      <p :class="['text-center', 'text-gray', 'md:text-lg']">
        I am Front-End Engineer.
      </p>

      <AppSocial :class="['mt-20', 'md:mt-40']"></AppSocial>

      <div :class="['mt-32', 'md:mt-64']">
        <section>
          <h2
            :class="[
              'mt-16',
              'mb-8',
              'text-2xl',
              'md:mt-36',
              'md:mb-20',
              'md:text-4xl',
            ]"
          >
            Skills
          </h2>

          <div :class="['md:flex', 'md:flex-wrap', 'md:-mt-24']">
            <section :class="['md:min-w-1/2']">
              <h3
                :class="[
                  'mt-12',
                  'mb-4',
                  'text-base',
                  'md:mt-24',
                  'md:mb-8',
                  'md:text-2xl',
                ]"
              >
                Language
              </h3>

              <ul>
                <li>JavaScript / TypeScript</li>
                <li>Node.js</li>
                <li>PHP</li>
              </ul>
            </section>

            <section :class="['md:min-w-1/2']">
              <h3
                :class="[
                  'mt-12',
                  'mb-4',
                  'text-base',
                  'md:mt-24',
                  'md:mb-8',
                  'md:text-2xl',
                ]"
              >
                Frameworks
              </h3>

              <ul>
                <li>Vue.js (v2) / Nuxt.js</li>
                <li>Riot.js (v2)</li>
              </ul>
            </section>

            <section :class="['md:min-w-1/2']">
              <h3
                :class="[
                  'mt-12',
                  'mb-4',
                  'text-base',
                  'md:mt-24',
                  'md:mb-8',
                  'md:text-2xl',
                ]"
              >
                Platform
              </h3>

              <ul>
                <li>Firebase</li>
                <li>Amazon Web Service (Inexperienced)</li>
              </ul>
            </section>

            <section :class="['md:min-w-1/2']">
              <h3
                :class="[
                  'mt-12',
                  'mb-4',
                  'text-base',
                  'md:mt-24',
                  'md:mb-8',
                  'md:text-2xl',
                ]"
              >
                Architecture
              </h3>

              <ul>
                <li>Atomic Design</li>
              </ul>
            </section>
          </div>
        </section>

        <section>
          <h2
            :class="[
              'mt-16',
              'mb-8',
              'text-2xl',
              'md:mt-36',
              'md:mb-20',
              'md:text-4xl',
            ]"
          >
            Career
          </h2>

          <ul>
            <li>Markup Engineer. (<time>2017.09 - 2018.03</time>)</li>
            <li>Markup Engineer. (<time>2018.04 - 2018.07</time>)</li>
            <li>Front-End Engineer. (<time>2018.08 - 2021.03</time>)</li>
            <li>Front-End Engineer. (<time>2021.04 -</time>)</li>
          </ul>
        </section>

        <section>
          <h2
            :class="[
              'mt-16',
              'mb-8',
              'text-2xl',
              'md:mt-36',
              'md:mb-20',
              'md:text-4xl',
            ]"
          >
            Likes
          </h2>

          <p>Animation, Movie, Music, Radio, Comedy.</p>
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

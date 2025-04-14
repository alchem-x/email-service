<template>
  <Html lang="en">
    <Head>
      <title>Email Title</title>
      <meta name="description" content="Description" />
      <Style>
        body {
          background-color: #fff;
          padding: 0;
          margin: 0;
        }
      </Style>
      <Style>
        .container {
          padding: 1rem;
        }
      </Style>
    </Head>
    <div class="container">
      <span>{{ title }}</span>
      <hr />
      <a href="https://github.com/alchem-x/email-service">GitHub</a>
    </div>
  </Html>
</template>

<script setup>
import { Html, Head, Style } from '@vue-email/components'

defineProps({
  title: String,
})
</script>

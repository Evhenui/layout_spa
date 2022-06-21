<template>
  <main class="main">
    <router-view />
  </main>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style lang="scss">
.main {
  padding: 130px 0 0 0;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 850px;
}
@media (max-width: 991.98px) {
  .main {
    max-width: 750px;
    padding: 110px 0 0 0;
    min-height: 600px;
  }
}

@media (max-width: 767.98px) {
  .main {
    min-height: 400px;
    padding: 100px 0 0 0;
  }
}
</style>

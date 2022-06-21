<template>
  <Popup>
    <template v-slot:header>
      <h1>{{ popupInfoSection.headerTitle }}</h1>
    </template>
    <template v-slot:body>
      <div class="main-text">
        <p class="subtitle">{{ popupInfoSection.mainTitle }}</p>
      </div>
    </template>
  </Popup>
</template>

<script>
import Popup from "./Popup.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Popup,
  },
  computed: mapGetters(["popupInfoSection"]),
};
</script>

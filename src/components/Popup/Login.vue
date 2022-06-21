<template>
  <Popup>
    <template v-slot:header>
      <h1>{{ popupLoginSection.headerTitle }}</h1>
    </template>
    <template v-slot:body>
      <form class="form" action="" method="">
        <div class="input-email">
          <label for="email">{{ popupLoginSection.inputEmail }}</label>
          <input
            class="email"
            type="email"
            placeholder="enter you email"
            v-model="email"
            required
          />
        </div>
        <div class="input-password password-login">
          <label for="password">{{ popupLoginSection.inputPassword }}</label>
          <input
            class="password"
            type="password"
            placeholder="password"
            v-model="password"
            required
            maxlength="16"
            minlength="6"
          />
        </div>
        <footer class="footer-popup">
          <button class="btn-login popup-btn-login" type="submit">
            {{ popupItems.btn }}
          </button>
        </footer>
      </form>
    </template>
  </Popup>
</template>

<script>
import Popup from "./Popup.vue";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    email: null,
    password: null,
  }),
  components: {
    Popup,
  },
  computed: mapGetters(["popupLoginSection", "popupItems"]),
};
</script>

<style lang="scss">
.form > .password-login {
  margin-bottom: 40px;
}
</style>

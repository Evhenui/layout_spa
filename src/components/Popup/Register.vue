<template>
  <Popup>
    <template v-slot:header>
      <h1>{{ popupRegisterSection.headerTitle }}</h1>
    </template>
    <template v-slot:body>
      <form class="form" action="" method="">
        <div class="input-email">
          <label for="email">{{ popupRegisterSection.inputEmail }}</label>
          <input
            class="email"
            type="email"
            placeholder="enter you email"
            v-model="email"
            required
          />
        </div>
        <div class="input-name">
          <label for="text">{{ popupRegisterSection.inputName }}</label>
          <input
            class="text"
            type="text"
            placeholder="enter you name"
            v-model="userName"
            required
            maxlength="15"
          />
        </div>
        <div class="input-password">
          <label for="password">{{ popupRegisterSection.inputPassword }}</label>
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
        <div class="input-password-re">
          <label for="repeat-pass">{{
            popupRegisterSection.inputPassword
          }}</label>
          <input
            class="repeat-pass"
            type="password"
            placeholder="Repeat you password"
            v-model="repeatedPassword"
            required
            ref="repeatedPasswordEl"
            maxlength="16"
            minlength="6"
          />
        </div>
        <footer class="footer-popup">
          <button class="btn-register popup-btn-register" type="submit">
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
    userName: null,
    password: null,
    repeatedPassword: null,
  }),
  components: {
    Popup,
  },
  computed: mapGetters(["popupRegisterSection", "formRegister", "popupItems"]),
  watch: {
    repeatedPassword: "checkPasswordsEquality",
    password: "checkPasswordsEquality",
  },
  methods: {
    checkPasswordsEquality() {
      const { password, repeatedPassword, email, userName } = this;
      const { repeatedPasswordEl } = this.$refs;

      if (password !== repeatedPassword) {
        repeatedPasswordEl.setCustomValidity("Passwords must match");
      } else {
        repeatedPasswordEl.setCustomValidity("");
      }
    },
  },
};
</script>

<style lang="scss">
.form > .input-password-re {
  margin-bottom: 40px;
}
</style>

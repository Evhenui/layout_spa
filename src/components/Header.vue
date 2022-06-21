<template>
  <header class="header">
    <a @click="this.$router.push('/')" class="header__link" href="#">
      <img
        src="@/assets/logo.png"
        class="header__img"
        width="200"
        height="26"
      />
    </a>
    <div class="header__wrapper-burger">
      <div
        class="header__burger"
        @click="active = !active"
        :class="active ? 'activeBurger' : ''"
      >
        <span></span>
      </div>
    </div>
    <nav class="header__nav" :class="{ active }">
      <ul class="header__list">
        <li
          class="header__menu-item"
          v-for="(item, index) in headerItem"
          :key="index"
        >
          <router-link class="header__link-item" :to="item.path">
            {{ item.itemName }}
          </router-link>
        </li>
      </ul>
      <div class="header__wrapper-btn-burger">
        <button @click="modalLoginOpen" class="header__btn-log burger-btn-log">
          {{ btn.btnLog }}
        </button>
        <button @click="modalRegisterOpen" class="btn-register burger-btn-reg">
          {{ btn.btnReg }}
        </button>
      </div>
    </nav>
    <div class="header__wrapper-btn">
      <button @click="modalLoginOpen" class="header__btn-log">
        {{ btn.btnLog }}
      </button>
      <button @click="modalRegisterOpen" class="btn-register">
        {{ btn.btnReg }}
      </button>
    </div>
    <transition name="modal">
      <Login v-if="showModal.modalLogin" @close="modalLoginClose" />
    </transition>
    <transition name="modal">
      <Register v-if="showModal.modalRegister" @close="modalRegisterClose" />
    </transition>
  </header>
</template>

<script>
import Popup from "@/components/Popup/Popup.vue";
import Login from "@/components/Popup/Login.vue";
import Register from "@/components/Popup/Register.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      active: false,
      menuRegister: "none",
      popMenu: "none",
    };
  },
  components: {
    Popup,
    Login,
    Register,
  },
  computed: mapGetters(["headerItem", "btn", "showModal"]),
  methods: mapMutations([
    "modalRegisterClose",
    "modalRegisterOpen",
    "modalLoginClose",
    "modalLoginOpen",
    "clickHome",
  ]),
};
</script>

<style lang="scss">
.header {
  padding: 25px 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: white;
  &__link {
    font-size: 0;
    display: inline-block;
    max-width: 200px;
    width: 100%;
  }
  &__img {
    width: 100%;
    height: auto;
  }

  &__nav {
    max-width: 300px;
    width: 100%;
  }

  &__list {
    display: flex;
    justify-content: space-between;
  }

  &__link-item {
    font-family: "Roboto";
    font-size: 16px;
    color: #230b59;
    &:hover {
      color: blue;
    }
  }

  &__btn-log {
    border: 1px solid #4840bb;
    border-radius: 6px;
    background: white;
    color: #4840bb;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 16px;
    padding: 11px 18px;
    cursor: pointer;
    margin: 0 10px 0 0;
    &:active {
      box-shadow: 5px 4px 5px 2px rgb(34, 33, 33);
    }
  }
  .popup-item-login,
  .popup-item-register {
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: left 0.9s;
  }
  &__wrapper-burger {
    display: none;
    .header__burger {
      position: relative;
      width: 30px;
      height: 30px;
      z-index: 2;
      &:hover {
        cursor: pointer;
      }
      &::before,
      &::after {
        content: "";
        background-color: #72727e;
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        transition: all 0.3s;
      }
      &::before {
        top: 3px;
      }
      &::after {
        bottom: 3px;
      }
      & > span {
        position: absolute;
        background-color: #72727e;
        left: 0;
        width: 100%;
        height: 2px;
        top: 14px;
        transition: all 0.5s;
      }
    }
  }
  &__wrapper-btn-burger {
    display: none;
  }
}

@media (max-width: 991.98px) {
  .header {
    padding: 25px 40px;
    &__link {
      margin: 0 40px 0 0;
    }
    &__nav {
      max-width: 260px;
    }
    &__btn-log {
      padding: 11px 10px;
    }
    .btn-register {
      padding: 11px 10px;
    }
  }
}

@media (max-width: 767.98px) {
  .header {
    padding: 25px 35px;
    z-index: 2;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
      z-index: 1;
    }
    &__link {
      margin: 0 30px 0 0;
      z-index: 2;
    }
    &__wrapper-btn {
      display: none;
    }
    &__btn-log {
      padding: 11px 19px;
      font-size: 10px;
      margin: 0 0 10px 0;
    }
    .btn-register {
      padding: 11px 11px;
      font-size: 10px;
    }
    &__wrapper-burger {
      display: block;
      position: relative;
      width: 30px;
      height: 30px;
      z-index: 2;
    }
    &__nav {
      transition: top 0.3s;
      z-index: 0;
      position: fixed;
      background: white;
      top: -100%;
      left: 0;
      .header__list {
        flex-direction: column;
        text-align: center;
        padding: 10px 0;
        margin: 0 0 25px 0;
        li > a {
          font-size: 30px;
          display: block;
          padding-bottom: 24px;
          &:hover {
            color: #9b2b3a;
          }
        }
        li {
          margin: 0 0 25px 0;
          border-bottom: 1px solid #b7b7c0;
          &:last-child {
            margin: 0;
          }
        }
      }
    }
    .active {
      z-index: 0;
      max-width: 100%;
      top: 80px;
      left: 0;
    }
    .activeBurger {
      & > span {
        transform: scale(0);
      }
      &::before {
        top: 13px;
        transform: rotate(-45deg);
      }
      &::after {
        bottom: 15px;
        transform: rotate(45deg);
      }
    }
    &__wrapper-btn-burger {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .burger-btn-log,
      .burger-btn-reg {
        font-size: 30px;
        margin: 0 0 15px 0;
        padding: 20px 40px;
      }
      .burger-btn-reg {
        margin: 0 0 25px 0;
      }
    }
  }
}
</style>

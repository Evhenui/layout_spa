<template>
  <section class="borrow">
    <div class="borrow__info-img-wraper">
      <img
        src="@/assets/borrow-phone.png"
        alt="phone"
        width="353"
        height="696"
      />
    </div>
    <div class="borrow__info-wrapper main-title-info-wrapper">
      <h1 class="borrow__info-title title">
        {{ borrowSub.title }}
      </h1>
      <p class="borrow__info-subtitle subtitle">
        {{ borrowSub.subtitle }}
      </p>
      <button
        class="borrow__info-btn-blue btn-register"
        @click="modalLoginOpen"
      >
        {{ borrowSub.btnBlue }}
      </button>
      <button
        class="borrow__info-btn-white btn-register"
        @click="modalInfoOpen"
      >
        {{ borrowSub.btnWhite }}
      </button>
    </div>
    <transition name="modal">
      <Login
        v-if="showModal.modalLogin"
        @close="modalLoginClose"
        class="invest-popup"
      />
    </transition>
    <transition name="modal">
      <Info
        v-if="showModal.modalInfo"
        @close="modalInfoClose"
        class="invest-popup"
      />
    </transition>
  </section>
</template>

<script>
import Login from "@/components/Popup/Login.vue";
import Info from "@/components/Popup/Info.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { Login, Info },
  computed: mapGetters(["borrowSub", "showModal"]),
  methods: mapMutations([
    "modalLoginClose",
    "modalLoginOpen",
    "modalInfoClose",
    "modalInfoOpen",
  ]),
};
</script>

<style lang="scss">
.borrow {
  display: flex;
  justify-content: space-around;
  padding: 0 100px;
  &__info-title {
    max-width: 320px;
    width: 100%;
  }

  &__info-subtitle {
    max-width: 380px;
    width: 100%;
    font-weight: bolder;
    color: #230b59;
  }

  &__info-btn-blue {
    margin: 0 20px 0 0;
  }

  &__info-btn-white {
    background: white;
    color: #230b59;
  }
  &__info-img-wraper {
    display: flex;
    z-index: -1;
    justify-content: flex-end;
    flex: 0 0 55%;
    position: relative;
    margin: 0 30px 0 0;
    &::after {
      content: "";
      width: 462px;
      height: 569px;
      position: absolute;
      background-repeat: no-repeat;
      background-image: url("@/assets/borrow-card.png");
      top: 84px;
      left: -68px;
    }
  }
}

@media (max-width: 991.98px) {
  .borrow {
    padding: 0 25px;
    margin: 0 0 30px 0;
    &__info-title {
      font-size: 35px;
      line-height: 45px;
    }
    &__info-subtitle {
      font-size: 15px;
      line-height: 25px;
      max-width: 88%;
    }

    &__info-img-wraper {
      display: block;
      max-width: 353px;
      width: 100%;
      margin: 0 30px 0 0;
      &::after {
        width: 100%;
        background-image: none;
      }
    }
    img {
      width: 100%;
      height: auto;
    }
  }
}

@media (max-width: 767.98px) {
  .borrow {
    flex-direction: column-reverse;
    padding: 0 25px;
    text-align: center;
    align-items: center;
    &__info-title {
      max-width: 100%;
    }
    &__info-subtitle {
      max-width: 100%;
    }
    &__info-img-wraper {
      margin: 0;
    }
  }
  .borrow__info-wrapper {
    margin: 0 0 40px 0;
    .borrow__info-btn-blue {
      margin: 0 2px 0 0;
    }
  }
}
</style>

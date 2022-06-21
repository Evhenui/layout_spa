<template>
  <section class="cash">
    <div class="cash__info-wrapper main-title-info-wrapper">
      <h1 class="cash__info-title title">
        {{ cashSub.title }}
      </h1>
      <p class="cash__info-subtitle subtitle">
        {{ cashSub.subtitle }}
      </p>
      <button class="cash__info-btn-blue btn-register" @click="modalLoginOpen">
        {{ cashSub.btnBlue }}
      </button>
      <button class="cash__info-btn-white btn-register" @click="modalInfoOpen">
        {{ cashSub.btnWhite }}
      </button>
    </div>
    <div class="cash__img-wraper">
      <img
        src="@/assets/phone-cash-block.png"
        alt="phone"
        width="267"
        height="525"
      />
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
  components: {
    Login,
    Info,
  },
  computed: mapGetters(["cashSub", "showModal"]),
  methods: mapMutations([
    "modalLoginClose",
    "modalLoginOpen",
    "modalInfoClose",
    "modalInfoOpen",
  ]),
};
</script>

<style lang="scss">
.cash {
  display: flex;
  justify-content: space-around;
  flex: 1 1 400px;
  padding: 20px 100px 0 100px;
  &__info-title {
    max-width: 290px;
    width: 100%;
  }

  &__info-subtitle {
    max-width: 330px;
    width: 100%;
  }

  &__info-btn-blue {
    margin: 0 20px 0 0;
  }

  &__info-btn-white {
    background: white;
    color: #230b59;
  }

  &__img-wraper {
    flex: 0 1 550px;
    z-index: -1;
    position: relative;
    &::after {
      content: "";
      width: 240px;
      height: 97px;
      background-repeat: no-repeat;
      background-image: url(@/assets/massage1.png);
      position: absolute;
      top: 30px;
      right: 20px;
    }
    &::before {
      content: "";
      width: 240px;
      height: 97px;
      background-repeat: no-repeat;
      background-image: url(@/assets/massage2.png);
      position: absolute;
      top: 176px;
      right: 83px;
    }
  }
}

@media (max-width: 991.98px) {
  .cash {
    padding: 0 10px 0 10px;
    margin: 0 0 30px 0;
    &__info-title {
      max-width: 80%;
      font-size: 35px;
      line-height: 45px;
    }

    &__info-subtitle {
      font-size: 15px;
      line-height: 25px;
      max-width: 65%;
    }
    &__img-wraper {
      &::after {
        background-image: none;
      }
      &::before {
        top: 50px;
        right: 83px;
      }
    }
  }
}
@media (max-width: 767.98px) {
  .cash {
    flex-direction: column;
    text-align: center;
    padding: 0 35px;
    .cash__info-wrapper {
      margin: 0 0 30px 0;
    }
    &__info-title {
      max-width: 100%;
      font-size: 45px;
    }

    &__info-subtitle {
      font-size: 20px;
      max-width: 100%;
    }

    &__info-btn-blue {
      padding: 20px 20px;
      margin: 0 20px 0 0;
    }

    &__info-btn-white {
      padding: 20px 20px;
    }
    &__img-wraper {
      &::before {
        right: 100px;
      }
    }
  }
}
@media (max-width: 480.98px) {
  .cash {
    padding: 0 5px;
    &__info-title {
      line-height: 55px;
    }
    &__info-btn-blue {
      margin: 0;
    }
    &__img-wraper {
      display: block;
      margin: 0 auto;
      max-width: 267px;
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
      &::before {
        right: 0px;
      }
    }
  }
}
</style>

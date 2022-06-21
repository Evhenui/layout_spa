<template>
  <section class="invest-block">
    <section class="invest-block__top-block">
      <div class="invest-block__main-img-wrapper">
        <img
          class="invest-block__main-img"
          src="@/assets/some-people.jpg"
          width="745"
          height="559"
          alt="some people"
        />
      </div>
      <div class="invest-block__description-block">
        <h1 class="title main-title-info-wrapper__title">
          {{ invesSub.title }}
        </h1>
        <p class="invest-block__subtitle subtitle">
          {{ invesSub.subtitle }}
        </p>
        <button class="btn-register" @click="modalRegisterOpen">
          {{ invesSub.btn }}
        </button>
      </div>
    </section>
    <section class="invest-block__bottom-block">
      <section class="invest-block__company">
        <div
          class="invest-block__wrapper-company"
          v-for="item in investFooterInfoCompany"
          :key="item"
        >
          <a href="#" class="invest-block__link-img">
            <img class="invest-block__img" :src="item.img" alt="logo company" />
          </a>
          <p class="our-achievements-subtitle subtitle">{{ item.subtitle }}</p>
        </div>
      </section>
      <section class="invest-block__our-achievements">
        <div
          class="invest-block__our-achievements-wrapper"
          v-for="(item, index) in investFooterInfoOurPlus"
          :key="index"
        >
          <h1 class="our-achievements-title">{{ item.title }}</h1>
          <p class="our-achievements-sub">{{ item.subtitle }}</p>
        </div>
      </section>
    </section>
    <transition name="modal">
      <Register
        v-if="showModal.modalRegister"
        @close="modalRegisterClose"
        class="invest-popup"
      />
    </transition>
  </section>
</template>

<script>
import Register from "../components/Popup/Register.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { Register },
  computed: mapGetters([
    "invesSub",
    "investFooterInfoCompany",
    "investFooterInfoOurPlus",
    "showModal",
  ]),
  methods: mapMutations(["modalRegisterClose", "modalRegisterOpen"]),
};
</script>

<style lang="scss">
.invest-block {
  padding: 0 100px;
  margin: 0;
  &__top-block {
    display: flex;
    justify-content: space-between;
    margin: 0 0 32px 0;
    h1 {
      max-width: 80%;
    }
  }

  &__main-img-wrapper {
    margin: 0 30px 0 0;
    max-width: 745px;
    width: 100%;
  }

  &__main-img {
    width: 100%;
    height: auto;
    background: rgb(95, 88, 88);
  }

  &__description-block {
    padding: 120px 0 0 0;
  }

  &__bottom-block {
    display: flex;
    justify-content: space-between;
  }

  &__company {
    display: flex;
    margin: 0 15px 0 0;
  }

  &__link-img {
    display: inline-block;
    font-size: 0;
    margin: 0 0 20px 0;
  }

  &__our-achievements {
    display: flex;
    flex: 0 1 670px;
    justify-content: space-between;
  }
}
.title {
  max-width: 60%;
  margin: 0 0 40px 0;
}

.subtitle {
  max-width: 60%;
  margin: 0 0 40px 0;
}

.our-achievements-subtitle {
  max-width: 58%;
  font-size: 12px;
  line-height: 19px;
}

.our-achievements-title {
  font-family: "Roboto";
  font-size: 27px;
  color: #230b59;
  margin: 0 0 20px 0;
}

.our-achievements-sub {
  font-family: "Roboto";
  font-size: 12px;
  color: #b7b7c0;
  max-width: 100%;
}

@media (max-width: 991.98px) {
  .invest-block {
    padding: 0 20px;
    &__top-block {
      align-items: center;
    }
    &__description-block {
      padding: 0;
      h1 {
        max-width: 88%;
        font-size: 35px;
        line-height: 35px;
      }
      p {
        font-size: 15px;
        line-height: 25px;
        max-width: 88%;
      }
    }

    &__company {
      .invest-block__wrapper-company {
        max-width: 200px;
        .subtitle {
          max-width: 76%;
          line-height: 20px;
          font-size: 20px;
        }
      }
    }
    &__our-achievements {
      flex: 1 1 430px;
      .invest-block__our-achievements-wrapper {
        .our-achievements-title {
          font-size: 19px;
        }
        .our-achievements-sub {
          line-height: 20px;
          font-size: 20px;
        }
      }
    }
  }
}
@media (max-width: 767.98px) {
  .invest-block {
    padding: 0 50px;
    &__top-block {
      flex-direction: column-reverse;
      text-align: center;
      h1 {
        max-width: 100%;
        font-size: 45px;
      }
      p {
        max-width: 100%;
      }
      button {
        margin: 0 0 20px 0;
      }
    }
    &__main-img-wrapper {
      margin: 0;
    }

    &__main-img {
    }

    &__description-block {
    }

    &__bottom-block {
      flex-direction: column;
    }

    &__company {
      margin: 0;
      justify-content: space-around;
      .invest-block__wrapper-company {
        max-width: 150px;
      }
    }

    &__our-achievements {
      gap: 10px;
      flex-wrap: wrap;
      flex: 0 0 190px;
      columns: 2;
      .invest-block__our-achievements-wrapper {
        text-align: center;
      }
    }
  }
}
@media (max-width: 400.98px) {
  .invest-block {
    padding: 0 15px;
    &__top-block {
      h1 {
        max-width: 100%;
        line-height: 45px;
      }
    }
    .invest-block__bottom-block {
      .invest-block__company {
        flex-wrap: wrap;
      }
    }
    &__our-achievements {
      .invest-block__our-achievements-wrapper {
        .our-achievements-sub {
          font-size: 17px;
        }
      }
    }
  }
}
</style>

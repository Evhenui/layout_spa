<template>
  <section class="blog">
    <section class="blog__svaing-wrapper">
      <div class="blog__info-wrapper main-title-info-wrapper">
        <h1 class="blog__info-title title">{{ blogSub.title }}</h1>
        <p class="blog__info-subtitle subtitle">{{ blogSub.subtitle }}</p>
      </div>
      <div class="blog__img-wraper">
        <img
          src="@/assets/cash-diagram.png"
          alt="cash diagram"
          width="640"
          height="542"
        />
      </div>
    </section>
    <section class="blog__information-testimonial">
      <div class="blog__testimonial-wrapper">
        <div
          class="blog__testimonial-item"
          v-for="(item, index) in blogTestimonial"
          :key="index"
        >
          <p class="blog__testimonial-title title">{{ item.title }}</p>
          <h2 class="blog__testimonial-subtitle subtitle">
            {{ item.description }}
          </h2>
          <p class="blog__testimonial-author title">{{ item.author }}</p>
        </div>
      </div>
    </section>
    <section class="blog__our-achievements">
      <div class="blog__central-img">
        <img
          src="@/assets/open-window.png"
          alt="open window with flowers"
          width="599"
          height="599"
        />
      </div>
      <h1 class="blog__title-achievements title">
        {{ blogAchievements.title }}
      </h1>
      <button class="blog__btn-blue btn-register" @click="modalRegisterOpen">
        {{ blogAchievements.btn }}
      </button>
      <div class="blog__partners">
        <p class="blog__partner-title title">
          {{ blogAchievements.titlePartner }}
        </p>
        <div class="blog__wrapper-company">
          <a href="#" v-for="(item, index) in blogPartners" :key="index">
            <img :src="item.img" alt="company" />
          </a>
        </div>
      </div>
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
  components: {
    Register,
  },
  computed: mapGetters([
    "blogSub",
    "blogTestimonial",
    "blogAchievements",
    "blogPartners",
    "showModal",
  ]),
  methods: mapMutations(["modalRegisterClose", "modalRegisterOpen"]),
};
</script>

<style lang="scss">
.blog {
  margin: 0 0 40px 0;
  &__svaing-wrapper {
    padding: 20px 80px 0 80px;
    background: #4840bb;
    display: flex;
  }
  &__info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__info-title,
  &__info-subtitle,
  &__testimonial-title,
  &__testimonial-subtitle,
  &__testimonial-author {
    color: white;
  }
  &__img-wraper {
    max-width: 640px;
    width: 100%;
    img {
      width: 100%;
      height: auto;
      border-radius: 2%;
    }
  }

  &__information-testimonial {
    z-index: -1;
    min-height: 550px;
    background: #230b59;
    position: relative;
    margin: 0 0 80px 0;
  }

  &__testimonial-wrapper {
    position: absolute;
    display: flex;
    justify-content: space-around;
    top: 200px;
  }

  &__testimonial-item {
    background: #ffffff;
    border-radius: 6%;
    flex: 0 1 400px;
    padding: 20px 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    border: 1px solid #230b59;
    margin: 0 5px 0 0;
    &:last-child {
      margin: 0;
    }
  }

  &__testimonial-title,
  &__testimonial-author {
    color: #230b59;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  &__testimonial-subtitle {
    font-size: 31px;
    line-height: 51px;
    letter-spacing: 1.26px;
    color: #230b59;
    max-width: 100%;
    flex: 1 1 auto;
  }

  &__testimonial-author {
    margin: 0;
  }

  &__our-achievements {
    text-align: center;
  }

  &__central-img {
    display: flex;
    justify-content: center;
    margin: 0 0 40px 0;
  }

  &__title-achievements {
    max-width: 50%;
    margin: 0 auto 3% auto;
  }

  &__btn-blue {
    margin: 0 0 3% 0;
  }

  &__wrapper-company {
    display: flex;
    justify-content: space-around;
    align-items: center;
    & > a {
      display: inline-block;
      font-size: 0;
    }
  }
  &__partner-title {
    max-width: 100%;
    font-size: 13px;
  }
}

@media (max-width: 991.98px) {
  .blog {
    padding: 0;
    &__svaing-wrapper {
      padding: 20px 25px 0 25px;
    }
    &__info-wrapper {
      margin: 0 20px 0 0;
    }
    &__info-title {
      max-width: 86%;
      font-size: 35px;
      line-height: 45px;
    }
    &__info-subtitle {
      max-width: 80%;
      font-size: 15px;
      line-height: 25px;
    }

    &__information-testimonial {
      min-height: 285px;
      margin: 0 0 40px 0;
    }

    &__testimonial-wrapper {
      top: 85px;
    }

    &__testimonial-item {
      flex: 0 1 270px;
    }

    &__testimonial-title,
    &__testimonial-author {
      font-size: 20px;
    }

    &__testimonial-subtitle {
      font-size: 16px;
      line-height: 29px;
    }

    &__title-achievements {
      max-width: 80%;
      font-size: 35px;
      line-height: 45px;
    }

    &__wrapper-company {
      flex-direction: column;
      gap: 10px;
    }
    &__partner-title {
      font-size: 15px;
      line-height: 25px;
    }
    &__btn-blue {
      padding: 20px 35px;
    }
  }
}
@media (max-width: 767.98px) {
  .blog {
    &__svaing-wrapper {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    &__info-wrapper {
      margin: 0;
    }
    &__info-title,
    &__info-subtitle {
      max-width: 100%;
    }
    &__information-testimonial {
      min-height: 710px;
      margin: 0 0 50px 0;
    }
    &__testimonial-wrapper {
      flex-direction: column;
      gap: 10px;
      top: 30px;
    }
    &__testimonial-item {
      border-radius: 40px;
      flex-direction: column;
    }
    &__central-img {
      max-width: 599px;
      width: 100%;
      margin: 0 auto;
      img {
        width: 100%;
        height: auto;
      }
    }
    &__wrapper-company {
      gap: 30px;
    }
  }
}

@media (max-width: 440.98px) {
  .blog__information-testimonial {
    margin: 0 0 80px 0;
  }
}
</style>

<template>
  <footer class="footer">
    <div class="footer__top-wrapper-block">
      <a @click="clickHome" href="#" class="footer__logo-link">
        <img
          src="../assets/logo-footer.png"
          alt="logo-link"
          width="200"
          height="26"
          class="footer__logo-img"
        />
      </a>
      <div class="footer__wrapper-navigation">
        <nav class="footer__navigation-left-block">
          <ul class="footer__menu-list">
            <li
              class="footer__menu-item"
              v-for="(item, index) in footerMenuItemleft"
              :key="index"
            >
              <a class="footer__item-link">{{ item.itemName }}</a>
            </li>
          </ul>
        </nav>
        <nav class="footer__navigation-right-block">
          <ul class="footer__menu-list">
            <li
              class="footer__menu-item"
              v-for="(item, index) in footerMenuItemRight"
              :key="index"
            >
              <a
                v-if="item.itemName === 'Back to top'"
                class="footer__item-link"
                href="#"
                >{{ item.itemName }}</a
              >
              <a v-else class="footer__item-link">{{ item.itemName }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="footer__bottom-wrapper-block">
      <p
        class="footer__subtitle subtitle"
        v-for="(item, index) in footerSubtitle"
        :key="index"
      >
        {{ item.subtitle }}
      </p>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",

  computed: mapGetters([
    "footerMenuItemleft",
    "footerMenuItemRight",
    "footerSubtitle",
  ]),
  methods: {
    clickHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.footer {
  background: #18172b;
  padding: 64px 130px;

  &__top-wrapper-block {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ffffff;
    padding: 0 0 20px 0;
    margin: 0 0 20px 0;
  }

  &__logo-link {
    max-width: 200px;
    width: 100%;
    font-size: 0;
    margin: 0 20px 0 0;
  }

  &__logo-img {
    width: 100%;
    height: auto;
  }

  &__wrapper-navigation {
    display: flex;
  }

  &__menu-list {
    display: flex;
    flex-wrap: wrap;
  }

  &__menu-item {
    margin-bottom: 20px;
    width: 50%;
    &:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }
  }

  &__item-link {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      color: #483699;
    }
    &:active {
      color: #291192;
    }
  }
  &__subtitle {
    font-size: 11px;
    color: #b7b7c0;
    margin: 0 0 20px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .subtitle {
    max-width: 100%;
  }
}

@media (max-width: 991.98px) {
  .footer {
    padding: 64px 40px;
    &__logo-link {
      margin: 0 20px 0 0;
    }
    &__wrapper-navigation {
      justify-content: flex-end;
    }

    &__navigation-left-block {
      flex: 0 1 290px;
    }
    &__navigation-right-block {
      flex: 0 1 270px;
    }
  }
}
@media (max-width: 767.98px) {
  .footer {
    padding: 64px 25px;
    &__logo-link {
      display: none;
    }
    &__wrapper-navigation {
      gap: 10px;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
    &__navigation-left-block {
      flex: 0 0 auto;
      .footer__menu-list {
        flex-direction: column;
        .footer__menu-item {
          width: 100%;
          margin: 0 0 10px 0;
          &:last-child {
            margin: 0;
          }
        }
      }
    }
    &__navigation-right-block {
      flex: 0 0 auto;
      .footer__menu-list {
        flex-direction: column;
        .footer__menu-item {
          width: 100%;
          margin: 0 0 10px 0;
          &:last-child {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>

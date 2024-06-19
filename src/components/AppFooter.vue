<script setup>
import TwitterLogo from '../assets/img/twitter-logo.svg'
import FacebookLogo from '../assets/img/facebook-logo.svg'
</script>

<template>
  <footer class="footer">
    <div class="footer__links">
      <ul>
        <li>
          <a href="#">Terms and Conditions</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>
    <div class="footer__social">
      <span>Follow us</span>
      <ul>
        <li>
          <a href="#">
            <TwitterLogo />
          </a>
        </li>
        <li>
          <a href="#">
            <FacebookLogo />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0 1rem 3rem;

  &__links {
    li {
      padding: 0.5rem 0;
      font-size: 1.25rem;
      a {
        color: var(--color-dark-gray);
        text-decoration: none;

        &:hover {
          color: var(--color-darker-gray);
          text-decoration: underline;
        }
      }
    }
  }

  &__social {
    > span {
      color: var(--color-darker-gray);
      font-size: 1.25rem;
      text-align: right;
    }

    > ul {
      display: flex;
      margin-top: 1rem;

      > li {
        margin-right: 1rem;
      }
    }
  }
}

// Responsive styles
@media all and (min-width: 768px) {
  .footer {
    align-items: flex-start;
    &__links ul,
    &__social {
      display: flex;
    }

    &__links ul li {
      padding: 0;
      margin-right: 2rem;
      font-size: 1rem;
    }

    &__social {
      align-items: center;

      span {
        margin-right: 1rem;
        color: var(--color-dark-gray);
        font-size: 0.833rem;
      }
      > ul {
        margin-top: 3px;
      }
    }
  }
}
</style>

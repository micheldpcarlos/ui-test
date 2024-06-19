<script setup></script>

<template>
  <aside class="banner banner-bottom" role="doc-tip" aria-label="Submit a name">
    <img
      srcset="../assets/img/bg-people.png 750w, ../assets/img/bg-people.@2x.png 1440w"
      sizes="(min-width: 750px) 1440px, 100vw"
      class="banner__background"
      src="../assets/img/bg-people.png"
      alt=""
      role="none"
    />
    <div class="banner__left">
      <h2 class="banner__heading">Is there anyone else you would want us to add?</h2>
    </div>
    <div class="banner__right">
      <button class="banner__cta">Submit a name</button>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.banner-bottom {
  flex-direction: column;
  padding: 1rem 3rem;
  margin-top: 2rem;

  .banner__heading {
    position: relative;
    margin: 0 0 1rem;
    color: var(--color-dark-gray);
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
  }

  .banner__right {
    width: 100%;
  }

  .banner__cta {
    position: relative;
    display: block;
    width: 100%;
    padding: 1rem 0;
    border: 2px solid var(--color-darker-background);
    background: transparent;
    color: var(--color-darker-gray);
    font-size: 1.5rem;
  }
}

// Responsive styles
@media all and (min-width: 768px) {
  .banner-bottom {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;

    .banner__background {
      top: -230%;
    }

    .banner__right {
      width: auto;
    }

    .banner__heading {
      margin-bottom: 0;
      font-size: 1.5rem;
    }

    .banner__cta {
      width: 16rem;
    }
  }
}

@media all and (min-width: 1100px) {
  .banner-top {
    .banner__text,
    .banner__left > .banner__hairline {
      font-size: 1rem;
    }

    .banner__left > .banner__title {
      font-size: 1.5rem;
      letter-spacing: 0;
    }

    .icon-button {
      display: block;
      margin-left: 2rem;
    }

    .banner__cta {
      width: 20rem;
    }
  }
}
</style>

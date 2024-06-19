<script setup>
import WikipediaIcon from '../assets/img/wikipedia-logo.svg'
</script>

<template>
  <header class="hero">
    <img
      class="hero__background"
      srcset="../assets/img/pope-francis.png 750w, ../assets/img/pope-francis.@2x.png 1440w"
      sizes="(min-width: 750px) 1440px, 100vw"
      src="../assets/img/pope-francis.png"
      alt="Pope Francis"
    />
    <div class="max-centered">
      <div class="hero__featured-card">
        <div class="featured-card__glass-background"></div>
        <div class="featured-card__content">
          <p class="featured-card__hairline">What's your opinion on</p>
          <h2 class="featured-card__title">Pope Francis?</h2>
          <p class="featured-card__desc">
            He’s talking tough on clergy sexual abuse, or is he just another pervert protector?
            (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
          </p>
          <p class="featured-card__more-info">
            <a href="http://wikipedia.com" target="_blank">
              <WikipediaIcon class="featured-card__more-info-icon" />
              <span>More information</span>
            </a>
          </p>
          <p class="featured-card__cta">What’s Your Veredict?</p>
          <div class="featured-card__buttons">
            <button class="icon-button" aria-label="thumbs up">
              <img src="../assets/img/thumbs-up.svg" alt="thumbs up" />
            </button>
            <button class="icon-button" aria-label="thumbs down">
              <img src="../assets/img/thumbs-down.svg" alt="thumbs down" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="hero__closing-gauge">
      <div class="closing-gauge__left">
        <span class="closing-gauge__title">closing in</span>
      </div>
      <div class="closing-gauge__right">
        <span class="closing-gauge__number">22</span>
        <span class="closing-gauge__desc">days</span>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  overflow: hidden;
  height: 80vw;
  min-height: 35rem;
  max-height: 38rem;
  margin-bottom: 2rem;

  &__background {
    position: absolute;
    left: -35vw;
    width: 160vw;
    height: 100%;
    object-fit: cover;
  }

  &__featured-card {
    position: relative;
    top: 5.5rem;
    left: 1rem;
    overflow: hidden;
    width: 55vw;
    max-height: 25rem;
  }

  .featured-card {
    &__glass-background {
      position: absolute;
      top: -20%;
      left: -20%;
      width: 140%;
      height: 140%;
      background:
        center no-repeat linear-gradient(var(--color-dark-background), var(--color-dark-background)),
        -25vw 0/160vw no-repeat url('../assets/img/pope-francis.png');
      filter: blur(1rem);
    }

    &__content {
      position: relative;
      padding: 1rem;
      color: var(--color-white);
    }

    &__hairline {
      margin: 0;
      font-weight: 300;
      white-space: nowrap;
    }

    &__title {
      margin: 0;
      font-size: 3rem;
      font-weight: 400;
      line-height: 1;
    }

    &__desc {
      display: -webkit-box;
      overflow: hidden;
      max-height: 10.5rem;
      margin: 1rem 0;
      -webkit-box-orient: vertical;
      font-size: 1.25rem;
      font-weight: 300;
      -webkit-line-clamp: 6;
      text-overflow: ellipsis;
    }

    &__cta {
      font-weight: 700;
    }

    &__buttons {
      display: flex;
      justify-content: space-between;
      margin: 0 -1rem -1rem;
    }

    &__buttons > .icon-button {
      width: 50%;
      height: 2.75rem;

      > img {
        max-width: 1.25rem;
      }
    }

    &__more-info {
      display: none;
      &-icon {
        width: 1.5rem;
        height: 1rem;
        margin-right: 0.5rem;
      }
    }
  }

  &__closing-gauge {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 3rem;
    background-color: var(--color-light-background);
  }
}

.closing-gauge {
  &__left {
    position: relative;
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0.25rem 0 0;
    background-color: var(--color-dark-background);
    color: var(--color-white);
    font-weight: 300;
    text-transform: uppercase;

    &:after {
      position: absolute;
      right: -0.5rem;
      display: block;
      width: 0;
      height: 0;
      border-top: 0.25rem solid transparent;
      border-bottom: 0.25rem solid transparent;
      border-left: 0.5rem solid var(--color-dark-background);
      content: ' ';
    }
  }

  &__right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0 0 0.75rem;
  }

  &__number {
    color: var(--color-dark-gray);
    font-size: 1.5rem;
    font-weight: 400;
  }

  &__desc {
    color: var(--color-dark-gray);
    font-size: 1.5rem;
    font-weight: 300;
  }
}

// Responsive styles
@media all and (min-width: 768px) {
  .hero {
    max-height: 38rem;

    &__background {
      left: 0;
      width: 110vw;
      height: auto;
    }

    .featured-card {
      &__glass-background {
        background:
          center no-repeat
            linear-gradient(var(--color-dark-background), var(--color-dark-background)),
          7vw -6.5rem/115vw auto no-repeat url(../assets/img/pope-francis.png);
      }

      &__content {
        padding: 2rem 1.5rem;
      }

      &__more-info {
        display: inline-block;
        margin: 0;
        font-weight: 300;

        a {
          display: flex;
          align-items: flex-end;
        }
      }

      &__buttons {
        margin: 0 -1.5rem -2rem;
      }
    }
  }
}

@media all and (min-width: 1100px) {
  .hero {
    min-height: 700px;

    &__background {
      top: -2.5rem;
      left: 0;
      width: 100vw;
      height: auto;
    }

    &__featured-card {
      left: 0;
      width: 50%;
      min-width: 600px;
      max-height: unset;
      margin-top: 2.5rem;
    }

    .featured-card {
      &__glass-background {
        background:
          center no-repeat
            linear-gradient(var(--color-dark-background), var(--color-dark-background)),
          calc(-50vw + 650px) -6rem/105vw auto no-repeat url(../assets/img/pope-francis.png);
      }

      &__content {
        padding: 2rem 1.5rem;
      }

      &__desc {
        max-width: 85%;
        margin: 2rem 0 1rem;
      }

      &__cta {
        margin: 1rem 0 2rem;
        font-size: 1.5rem;
      }

      &__buttons {
        margin: 0 -1.5rem -2rem;

        > .icon-button {
          height: auto;
          > img {
            max-width: 2rem;
            height: 2rem;
            margin: 1.3rem 0;
          }
        }
      }
    }
  }

  .closing-gauge {
    &__left {
      padding-right: 1rem;

      :after {
        border-top-width: 0.33rem;
        border-bottom-width: 0.33rem;
      }
    }

    &__right {
      padding-left: 1rem;
    }

    &__title {
      font-size: 1.25rem;
    }
    &__number,
    &__desc {
      font-size: 2rem;
    }
  }
}
</style>

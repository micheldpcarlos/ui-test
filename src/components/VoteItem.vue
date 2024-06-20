<script setup>
import { computed, ref } from 'vue'
import { formatDistanceToNowStrict } from 'date-fns'
import { useDataStore } from '@/stores/data'

import ThumbsUpIcon from '../assets/img/thumbs-up.svg?url'
import ThumbsDownIcon from '../assets/img/thumbs-down.svg?url'

const props = defineProps(['voteItem', 'mode'])

const likePercentage = computed(() => {
  const totalVotes = props.voteItem.votes.positive + props.voteItem.votes.negative
  return totalVotes === 0 ? 0 : ((props.voteItem.votes.positive / totalVotes) * 100).toFixed(1)
})

const dislikePercentage = computed(() => {
  const totalVotes = props.voteItem.votes.positive + props.voteItem.votes.negative
  return totalVotes === 0 ? 0 : ((props.voteItem.votes.negative / totalVotes) * 100).toFixed(1)
})

const lastUpdateText = computed(() => {
  const date = new Date(props.voteItem.lastUpdated)
  const timeAgo = formatDistanceToNowStrict(date, { addSuffix: true })
  return `${timeAgo} in ${props.voteItem.category.charAt(0).toUpperCase() + props.voteItem.category.slice(1)}`
})

const pictureUrl = computed(() => `${import.meta.env.BASE_URL}/pictures/${props.voteItem.picture}`)

const selectedVote = ref('')
const hasVoted = ref(false)
const { saveVote } = useDataStore()

const onVoteNow = () => {
  if (hasVoted.value) {
    hasVoted.value = false
  } else {
    saveVote(props.voteItem.id, selectedVote.value === 'like')
    hasVoted.value = true
    selectedVote.value = ''
  }
}
</script>

<template>
  <div class="vote-item" :class="{ 'list-mode': mode === 'list' }">
    <div v-if="likePercentage !== dislikePercentage" class="vote-item__indicator">
      <div
        class="vote-button indicator"
        :class="likePercentage > dislikePercentage ? 'like' : 'dislike'"
      >
        <img v-if="likePercentage > dislikePercentage" :src="ThumbsUpIcon" alt="thumbs up" />
        <img v-else :src="ThumbsDownIcon" alt="thumbs down" />
      </div>
    </div>
    <div class="vote-item__content">
      <div class="content__name">
        {{ voteItem.name }}
      </div>
      <div class="content__description">
        {{ voteItem.description }}
      </div>
      <div class="content__message">
        {{ hasVoted ? 'Thank you for your vote!' : lastUpdateText }}
      </div>
      <div class="content__actions">
        <button
          v-if="!hasVoted"
          @click="selectedVote = 'like'"
          class="icon-button vote-button like"
          :class="{ selected: selectedVote === 'like' }"
        >
          <img :src="ThumbsUpIcon" alt="thumbs up" />
        </button>
        <button
          v-if="!hasVoted"
          @click="selectedVote = 'dislike'"
          class="icon-button vote-button dislike"
          :class="{ selected: selectedVote === 'dislike' }"
        >
          <img :src="ThumbsDownIcon" alt="thumbs down" />
        </button>
        <button
          class="icon-button vote-button vote-now"
          :disabled="!selectedVote && !hasVoted"
          :class="{ selected: selectedVote !== '' }"
          @click="onVoteNow"
        >
          {{ hasVoted ? 'Vote Again' : 'Vote Now' }}
        </button>
      </div>
    </div>
    <div class="vote-item__percentage">
      <div class="vote-item__percentage--like" :style="{ width: likePercentage + '%' }">
        <img :src="ThumbsUpIcon" alt="thumbs up" />
        <span>{{ likePercentage }}%</span>
      </div>
      <div class="vote-item__percentage--dislike" :style="{ width: dislikePercentage + '%' }">
        <span>{{ dislikePercentage }}%</span>
        <img :src="ThumbsDownIcon" alt="thumbs down" />
      </div>
    </div>
    <img class="vote-item__picture" :src="pictureUrl" />
  </div>
</template>

<style lang="scss" scoped>
.vote-item {
  width: 300px;
  height: 300px;
  aspect-ratio: 1 / 1;
  flex: 0 0 auto;
  position: relative;

  &__picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: end;
    overflow: hidden;
    box-sizing: border-box;
    padding: 36px;

    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 80%);

    .content {
      &__name {
        font-size: 30px;
        line-height: 36px;
        color: var(--color-white);
        overflow: hidden;
        text-overflow: ellipsis;
        height: fit-content;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: 12px;
      }

      &__description {
        font-size: 15px;
        line-height: 18px;
        color: var(--color-white);
        overflow: hidden;
        text-overflow: ellipsis;
        height: fit-content;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        padding-left: 4px;
        margin-bottom: 12px;
      }

      &__message {
        font-size: 12px;
        line-height: 14.4px;
        font-weight: 700;
        color: var(--color-white);
        text-align: end;
        margin-bottom: 12px;
      }

      &__actions {
        display: flex;
        justify-content: end;
        margin-bottom: 12px;
        align-items: center;
      }
    }
  }

  &__percentage {
    position: absolute;
    display: flex;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 36px;
    z-index: 2;

    &--like,
    &--dislike {
      position: relative;
      display: flex;
      padding: 0 1rem;
      align-items: center;
      overflow: visible;
      gap: 1rem;
      font-size: 18px;
      line-height: 21.6px;
      color: var(--color-white);
    }

    &--dislike {
      justify-content: flex-end;
    }

    &--like::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(var(--color-green-positive), 0.6);
      z-index: -1;
    }

    &--dislike::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      background-color: rgba(var(--color-yellow-negative), 0.6);
      z-index: -1;
    }
  }

  &__indicator {
    position: absolute;
    top: 96px;
    left: 0;
    z-index: 4;
  }

  .vote-button {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;

    img {
      width: 16px;
      height: 16px;
    }

    &.like {
      background-color: rgba(var(--color-green-positive), 1);
    }

    &.dislike {
      background-color: rgba(var(--color-yellow-negative), 1);
    }

    &.selected {
      border: 2px solid var(--color-white);
    }
    &.indicator {
      pointer-events: none;
    }

    &.vote-now {
      height: 38px;
      width: auto;
      padding: 12px 20px;
      font-size: 15px;
      line-height: 18px;
      color: var(--color-white);
      margin-right: 0;
      background-color: var(--color-darker-background);
      border: 1px solid var(--color-white);
      cursor: pointer;

      &.selected {
        background-color: rgba(48, 48, 48, 0.6);
      }

      &:disabled {
        cursor: not-allowed;
      }
    }
  }
}

// Responsive styles
@media all and (min-width: 768px) {
  .vote-item {
    width: 100%;
    height: 100%;

    &__indicator {
      position: absolute;
      top: 43%;
      left: 0;
    }
  }
  // List mode styles
  .vote-item.list-mode {
    overflow: hidden;
    width: 100%;
    height: 142px;
    aspect-ratio: unset;
    position: relative;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      #888888 19.79%,
      #666666 50%,
      rgba(51, 51, 51, 0.6) 71.88%
    );

    .vote-item__indicator {
      top: 0;
    }

    .vote-item__content {
      flex-direction: row;
      background: linear-gradient(
        82deg,
        rgba(0, 0, 0, 0) 12%,
        #888888 24.79%,
        #666666 50%,
        rgba(51, 51, 51, 0.6) 89.88%
      );

      padding-top: 6px;
      padding-right: 12px;

      .content__name {
        position: absolute;
        top: 0;
        left: 20%;
      }

      .content__description {
        position: absolute;
        top: 48px;
        left: 20%;
        max-width: 40%;
      }

      .content__message {
        position: absolute;
        top: 6px;
        right: 12px;
      }
    }

    .vote-item__picture {
      width: 216px;
      height: 100%;
      margin-left: -27px;
    }
  }
}

@media all and (min-width: 1100px) {
  // List mode styles
  .vote-item.list-mode {
    height: 170px;

    .vote-item__picture {
      width: 295px;
      height: auto;
      position: absolute;
      left: 10px;
      top: -22px;
    }
  }
}
</style>

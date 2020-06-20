<template>
  <section>
    <h1>I'm a timer mofo</h1>
    <div class="base-timer">
      <svg
        class="base-timer__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g class="base-timer__circle">
          <circle
            class="base-timer__path-elapsed"
            cx="50"
            cy="50"
            r="46.5"
          />
          <path
            :stroke-dasharray="circleDasharray"
            class="base-timer__path-remaining"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          />
        </g>
      </svg>
      <span class="base-timer__label">
        {{ formattedTimeLeft }}
      </span>
    </div>
  </section>
</template>

<script>
const FULL_DASH_ARRAY = 283

const TIME_LIMIT = 20

export default {
  name: 'Timer',
  props: {
  },
  data () {
    return {
      timePassed: 0,
      timerInterval: null
    }
  },
  computed: {
    timeLeft () {
      return TIME_LIMIT - this.timePassed
    },
    formattedTimeLeft () {
      const timeLeft = this.timeLeft

      const minutes = Math.floor(timeLeft / 60)

      let seconds = timeLeft % 60

      if (seconds < 10) {
        seconds = `0${seconds}`
      }

      return `${minutes} : ${seconds}`
    },
    circleDasharray () {
      return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`
    },
    timeFraction () {
      const rawTimeFraction = this.timeLeft / TIME_LIMIT
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction)
    }
  },
  watch: {
    timeLeft (newValue) {
      if (newValue === 0) {
        this.clearTimer()
      }
    }
  },
  mounted () {
    this.startTimer()
  },
  methods: {
    startTimer () {
      this.timerInterval = setInterval(() => (
        this.timePassed += 1
      ), 1000)
    },
    clearTimer () {
      clearInterval(this.timerInterval)
    }
  }
}
</script>

<style scoped lang="scss">
/* Sets the containers height and width */
.base-timer {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  &__label {
    position: absolute;
    /* Size should match the parent container */
    width: 300px;
    height: 300px;
    /* Keep the label aligned to the top */
    top: 0;
    /* Create a flexible box that centers content vertically and horizontally */
    display: flex;
    align-items: center;
    justify-content: center;
    /* Sort of an arbitrary number; adjust to your liking */
    font-size: 48px;
  }
/* Removes SVG styling that would hide the time label */
  &__circle {
    fill: none;
    stroke: none;
  }
/* The SVG path that displays the timer's progress */
  &__path-elapsed {
    stroke-width: 7px;
    stroke:grey;
  }
  &__path-remaining {
    /* Just as thick as the original ring */
    stroke-width: 7px;
    /* Rounds the line endings to create a seamless circle */
    stroke-linecap: round;
    /* Makes sure the animation starts at the top of the circle */
    transform: rotate(90deg);
    transform-origin: center;
    /* One second aligns with the speed of the countdown timer */
    transition: 1s linear all;
    /* Allows the ring to change color when the color value updates */
    stroke: $color-primary-dark; // green
  }
  &__svg {
    /* Flips the svg and makes the animation to move left-to-right*/
    transform: scaleX(-1);
  }
}
</style>

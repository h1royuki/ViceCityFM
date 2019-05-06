<template>
  <div class="container">
    <div class="background"></div>
    <audio
      class="player"
      ref="player"
      loop="true"
      :src="stations ? playerUrl : null"
    />
    <audio
      class="player"
      ref="noise"
      loop="true"
      autoplay="true"
      src="./files/noise.ogg"
    />
    <img class="logo" :src="logoSrc" />
    <div class="radio-text">radio</div>
    <div class="radio-container">
      <div class="volume">
        <p class="name">volume</p>
        <div class="slider">
          <div class="slider-bg"></div>
          <div class="slider-volume" :style="{ width: volume + `%` }"></div>
          <input
            @change="changeVolume($event.target.value)"
            type="range"
            min="0"
            max="100"
            value="50"
            class="slider-input"
          />
        </div>
      </div>
      <div class="radio" v-if="stations">
        <div
          class="prev-station"
          @click="changeStation(getStation('prev', activeStation - 1))"
        >
          <p class="button">◀</p>
        </div>
        <div class="stations">
          <div class="stations-background"></div>
          <div class="prev">
            <img
              class="img"
              :src="stations[getStation('prev', activeStation - 1)].logo.url"
            />
          </div>
          <div class="active" @click="togglePlaying">
            <img class="img" :src="stations[activeStation].logo.url" />
          </div>
          <div class="next">
            <img
              class="img"
              :src="stations[getStation('next', activeStation + 1)].logo.url"
            />
          </div>
        </div>
        <div
          class="next-station"
          @click="changeStation(getStation('next', activeStation + 1))"
        >
          <p class="button">▶</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import "./Index.scss";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      logoSrc: "./images/logo.png",
      stations: null,
      activeStation: 4,
      volume: 100,
      paused: false
    };
  },

  methods: {
    changeStation(index) {
      this.noise.play();
      this.activeStation = index;
    },

    togglePlaying() {
      this.paused = !this.paused;

      if (this.paused) {
        this.player.play();
      } else {
        this.player.pause();
      }
    },

    startPlaying() {
      const duration = this.player.duration;
      const startTime = Math.floor(Math.random() * duration);
      this.player.currentTime = startTime;
      setTimeout(() => {
        this.noise.pause();
        this.player.play();
      }, 1000);
    },

    getStation(way, index) {
      if (!this.stations[index]) {
        if (way === "next") {
          index = index - Object.keys(this.stations).length;
        } else {
          index = Object.keys(this.stations).length + index;
        }
      }
      return index;
    },

    changeVolume(value) {
      this.volume = value;
      const volume = value / 100;
      this.player.volume = volume;
      this.noise.volume = volume;
    }
  },

  mounted() {
    this.noise.play();
    this.player.addEventListener("loadedmetadata", () => this.startPlaying());
  },

  computed: {
    player() {
      return this.$refs.player;
    },

    noise() {
      return this.$refs.noise;
    },

    playerUrl() {
      return this.stations[this.activeStation].file.url;
    }
  },

  apollo: {
    stations: gql`
      {
        stations {
          name
          file {
            url
          }
          logo {
            url
          }
        }
      }
    `
  }
};
</script>

<template>
  <div class="container">
    <div class="background" :style="{ clipPath: `polygon(${background})` }"></div>
    <audio class="player" ref="player" loop="true" :src="stations ? playerUrl : null"/>
    <audio class="player" ref="noise" loop="true" src="./files/noise.ogg"/>
    <img class="logo" :src="logoSrc">
    <div class="radio-text">radio</div>
    <div class="radio-container">
      <div class="volume">
        <p class="name">volume</p>
        <div class="slider">
          <div class="slider-bg"></div>
          <div class="slider-volume" :style="{ width: volume + `%` }"></div>
          <input v-model="volume" type="range" min="0" max="100" value="50" class="slider-input">
        </div>
      </div>
      <div class="radio" v-if="stations">
        <div class="prev-station" @click="prevStation()">
          <p class="button">◀</p>
        </div>
        <div class="stations">
          <div class="stations-background"></div>
          <transition-group name="flip-list" tag="div" class="stations-animation">
            <div v-for="(station, index) in stations" :key="station.name">
              <div v-if="index === activeStation - 1" class="prev">
                <img class="img" :src="station.logo.url">
              </div>
              <div v-else-if="index === activeStation" class="active" @click="togglePlaying">
                <div class="playing-overlay">
                  <div v-if="paused" class="paused-icon">▶</div>
                  <div v-else class="played-icon">▮▮</div>
                </div>
                <img class="img" :src="stations[activeStation].logo.url">
              </div>
              <div v-else-if="index === activeStation + 1" class="next">
                <img class="img" :src="station.logo.url">
              </div>
              <div
                v-else-if="index === activeStation + 2 || index === activeStation - 2"
                class="hidden"
              >
                <img class="img" :src="station.logo.url">
              </div>
            </div>
          </transition-group>
        </div>
        <div class="next-station" @click="nextStation()">
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
      background: `8% 10%, 90% 13%, 87% 90%, 12% 95%`,
      stations: null,
      activeStation: 4,
      volume: 100,
      paused: false
    };
  },

  methods: {
    nextStation() {
      const firstElement = this.stations.shift();
      this.stations.push(firstElement);
      this.noise.play();
      this.paused = false;
    },

    prevStation() {
      const lastElement = this.stations.pop();
      this.stations.unshift(lastElement);
      this.noise.play();
      this.paused = false;
    },

    togglePlaying() {
      if (this.paused) {
        this.player.play();
      } else {
        this.player.pause();
      }
      this.paused = !this.paused;
    },

    startPlaying() {
      const duration = this.player.duration;
      const startTime = Math.floor(Math.random() * duration);
      this.player.currentTime = startTime;

      setTimeout(() => {
        this.changeBackground();
        this.noise.pause();
        this.player.play();
        this.paused = false;
      }, 1000);
    },

    changeBackground() {
      // topLeft, topRight, bottomRight, bottomLeft
      this.background = `
      ${this.getRandomInt(5, 15)}% ${this.getRandomInt(5, 15)}%,
      ${this.getRandomInt(85, 95)}% ${this.getRandomInt(5, 15)}%,
      ${this.getRandomInt(85, 95)}% ${this.getRandomInt(85, 95)}%, 
      ${this.getRandomInt(1, 15)}% ${this.getRandomInt(85, 95)}%`;
    },

    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    changeVolumeByScrollEvent(delta) {
      // scroll down
      if (delta > 0) {
        // is need change
        if (this.volume !== 0) {
          if (this.volume - 5 > 0) {
            this.volume = this.volume - 5;
          } else {
            this.volume = 0;
          }
        }
      } else {
        if (this.volume !== 100) {
          if (this.volume + 5 < 100) {
            this.volume = this.volume + 5;
          } else {
            this.volume = 100;
          }
        }
      }
    }
  },

  watch: {
    volume: function(value) {
      this.volume = value;
      const volume = value / 100;
      this.player.volume = volume;
      this.noise.volume = volume;
    }
  },

  mounted() {
    this.noise.play();

    window.addEventListener("wheel", event =>
      this.changeVolumeByScrollEvent(event.deltaY)
    );

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

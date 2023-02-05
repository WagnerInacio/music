new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: !1,
      tracks: [
        {
          name: "01 - After Dark",
          artist: "MrKitty",
          cover: "img/1.jpg",
          source: "mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=m9QU69958JU",
          favorited: !0,
        },
        {
          name: "02 - Fluorescent Adolescent",
          artist: "Arctic Monkeys",
          cover: "img/2.jpg",
          source: "mp3/2.mp3",
          url: "https://www.youtube.com/watch?v=ma9I9VBKPiw",
          favorited: !1,
        },
        {
          name: "03 - Like a Stone",
          artist: "Audioslave",
          cover: "img/3.jpg",
          source: "mp3/3.mp3",
          url: "https://www.youtube.com/watch?v=7QU1nvuxaMA",
          favorited: !1,
        },
        {
          name: "04 - Butterflies",
          artist: "Sia",
          cover: "img/4.jpg",
          source: "mp3/4.mp3",
          url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
          favorited: !1,
        },
        {
          name: "05 - The Hunger In Your Haunt",
          artist: "Crywolf",
          cover: "img/5.jpg",
          source: "mp3/5.mp3",
          url: "https://www.youtube.com/watch?v=b_2H59OEIKU",
          favorited: !1,
        },
        {
          name: "06 - Chlorine",
          artist: "Twenty one pilots",
          cover: "img/6.jpg",
          source: "mp3/6.mp3",
          url: "https://www.youtube.com/watch?v=eJnQBXmZ7Ek",
          favorited: !0,
        },
        {
          name: "07 - Do I Wanna Know",
          artist: "Arctic Monkeys",
          cover: "img/7.jpg",
          source: "mp3/7.mp3",
          url: "https://www.youtube.com/watch?v=bpOSxM0rNPM",
          favorited: !1,
        },
        {
          name: "08 - The Funeral",
          artist: "Band Of Horses",
          cover: "img/8.jpg",
          source: "mp3/8.mp3",
          url: "https://www.youtube.com/watch?v=cMFWFhTFohk",
          favorited: !1,
        },
        {
          name: "09 - Rag'n'Bone Man",
          artist: "Human",
          cover: "img/9.jpg",
          source: "mp3/9.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: !1,
        },
        {
          name: "10 - Close eyes",
          artist: "DVRST",
          cover: "img/10.jpg",
          source: "mp3/10.mp3",
          url: "https://www.youtube.com/watch?v=ao4RCon11eY",
          favorited: !1,
        },
        {
          name: "11 - Pumped up kicks",
          artist: "Foster The People",
          cover: "img/11.jpg",
          source: "mp3/11.mp3",
          url: "https://www.youtube.com/watch?v=SDTZ7iX4vTQ",
          favorited: !1,
        },
        {
          name: "12 - Hear Me Now",
          artist: "Alok_ Bruno Martini feat. Zeeba",
          cover: "img/12.jpg",
          source: "mp3/12.mp3",
          url: "https://www.youtube.com/watch?v=JVpTp8IHdEg",
          favorited: !1,
        },
        {
          name: "13 - House of the Rising Sun",
          artist: "Animals",
          cover: "img/13.jpg",
          source: "mp3/13.mp3",
          url: "https://www.youtube.com/watch?v=4-43lLKaqBQ",
          favorited: !1,
        },
        {
          name: "14 - High Enough",
          artist: "KFlay",
          cover: "img/14.jpg",
          source: "mp3/14.mp3",
          url: "https://www.youtube.com/watch?v=j04JKdcXjkU",
          favorited: !0,
        },
        {
          name: "15 - Space Song",
          artist: "Beach House",
          cover: "img/15.jpg",
          source: "mp3/15.mp3",
          url: "https://www.youtube.com/watch?v=RBtlPT23PTM",
          favorited: !0,
        },
        {
          name: "16 - Murder in my mind",
          artist: "Kordhell",
          cover: "img/16.jpg",
          source: "mp3/16.mp3",
          url: "https://www.youtube.com/watch?v=w-sQRS-Lc9k",
          favorited: !1,
        },
        {
          name: "17 - Ghost",
          artist: "Kiixshi (Phonk.me)",
          cover: "img/17.jpg",
          source: "mp3/17.mp3",
          url: "https://www.youtube.com/watch?v=bCQqPUuxyKY",
          favorited: !1,
        },
        {
          name: "18 - Worth nothing",
          artist: "Twisted (ft. Oliver Tree)",
          cover: "img/18.jpg",
          source: "mp3/18.mp3",
          url: "https://www.youtube.com/watch?v=neOQ8s60sHU",
          favorited: !1,
        },
        {
          name: "19 - Sahara",
          artist: "Hensonn",
          cover: "img/19.jpg",
          source: "mp3/19.mp3",
          url: "https://www.youtube.com/watch?v=pIZ0QRWK0zg",
          favorited: !1,
        },
        {
          name: "20 - Suicide yr",
          artist: "Trap Bright",
          cover: "img/20.jpg",
          source: "mp3/20.mp3",
          url: "https://www.youtube.com/watch?v=GxWA0oJcRC8",
          favorited: !1,
        },
        {
          name: "21 - Blue bird",
          artist: "Ikimono-Gakari",
          cover: "img/21.jpg",
          source: "mp3/21.mp3",
          url: "https://www.youtube.com/watch?v=KpsJWFuVTdI",
          favorited: !0,
        },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null,
    };
  },
  methods: {
    play() {
      this.audio.paused
        ? (this.audio.play(), (this.isTimerPlaying = !0))
        : (this.audio.pause(), (this.isTimerPlaying = !1));
    },
    generateTime() {
      let a = (100 / this.audio.duration) * this.audio.currentTime;
      (this.barWidth = a + "%"), (this.circleLeft = a + "%");
      let b = Math.floor(this.audio.duration / 60),
        c = Math.floor(this.audio.duration - 60 * b),
        d = Math.floor(this.audio.currentTime / 60),
        e = Math.floor(this.audio.currentTime - 60 * d);
      10 > b && (b = "0" + b),
        10 > c && (c = "0" + c),
        10 > d && (d = "0" + d),
        10 > e && (e = "0" + e),
        (this.duration = b + ":" + c),
        (this.currentTime = d + ":" + e);
    },
    updateBar(a) {
      let b = this.$refs.progress,
        c = this.audio.duration,
        d = a - b.offsetLeft,
        e = (100 * d) / b.offsetWidth;
      100 < e && (e = 100),
        0 > e && (e = 0),
        (this.barWidth = e + "%"),
        (this.circleLeft = e + "%"),
        (this.audio.currentTime = (c * e) / 100),
        this.audio.play();
    },
    clickProgress(a) {
      (this.isTimerPlaying = !0), this.audio.pause(), this.updateBar(a.pageX);
    },
    prevTrack() {
      (this.transitionName = "scale-in"),
        (this.isShowCover = !1),
        0 < this.currentTrackIndex
          ? this.currentTrackIndex--
          : (this.currentTrackIndex = this.tracks.length - 1),
        (this.currentTrack = this.tracks[this.currentTrackIndex]),
        this.resetPlayer();
    },
    nextTrack() {
      (this.transitionName = "scale-out"),
        (this.isShowCover = !1),
        this.currentTrackIndex < this.tracks.length - 1
          ? this.currentTrackIndex++
          : (this.currentTrackIndex = 0),
        (this.currentTrack = this.tracks[this.currentTrackIndex]),
        this.resetPlayer();
    },
    resetPlayer() {
      (this.barWidth = 0),
        (this.circleLeft = 0),
        (this.audio.currentTime = 0),
        (this.audio.src = this.currentTrack.source),
        setTimeout(() => {
          this.isTimerPlaying ? this.audio.play() : this.audio.pause();
        }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited =
        !this.tracks[this.currentTrackIndex].favorited;
    },
  },
  created() {
    let a = this;
    (this.currentTrack = this.tracks[0]),
      (this.audio = new Audio()),
      (this.audio.src = this.currentTrack.source),
      (this.audio.ontimeupdate = function () {
        a.generateTime();
      }),
      (this.audio.onloadedmetadata = function () {
        a.generateTime();
      }),
      (this.audio.onended = function () {
        a.nextTrack(), (this.isTimerPlaying = !0);
      });
    for (let a = 0; a < this.tracks.length; a++) {
      const b = this.tracks[a];
      let c = document.createElement("link");
      (c.rel = "prefetch"),
        (c.href = b.cover),
        (c.as = "image"),
        document.head.appendChild(c);
    }
  },
});

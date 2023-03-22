interface Music {
  trackName: string;
  playPeriod: number;

  play(): void;
}

let iWantItThatWay: Music;
iWantItThatWay = {
  trackName: 'I want it that way',
  playPeriod: 3.24,
  play() {
    console.log(`Playing ${this.trackName}`);
  },
};

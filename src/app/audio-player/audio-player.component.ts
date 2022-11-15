import { Component, OnInit } from '@angular/core';
import { Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AudioService } from "../services/audio.service";
import { CloudService } from "../services/cloud.service";
import { StreamState } from "../interfaces/stream-state";

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  providers: [ { provide: "Window", useValue: window} ]
})

export class AudioPlayerComponent implements OnInit {
  files: Array<any> = [];
  state: StreamState;
  currentFile: any = {};
  
  constructor(
    @Inject("Window") private window: Window,
    public audioService: AudioService,
    public cloudService: CloudService
    ) {
      // get media files
      cloudService.getFiles().subscribe(files => {
        this.files = files;
      });

      // listen to stream state
      this.audioService.getState().subscribe(state => {
        this.state = state;
      });
    }

  ngOnInit(): void {
  }

  playStream(url:any) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  openFile(file:any, index:number) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  pause() {
    this.audioService.pause();
  }
  
  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  onSliderChangeEnd(change: any) {
    this.audioService.seekTo(change.value);
  }

}

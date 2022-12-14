import { Injectable } from '@angular/core';
import { of } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CloudService {

  constructor() { }

  files: any = [
      {
        name: "Hours in Silence",
        url: "../../assets/musics/Hours-In-Silence.mp3",
        artist: "Drake",
        cover: "../../assets/images/Hours-In-Silence.png"
    },
    {
        name: "Marvins Room",
        url: "../../assets/musics/Marvins-Room.mp3",
        artist: "Drake",
        cover: "../../assets/images/Marvins-Room.png"
    },
    {
        name: "I Don't Wanna Do This Anymore",
        url: "../../assets/musics/I-Dont-Wanna-Do-This-Anymore.mp3",
        artist: 'XXXTentacion',
        cover: "../../assets/images/I-Dont-Wanna-Do-This-Anymore.png"
    },
    {
        name: "Star Shopping",
        url: "../../assets/musics/Star-Shopping.mp3",
        artist: "Lil Peep",
        cover: "../../assets/images/Star-Shopping.png"
    },
    {
        name: "Crybaby",
        url: "../../assets/musics/Crybaby.mp3",
        artist: "Lil Peep",
        cover: "../../assets/images/Crybaby.png"
    },
    {
      name: "Edge of Seventeen",
      url: "../../assets/musics/Edge-Of-17.mp3",
      artist: "Stevie Nicks",
      cover: "../../assets/images/stevie.png"
    }
  ];

  getFiles() {
    return of(this.files);
  }
}

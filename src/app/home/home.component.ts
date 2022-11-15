import { Component, OnInit, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: "Window", useValue: window }
  ]
})

export class HomeComponent implements OnInit {

  constructor(
    @Inject("Window") private window: Window
    ) { }

  @HostListener('window:click')
  onClick() {
    console.log("clicked");
    let grass = this.window.document.querySelector(".grass") as HTMLElement;
    grass.style.animation = "slide-down 3000ms forwards ease";
    let title = this.window.document.querySelector(".title h1") as HTMLElement;
    title.style.animation = "fade-out-title 1s forwards ease-out";
    let hand = this.window.document.querySelector(".touch-icon") as HTMLElement;
    hand.classList.add("animate-end");
    let spotify = this.window.document.querySelector(".spotify") as HTMLElement;
    spotify?.classList.add("bring-spotify-in");
    let nav = this.window.document.querySelector(".navbar") as HTMLElement;
    nav.classList.add("bring-navbar-in");
    //newDiv.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/4MTh1JiOhgK2BQQjKI5RyI?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';

  }

  ngOnInit(): void {
  }

}

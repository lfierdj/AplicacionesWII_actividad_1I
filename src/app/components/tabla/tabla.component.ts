import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [FormsModule, RouterLink] ,
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  min = 0
  max = 200
  
  juegos = [
  {
    id:"1",
    nombre:"Call of Duty",
    precio:90,
    url:"",
    categoria:"Disparos"
  },
  {
    id:"2",
    nombre:"Free Fire",
    precio:50,
    url:"",
    categoria:"Accion"
  },
  {
    id:"3",
    nombre:"Fortnite",
    precio:90,
    url:"",
    categoria:"battleRoyal"
  },
  {
    id:"4",
    nombre:"Minecraft",
    precio:20,
    url:"",
    categoria:"construccion"
  },
  {
    id:"5",
    nombre:"Legend of Zelda",
    precio:120,
    url:"",
    categoria:"aventura"
  },
  {
    id:"6",
    nombre:"Valorant",
    precio:70,
    url:"",
    categoria:"Tactico"
  },
  {
    id:"7",
    nombre:"Super Mario",
    precio:150,
    url:"",
    categoria:"aventura"
  },
  {
    id:"8",
    nombre:"League of Legends",
    precio:110,
    url:"https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2022/8/1/ksfga6rlx2ugfhjd9vnk/league-of-legends",
    categoria:"moba"
  },
  {
    id:"9",
    nombre:"Rocket League",
    precio:80,
    url:"",
    categoria:"accion"
  },
  {
    id:"10",
    nombre:"Hades",
    precio:125,
    url:"",
    categoria:"roguelike"
  }
]
visualizar: any
  ver( id: any){
    this.visualizar = id
  }
}

import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  ruta = inject(ActivatedRoute);
  juegos = [
    {
      id:"1",
      nombre:"Call of Duty",
      precio:90,
      url:"https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/wzm/WZM-GLOBALRELEASE-TOUT.jpg",
      categoria:"disparos"
    },
    {
      id:"2",
      nombre:"Free Fire",
      precio:50,
      url:"https://e.rpp-noticias.io/xlarge/2020/05/23/085408_946319.jpg",
      categoria:"accion"
    },
    {
      id:"3",
      nombre:"Fortnite",
      precio:90,
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBhxMkuEPYQpwBj7Zv1pIJuTccwCNZA93Ne5uygUUHQA&s",
      categoria:"battleRoyal"
    },
    {
      id:"4",
      nombre:"Minecraft",
      precio:20,
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpR81d6yKOU2_8PsATsc9ipNStbvwtB1s8o27ux1PsQ&s",
      categoria:"construccion"
    },
    {
      id:"5",
      nombre:"Legend of Zelda",
      precio:120,
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1K1EJW8g0ZBtcuuVcxGDlPugXKGs4ZKSrRVsMdhDzg&s",
      categoria:"aventura"
    },
    {
      id:"6",
      nombre:"Valorant",
      precio:70,
      url:"https://i.blogs.es/3f15c2/valorant/1366_2000.jpg",
      categoria:"tactico"
    },
    {
      id:"7",
      nombre:"Super Mario",
      precio:150,
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnptiK1fm9-n2B-YVSEpS4qT8KyTqsda405rcOYWl9A&s",
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
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwiXFdXZMp2v5RmGg6n9mzoJSVhhLFAYKXTx64gROHWQ&s",
      categoria:"accion"
    },
    {
      id:"10",
      nombre:"Hades",
      precio:125,
      url:"https://cdn1.epicgames.com/min/offer/2560x1440-2560x1440-5e710b93049cbd2125cf0261dcfbf943.jpg",
      categoria:"roguelike"
    }
  ]
  visualizar: any
    ver( id: any){
      this.visualizar = id
    }
    juego: any;
    id: any;
  
  ngOnInit() {
    this.ruta.params.subscribe(p => {
      console.log(p['idJuegos']);
      this.id = p['idJuegos'];

      this.juego = this.juegos.find(element => element.id === this.id);
      console.log(this.juego);
    });
  }
  
  mensaje() {
    alert("juegos");
  }
}

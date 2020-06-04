import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  columns:number = 90;
  rows:number = 50;

  count:number = 0;
  
  title = 'juego-de-la-vida';

  juego_vida:any[][];

  constructor() {
    this.juego_vida = [];
    for (let i = 0; i < this.rows; i++) {
      this.juego_vida[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.juego_vida[i][j] = 0;
      }   
    }

    this.juego_vida[1][1] = 1;
    this.juego_vida[1][2] = 1;
    this.juego_vida[1][3] = 1;
    this.juego_vida[1][4] = 1;
    this.juego_vida[1][5] = 1;
    this.juego_vida[1][6] = 1;
    this.juego_vida[1][7] = 1;

  }

  ngOnInit() {
    console.log("start",this.juego_vida);
    setInterval(() => {
      this.game();
    }, 1000);
    //setInterval(() => {this.gameStart()},1000);
  }

  game() {
    for(let i = 0; i < this.rows; i++) {
      for(let j = 0; j < this.columns; j++) {

        let iy = i;
        let jx = j;

        let im = iy-1>0 ? iy-1 : 0;
        let jm = jx-1>0 ? jx-1 : 0;

        let numVecinos =  this.juego_vida[(im)%this.rows][(jm)%this.columns] + 
                          this.juego_vida[(i)%this.rows][(jm)%this.columns] + 
                          this.juego_vida[(iy+1)%this.rows][(jm)%this.columns] + 

                          this.juego_vida[(im)%this.rows][(j)%this.columns] + 
                          this.juego_vida[(iy+1)%this.rows][(jm)%this.columns] + 

                          this.juego_vida[(im)%this.rows][(jx+1)%this.columns] + 
                          this.juego_vida[(i)%this.rows][(jx+1)%this.columns] + 

                          this.juego_vida[(iy+1)%this.rows][(jx+1)%this.columns];
        
        if ( this.juego_vida[i][j] == 0 && numVecinos == 3)
          this.juego_vida[i][j] = 1;
        else if ( this.juego_vida[i][j] == 1 && (numVecinos < 2 || numVecinos > 3))
          this.juego_vida[i][j] = 0;
      }
    }
    console.log("iteración", this.juego_vida);
  }


  
}

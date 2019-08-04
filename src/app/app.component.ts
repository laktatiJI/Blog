import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  lastUpdate = new Date();
  postes = [
    {
        id: 1,
        titre: 'Mon premier poste',
      contenu: 'bienvenue dans mon premier poste',
 
    },
    
  ];

  nbClic: number = 0;
  nbClic2: number = 0;
nblove() 
  {
      this.nbClic = this.nbClic + 1;
    }
    nbdislike() 
  {
      this.nbClic2 = this.nbClic2 - 1;
    }
    getcol() 
  {
    if(this.nbClic > 0 ) {
      return 'green';
    } 
        }
    getcol2() 
    {
 if(this.nbClic2 < 0) 
      {
        return 'red';
      }
      }  
  constructor () {}
  ngOnInit ( ) {}
}

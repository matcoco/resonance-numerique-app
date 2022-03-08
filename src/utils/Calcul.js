export default class Numerologie{
    constructor(prenom, date){
      this.prenom = prenom;
      this.date = date;
      this.sousNombre = [];
      this.datas = null;
      this.start();

      return this.datas
    }
    
  
    reduceNumber(nombre) {
      let tempo = null;
      tempo = nombre.split("").reduce((accumulateur, valeurActuelle) => Number(accumulateur) + Number(valeurActuelle));
       if (tempo.toString().split("").length >= 2) {
         if(tempo === 11 || tempo === 22 || tempo === 33){  
           return tempo;
           }
        tempo = this.reduceNumber(tempo.toString());
      }
      return tempo;
    }
    
    calculCheminDeVie(){
      let date = this.date.split('/').join("");
      let resultat = this.reduceNumber(date);
      this.sousNombre.push(resultat);
    }
    
    start(){
      let date2 = this.date.split('/');
      for(let i = 0; i < date2.length; i++){
        let result = this.reduceNumber(date2[i]);
        this.sousNombre.push(result);
      }
      this.calculCheminDeVie();

      this.datas = {
          prenom : this.prenom,
          lune : this.sousNombre[0],
          soleil : this.sousNombre[1],
          terre : this.sousNombre[2],
          cheminDeVie : this.sousNombre[3],
          date: this.date
      }
    }
  }
  
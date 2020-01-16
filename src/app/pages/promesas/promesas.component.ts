import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-promesas',
    templateUrl: './promesas.component.html',
    styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

    constructor() {
        this.counterHandler().then( message => console.log('Terminooooo', message))
        .catch( error => console.error('Error del catch', error))
    }

    ngOnInit() {
    }
    
    counterHandler() {
        let promise = new Promise( (resolve, reject) => {

            let contador = 0;
            
            let interval = setInterval(() => {
                contador += 1
                console.log('Contador', contador)
                if(contador === 3) {
                    resolve('OKK!!');
                    clearInterval(interval)
                }
            }, 1000)
        })
        return promise;
    }
}
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

    constructor() {
        let obs = new Observable((observer) => {

            let contator = 0;

            let intervalo = setInterval(() => {
                contator += 1
                observer.next( contator );
                //console.log('Contador Observable', contator)

                if(contator === 3) {
                    clearInterval(intervalo)
                    observer.complete();
                }

                if(contator === 2) {
                    clearInterval(intervalo)
                    observer.error('Help!!')
                }
            }, 1000)
        });
    
       /*  obs.pipe(
            retry
        ) */


        // El subscribes recive 3 callbacks
        obs.subscribe( 
            number => console.log('Subscription', number),    // next()
            error => console.error('Error en el obs', error), // error
            () => console.log('El observer ya termino')       // complete()
        );

    }

    ngOnInit() {
    }

}

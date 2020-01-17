import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { retry, map, filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styles: []
})
export class BreadcrumbsComponent implements OnInit {

    title: string;

    constructor(private router: Router) {
        
        this.getDataRoute().subscribe((data) => {
            this.title = data.title;
        })
    }

    ngOnInit() {
    }

    getDataRoute() {
        return this.router.events
        .pipe(
            filter(event => event instanceof ActivationEnd),
            filter((event: ActivationEnd) => event.snapshot.firstChild === null ),
            map((resp: ActivationEnd) => resp.snapshot.data)
        )
    }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute,ActivatedRouteSnapshot , ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styles: [
  ]
})
export class BreadCrumbsComponent implements OnDestroy {
  public title!: string
  public titleSubs$ : Subscription
    constructor(private router: Router, route: ActivatedRoute) {
      console.log(route.snapshot.data)
     this.titleSubs$ = this.getDataRoutes()
                            .subscribe( ({title}) =>  {
                              this.title = title;
                              document.title = `Lol  - ${this.title}`
                          });
     }
    ngOnDestroy(): void {
      this.titleSubs$.unsubscribe()
    }
    getDataRoutes(){
      return this.router.events
     .pipe(
       filter( (event:any) => event instanceof ActivationEnd),
       filter( (event: ActivationEnd)=> event.snapshot.firstChild === null  ),
       map( (event: ActivationEnd)=> event.snapshot.data  ),
     )
   
    }

}

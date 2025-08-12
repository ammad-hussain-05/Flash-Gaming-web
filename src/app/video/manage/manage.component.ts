import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';



@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  videoOrder = '1';

  constructor(private route: ActivatedRoute,
    private router : Router
  ) {
   }

  ngOnInit(): void {
    // this.route.data.subscribe(console.log)
    this.route.queryParams.subscribe((params: Params)=>{
           this.videoOrder = params['sort'] === '2' ? params['sort'] : 1;
    })
  }


  sort(event: Event){
    const { value } = (event.target as HTMLSelectElement);
    this.router.navigateByUrl(`/manage?sort=${value}`);

  }

}

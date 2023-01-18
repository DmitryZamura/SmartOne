import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.sass']
})
export class SideBarMenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router) {
  }
  ngOnInit() {
    this.items = [
      {
        label: 'All Products',
        icon: 'pi pi-pw pi-list',
        command: ()=>{
          this.navigate('/')
        }
      },
      {
        label: 'Favorites',
        icon: 'pi pi-pw pi-star',
        command: ()=>{
          this.navigate('/selected-products/')
        }

      }
    ]
  }

  navigate(path: string) {
this.router.navigate([path]);
  }
}

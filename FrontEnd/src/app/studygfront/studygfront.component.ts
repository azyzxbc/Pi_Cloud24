import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudygService } from '../Services/studyg.service';
import swal, {SweetAlertOptions} from 'sweetalert2';
@Component({
  selector: 'app-studygfront',
  templateUrl: './studygfront.component.html',
  styleUrls: ['./studygfront.component.css']
})
export class StudygfrontComponent implements OnInit {
  topic:any;
  showAdd:any;


  constructor(
    private service : StudygService,
    private router : Router,
    private toastr: ToastrService  ) { }
    fournisseurs:any={}
  textBus = '';

  ngOnInit(): void {


  this.showAdd=false;

    this.service.getSession().subscribe(
      data => this.fournisseurs=data
    )

  }
  deleteSession(id:any){
    this.service.deleteSession(id).subscribe(
      res=>{this.fournisseurs},
      error => console.log(error)
      )
      }

  delete(i:any){
    this.fournisseurs.splice(i,1)
  }

  modify(id:any){
    this.router.navigate(['updatesg',id])
  }


    Search(){
        if (this.topic ==''){
          this.ngOnInit();

        }else {
          this.fournisseurs =this.fournisseurs.filter ((res: { topic: string; }) => {
            return res.topic.toLocaleLowerCase().match(this.topic.toLocaleLowerCase());
          })
        }

       }



       function(){
        let btn:any = document.querySelector("#btn");
        let sidebar:any = document.querySelector(".sidebar");
        let searchBtn = document.querySelector(".bx-search");


        sidebar.classList.toggle("active");
        if(btn.classList.contains("bx-menu")) {
            btn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else {
            btn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
      }
  incrementNbp(id: number) {
    this.service.incrementNbpIfUnderFive(id).subscribe(
      (data) => {
        // Handle the response if needed
        console.log('Incremented nbp successfully', data);
        swal({ // Display a SweetAlert2 popup
          title: 'Yes!',
          text: 'Incremented successfully',
          icon: 'success', // Add the icon property
        } as SweetAlertOptions); // Explicitly define the type
      },
      (error) => { // Handle error if necessary
        console.error('Error while incrementing nbp', error);
        swal({ // Display a SweetAlert2 popup
          title: 'Oops...',
          text: 'Not enough places.',
          icon: 'error', // Add the icon property
        } as SweetAlertOptions); // Explicitly define the type
      }
    );
  }


  showAddButton():void{
    this.showAdd=true;
  }

}






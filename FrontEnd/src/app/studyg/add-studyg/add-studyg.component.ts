import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudygService } from '../../Services/studyg.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-studyg',
  templateUrl: './add-studyg.component.html',
  styleUrls: ['./add-studyg.component.css']
})
export class AddStudygComponent implements OnInit{
  constructor(
    private service : StudygService,
    private router : Router,
    private datePipe: DatePipe,
    private toastr: ToastrService

  ) { }
  levels = ['premiere', 'deuxieme', 'troisieme'];

  fournisseur:any={dateSession: null,local_id_local: null }
  localNames: any;
  ngOnInit(): void {
    this.getLocalNames();
  }
  getLocalNames(): void {
    this.service.getLocal().subscribe(
      data => this.localNames=data

    );
  }
  onLocalSelect(event: Event): void {
    const localName = (event.target as HTMLSelectElement).value;
    this.service.idNameLocal(localName).subscribe(
      (id: number) => {
        this.fournisseur.local_id_local = id;
      }
    );
  }

  ajouter(): void {
    this.service.createStudygroupWithLocal(this.fournisseur, this.fournisseur.local_id_local).subscribe(
      (session: any) => {
        this.navigate();
      },
      (error: any) => {
        console.error("Error adding studygroup:", error);
        // Handle error, if needed
        this.toastr.error('vous devez remplir tout le formulaire');

      }
    );
  }
  navigate(){
    this.router.navigate(['sky'])
  }



}


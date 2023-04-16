import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private hhtp:HttpClient,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  
  public dialogRef!: MatDialogRef<ContactUsComponent> 
  @Inject(MAT_DIALOG_DATA) public data:any
 }










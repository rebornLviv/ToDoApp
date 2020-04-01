import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  shareTo: string;

  // addMember(){
  //   this.store.dispatch( new homeActions.ShareTask({id: '', email: ''}));
  //
  // }
  constructor(public  dialogRef: MatDialogRef<DialogComponent> ,
              @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
  }
  save(){
    this.dialogRef.close(this.shareTo);
  }
  close(){
    this.dialogRef.close();
  }


}

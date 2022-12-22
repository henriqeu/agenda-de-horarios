import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  form = {
          horario: "",
          nome: "",
          numero: "",
          obs:""
          }

  constructor() { }

  ngOnInit() {
    registerLocaleData(localePT);
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    console.log(this.form)
    this.modal.dismiss(this.form, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  clear(form:object) {
    this.form = {
      horario: '',
      nome: "",
      numero: "",
      obs:""
      }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionar-usuarios',
  templateUrl: './gestionar-usuarios.component.html',
  styleUrls: ['./gestionar-usuarios.component.css']
})
export class GestionarUsuariosComponent implements OnInit {
  title: string = 'Angular Crud';
  msg: string = '';
  employees = [
    { id:1, 'name': 'Eduardo Ojea Callejas', position: 'Programador', email: 'eojea@uci.cu' },
    { id:2, 'name': 'Roberto', position: 'Programador', email: 'rbandera@uci.cu' },
    { id:3, 'name': 'David', position: 'Programador', email: 'dpacosta@uci.cu' }
  ];
  model: any = {};
  model2: any = {};
  hideUpdate:boolean = true;
  addEmployee(): void {
    this.model.id = this.employees.length + 1;
    this.employees.push(this.model);
    this.msg = "campo agregado";
    this.model = {};//para limpiar los campos
  }
  deleteEmployee(i): void {
    //alert("Eliminar");
    var answer = confirm('Seguro que lo quiere eliminar');
    if(answer){
      this.employees.splice(i, 1);
    }
  }
  myValues;
  editEmployee(i): void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValues = i;
    this.msg = "campo eliminado";
    }
  updateEmployee(): void {
    let i = this.myValues;
    for (let j = 0; j < this.employees.length; j++) {
      if (i == j) {
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg = "campo actualizado";
      }
    }
  }
  closeAlert(){
    this.msg = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}

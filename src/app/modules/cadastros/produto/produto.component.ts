import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public service: ProdutoService
  ) {
    this.criarForm();
  }

  public criarForm(): void {
    this.form = this.fb.group({
      nome: [null, Validators.required],
      marca: [null, Validators.required],
      preco: [null, Validators.required],
      imagem: [null, Validators.required],
      codigoBarra: [null, Validators.required],
    });
  }

  public get nome() {
    return this.form.get('nome');
  }

  public get marca() {
    return this.form.get('marca');
  }

  public get preco() {
    return this.form.get('preco');
  }

  public get imagem() {
    return this.form.get('imagem');
  }

  public get codigoBarra() {
    return this.form.get('codigoBarra');
  }

  public salvar() {
    if (this.form.valid) {

    }
  }

}

import { Injectable } from '@angular/core';
import {Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc} from '@angular/fire/firestore';
import { Observable,map } from 'rxjs';

export interface Producto{
  id:string;
  nombre: string;
  precio: number;
}

export interface Mesa{
  id: string;
  numero: number;
  ruta: string;
  estado:string;
  pedidos:any[];
}




@Injectable({
  providedIn: 'root'
})
export class DataService {

  letId:number=0;
  letContadorMesas:number=0;
  letNumeroMesa:number=0;

  constructor(private firestore:Firestore) { }

//PRODUCTOS
  //FUNCIONES GET

  //elegimos que producto vamos a devolver mediante un string
  getProductos(producto:string):Observable<Producto[]>{
    const productos = collection(this.firestore, producto);
    return collectionData(productos, {idField: 'id'}) as Observable<Producto[]>;
  }
  //elegimos que producto vamos a devolver mediante un string y un id
  getProductosById(producto:string, id:string):Observable<Producto[]>{
    const productos = doc(this.firestore,`${producto}/${id}`);
    return docData(productos, {idField: 'id'}) as Observable<Producto[]>;
  }

  getEntrantes():Observable<Producto[]>{
    const entrantes = collection(this.firestore, 'entrantes');
    return collectionData(entrantes, {idField: 'id'}) as Observable<Producto[]>;
  }

  getPlatos():Observable<Producto[]>{
    const platos = collection(this.firestore, 'platos');
    return collectionData(platos, {idField: 'id'}) as Observable<Producto[]>;
  }

  getBebidas():Observable<Producto[]>{
    const bebidas = collection(this.firestore, 'bebidas');
    return collectionData(bebidas, {idField: 'id'}) as Observable<Producto[]>;
  }

  getPostres():Observable<Producto[]>{
    const postres = collection(this.firestore, 'postres');
    return collectionData(postres, {idField: 'id'}) as Observable<Producto[]>;
  }

  //FUNCIONES POST

  //añade el producto a la categoria que le pasemos
  addProducto(prod:Producto,categoria:string){
    const producto = collection(this.firestore, categoria);
    return addDoc(producto, prod);
  }

  

  //FUNCIONES DELETE


  deleteProducto(id:string, categoria:string){
    const producto = doc(this.firestore, `${categoria}/${id}`);
    return deleteDoc(producto);
  }
  


  //FUNCIONES UPDATE

  UpdateProducto(id:string, categoria:string, prod:Producto){
    const producto = doc(this.firestore, `${categoria}/${id}`);
    return updateDoc(producto,{nombre: prod.nombre, precio: prod.precio})
  }

//MESAS
  //FUNCIONES POST 
  
  addMesa(mesa:Mesa){
    const elegirMesa = collection(this.firestore, 'mesas');
    return addDoc(elegirMesa, mesa);
  }

  //FUNCIONES GET
  getMesas(){
    const mesas = collection(this.firestore, 'mesas');
    return collectionData(mesas, {idField: 'id'}) as Observable<Mesa[]>;
  }

  updateMesa(mesa:Mesa){
    const elegirMesa = doc(this.firestore, `mesas/${mesa.id}`);
    return updateDoc(elegirMesa,{estado: mesa.estado, pedidos: mesa.pedidos})
  }
  
  //FUNCIONES DELETE
  deleteMesa(id:string){
    const mesa = doc(this.firestore, `mesas/${id}`);
    return deleteDoc(mesa);
  }



//CONTADORES
  

  //ID

  avanzarId(){
    this.letId = this.letId+1;
    return this.letId;
  }

  //NUMERO MESA

  avanzarNumeroMesa(){
    this.letNumeroMesa = this.letNumeroMesa+1;
    return this.letNumeroMesa;
  }
  reducirNumeroMesa(){
    this.letNumeroMesa = this.letNumeroMesa-1;
    return this.letNumeroMesa;
  }


  //ID MESA

  avanzarIDMesa(){
    this.letContadorMesas = this.letContadorMesas+1;
    return this.letContadorMesas;
  }  



  
  
  getUltimoIdMesa() {
    const mesa = collection(this.firestore, 'mesas');
    return collectionData(mesa, { idField: 'id' }).pipe(
      map(data => data.map(item => item['id']))
    );
  }


}

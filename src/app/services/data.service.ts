import { Injectable } from '@angular/core';
import {Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Producto{
  id: number;
  nombre: string;
  precio: number;
}




@Injectable({
  providedIn: 'root'
})
export class DataService {

  letId:number=0;

  constructor(private firestore:Firestore) { }

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


  deleteProducto(id:number, categoria:string){
    const producto = doc(this.firestore, `${categoria}/${id}`);
    return deleteDoc(producto);
  }
  


  //FUNCIONES UPDATE

  UpdateProducto(id:string, categoria:string, prod:Producto){
    const producto = doc(this.firestore, `${categoria}/${id}`);
    return updateDoc(producto,{id: prod.id, nombre: prod.nombre, precio: prod.precio})
  }


  //Obtener ultima id de la categoria
  
  avanzarId(){
    this.letId=this.letId+1;
    return this.letId;
  }




}

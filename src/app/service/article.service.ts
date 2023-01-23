import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }

   // Recuperation de tous les articles
  getAllUrl ='http://localhost:9000/Article/getAll';

  getAll(): Observable<Array<Article>>{
    return this.http.get<Array<Article>>(this.getAllUrl);

  }
  // Enregistrement d'un article
  saveUrl = 'http://localhost:9000/Article/add';
  add(data: any):Observable<any>
  {
    console.log(data,"Savegarder Effectuer")
    return this.http.post(`${this.saveUrl}`,data)
  }

   // supression d'un article
  // deleteUrl = 'http://localhost:9000/Article/delete/id';
  // delete(id : any):Observable<any>
  // {
  //   let delet=id;
  //   return this.http.delete(`${this.deleteUrl}/${delet}`);
  // }
  deleteUrl = 'http://localhost:9000/Article/delete/';

  delete (id : number) : Observable <String>{
    return this.http.delete(this.deleteUrl+id,{responseType: 'text'})
  }

 // modification d'un article
editUrl = 'http://localhost:9000/Article/update/id';

edit(data : any,id : any): Observable<any>
{
  let editid = id;
  return this.http.put(`${this.editUrl}/${editid}`,data);
}
 // recuperation d'un article
getByIdURL='http://localhost:9000/Article/id';
getById(id:any):Observable<any>
{
  let getById = id;
  return this.http.get(`${this.editUrl}/${getById}`);
}





  
}

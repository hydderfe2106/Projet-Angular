import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  constructor(private articleService: ArticleService) { 
    this.articleService =articleService;
  }

   
  article : Article= new Article();
  articles : Article[]=[];
  actif:boolean=true;
  search!: any;
  liste:boolean = true;
  liste2 :boolean= false;
 
  formulaire(){
    this.liste=false
  }
  listeArticle(){
    this.liste=!this.liste;
  }
  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this.articleService.getAll().subscribe(res=>{
      this.articles = res;
    })
  }
  supprimer(id:any){
    this.articleService.delete(id).subscribe(res=>{
      this.getAll();
    })
  }
  ajout(){
    if (this.liste2 == false){
      this.Enregistrer()
     }else{
      this.edit();
     }
  }
  
  Enregistrer(){
    this.articleService.add(this.article).subscribe(
      (res:Article) => {
        this.article = res;
        this.articles.push(this.article);
        window.location.reload();
        this.article = new Article();
        this.listeArticle();
      }
    )
  }
  Modifier(article:Article){
    this.article=article;
    this.listeArticle();
    // this.liste2=true;
  }
  edit(){
    this.articleService.edit(this.article.id,this.article).subscribe(
      (res:Article) => {
        this.article = res
        this.getAll()
        this.article = new Article();
        window.location.reload();
        this.listeArticle();
        this.liste2 = false;
        
      }
    )
  }
}

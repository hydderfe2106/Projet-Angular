export class Article {
    id!: number;
    designation: string;
    prixUnitaire !: number;
    quantite !: number;
    description: string;
  
    public constructor() {
  
      this.designation = '';
      this.description = '';
    
    }
}

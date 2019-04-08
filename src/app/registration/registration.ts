export class Registration {

  constructor(
    public name: string,
    public email: string,
    public birthday: string,
    public document: string,
    public phone: string,
    public cep: string,
    public street: string,    
    public number: number,        
    public neighborhood: string,    
    public city: string,    
    public country: string,    
    public password: string,
    public password_confirmation: string,
  ) { }

}
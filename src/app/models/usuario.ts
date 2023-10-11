export class Usuario {
  constructor(
    public id: number = 0,
    public nombre: string = '',
    public email: string = '',
    public admin: boolean = false,
    public password: string = ''
  ) {}
}

export class Usuario {
  constructor(
    public id: number = 0,
    public nombre: string = '',
    public correo: string = '',
    public admin: boolean = false,
    public contrasena: string = ''
  ) {}
}

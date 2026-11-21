/**
 * Datos simulados no vienen de mysql se usan solo para pantalla
 * de gestion de usurios dentro del dashboard son el
 * estado inicial con lo que arranca la tabla despues el hook los guarda en localstorage para q los camios no se pierdan
* al recargar la pagina!
*/


//arreglo de objetos cada objeto es una fila simulada de la tabla usuarios
const mockUsuarios = [
{ id: 1, nombre:'Mauricio Lara ', email:'mauricio@inventario.com', rol:
'admin', activo: true},
{ id: 2, nombre:'Yuri Casas', email:'Yuri@inventario.com', rol:
'vendedor', activo: true},
{ id: 3, nombre: 'Carlos Herrera ', email:'carlos@inventario.com', rol:
'bodeguero', activo: false},
];

// Exportamos el arreglo para usarlo como valor inicial en useCrudSimulado
export default mockUsuarios;







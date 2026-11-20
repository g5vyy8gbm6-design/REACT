/**
 * Pagina de bienvenidadel dashboard (ruta/dashboard) muestra
 * un resumen rapido con tarjetas Bootstrap usando la cantidad
 * de registros activos de cada modulo simulado
 */








//hook para leer el usuario logueado (mostrar su nombre en el saludo)
import { useAuth } from '../context/AuthContext.jsx';
//tarjeta reutilizable para mostrar un numero grande con su etiqueta
//Recibe Icono ( clase de dashboard-icons ) titulo total (numero) y color
function TarjetaResumen({ icono, titulo, total, color}) {
    return (
        <div className='col-sm-6 col-lg-3'>
            <div className={`card border-0 shadow-sm border-start border-4 border-${color}`}>
                <div className='card-body d-flex align-items-center gap-3'>
                <i className={`bi ${icono} fs-1 text-${color}`}></i>
                <div>
                  <div className='fs-3 fw-bold'>{total}</div>
                  <div className='text-muted small'>{titulo}</div>
                </div>
                </div>
        </div>
        </div>
    );
}




// no recibe props: es el "element" de la ruta index de /dashboard en App.jsx
function DashboardHome() {
    //solo necesitamos el usuario logueado para mostrar su nombre
    const { usuario } = useAuth();
    const usuarios = [{ activo: true }, { activo: true }];
    const categorias = [{ activo: true }, { activo: true }, { activo: false }];
    const subcategorias = [{ activo: true }, { activo: true }];
    const productos = [{ activo: true }];




return(
        <div>
            <h2 className='h4 mb-1'> Hola, {usuario?.nombre}</h2>
            <p className='text-muted mb-4'>Este es el resumen general del sistema de inventario</p>








            <div className='row g-3'>
                <TarjetaResumen
                icono="bi-people"
                titulo="Usuarios activos"
                total={usuarios.filter((u)=> u.activo).length}
                color="primary"
                />








                <TarjetaResumen
                icono="bi-tags"
                titulo="Categorias activas"
                total={categorias.filter((c)=> c.activo).length}
                color="success"
                />








                <TarjetaResumen
                icono="bi-diagram-3"
                titulo="Subcategorias activas"
                total={subcategorias.filter((s)=> s.activo).length}
                color="warning"
                />








                <TarjetaResumen
                icono="bi-tags"
                titulo="Productos activos"
                total={productos.filter((p)=> p.activo).length}
                color="danger"
                />
            </div>
            <div className='alert alert-info mt-4 mb-0'>
                <i className='bi bi-info-circle me-2'></i>
                los datos de usuarios categorias subcategorias y productos de este panel son <strong> simulados con javaScript</strong>(se guardan en el localstorage del navegador).
                solo el inicio inicio de sesion esta conectad a la base de datos real <code>inventario_react</code>
        </div>
        </div>
    );
}


export default DashboardHome;

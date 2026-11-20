/**
 * muestra una etiqueta de color de bootstrap que dice activo o inactivo
 * para laas tablas de usuarios categorias subcategorias y productos
 */

//recibe una sola prop booleana Activo = true o false
function EstadoBadge({ activo }) {
    const clase= activo ? 'badge bg-success' : 'badge bg-secundary';

    const texto = activo ? 'activo' : 'inactivo';

    return <span className={clase}>{texto}</span>;
}

export default EstadoBadge;
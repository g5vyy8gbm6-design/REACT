/**
 * muestra una etiqueta de color de bootstrap que dice activo o inactivo
 * para laas tablas de usuarios categorias subcategorias y productos
 */

// Recibe una sola prop booleana: activo (true/false)
function EstadoBadge({ activo }) {
  // Clases de Bootstrap: bg-success (verde) o bg-secondary (gris)
  const clase = activo ? 'badge bg-success' : 'badge bg-secondary';
  // Texto que se muestra dentro del badge
  const texto = activo ? 'Activo' : 'Inactivo';

  // <span> con la clase y el texto calculados arriba
  return <span className={clase}>{texto}</span>;
}

// Exportamos el componente para usarlo en las tablas de cada modulo
export default EstadoBadge;

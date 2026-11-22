// ============================================================
// UsuariosPage.jsx
// Pertenece a: Clase 05 - CRUD de usuarios
// ------------------------------------------------------------
// Pantalla de "Gestion de usuarios" del dashboard (CRUD + activar
// / desactivar) usando datos SIMULADOS con JavaScript
// (useCrudSimulado + mockUsuarios). No consulta la base de datos.
// ============================================================

// Hook de estado local (controla que modal esta abierto)
import { useState } from 'react';
// Hook generico de CRUD simulado (lista + agregar + actualizar + alternarEstado)
import useCrudSimulado from '../hooks/useCrudSimulado';
// Datos iniciales por si localStorage todavia no tiene nada guardado
import mockUsuarios from '../data/mockUsuarios';
// Modal con el formulario de crear/editar usuario
import UsuarioFormModal from '../components/usuarios/UsuarioFormModal';
// Modal generico de confirmacion (para activar/desactivar)
import ConfirmModal from '../components/common/confirModal';
// Etiqueta visual de "Activo"/"Inactivo"
import EstadoBadge from '../components/common/EstadoBadge';

// No recibe props: es el "element" de la ruta /dashboard/usuarios en App.jsx
function UsuariosPage() {
  // 'usuarios' clave de localStorage donde vive esta tabla simulada
  const { lista: usuarios, agregar, actualizar, alternarEstado } = useCrudSimulado('usuarios', mockUsuarios);

  // Controla si el modal de crear/editar esta visible
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  // Guarda el registro que se esta editando; null = se esta creando uno nuevo
  const [registroEditar, setRegistroEditar] = useState(null);
  // Guarda el id del usuario al que se le va a cambiar el estado,
  // mientras se confirma la accion en el ConfirmModal
  const [idConfirmar, setIdConfirmar] = useState(null);

  // Abre el modal en modo "crear": limpia registroEditar (null = no hay
  // registro previo que cargar) y muestra el formulario vacio.
  function abrirCrear() {
    setRegistroEditar(null);
    setMostrarFormulario(true);
  }

  // Abre el modal en modo "editar": guarda el usuario clickeado para que
  // UsuarioFormModal precargue sus datos en el formulario.
  function abrirEditar(usuario) {
    setRegistroEditar(usuario);
    setMostrarFormulario(true);
  }

  // Se ejecuta cuando el formulario del modal se envia
  function guardarUsuario(datos) {
    if (registroEditar) {
      actualizar(registroEditar.id, datos);
    } else {
      agregar(datos);
    }
    setMostrarFormulario(false);
  }

  // Se ejecuta cuando el usuario le da clic a "Confirmar" en el ConfirmModal:
  // aplica el cambio de estado guardado y cierra el modal (idConfirmar = null).
  function confirmarCambioEstado() {
    alternarEstado(idConfirmar);
    setIdConfirmar(null);
  }

  // Buscamos el usuario que se va a activar/desactivar solo para
  // armar un mensaje de confirmacion mas claro ("¿Desactivar a Ana Torres?")
  const usuarioAConfirmar = usuarios.find((u) => u.id === idConfirmar);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h4 mb-0">Gestion de usuarios</h2>
        <button className="btn btn-primary" onClick={abrirCrear}>
          <i className="bi bi-plus-lg me-1"></i>
          Nuevo usuario
        </button>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Estado</th>
                <th className="text-end">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Recorremos la lista de usuarios y pintamos una fila por cada uno */}
              {usuarios.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.email}</td>
                  <td className="text-capitalize">{usuario.rol}</td>
                  <td>
                    <EstadoBadge activo={usuario.activo} />
                  </td>
                  <td className="text-end">
                    {/* Boton "editar": abre el modal precargado con este usuario */}
                    <button
                      className="btn btn-sm btn-outline-secondary me-2"
                      onClick={() => abrirEditar(usuario)}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    {/* Boton "activar/desactivar": el color e icono cambian
                        segun el estado actual; el clic solo abre el
                        ConfirmModal (guarda el id en idConfirmar), no
                        cambia el estado directamente */}
                    <button
                      className={`btn btn-sm ${usuario.activo ? 'btn-outline-danger' : 'btn-outline-success'}`}
                      onClick={() => setIdConfirmar(usuario.id)}
                    >
                      <i className={`bi ${usuario.activo ? 'bi-slash-circle' : 'bi-check-circle'}`}></i>
                    </button>
                  </td>
                </tr>
              ))}

              {/* Si no hay ningun usuario en la lista, mostramos un mensaje */}
              {usuarios.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-muted py-4">
                    No hay usuarios registrados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* El modal solo se pinta activo cuando mostrarFormulario es true;
          registroEditar decide si el titulo/datos son de "crear" o "editar" */}
      <UsuarioFormModal
        mostrar={mostrarFormulario}
        registroEditar={registroEditar}
        onGuardar={guardarUsuario}
        onCerrar={() => setMostrarFormulario(false)}
      />

      {/* mostrar={idConfirmar !== null}: el modal aparece apenas se hace
          clic en cualquier boton de activar/desactivar de la tabla */}
      <ConfirmModal
        mostrar={idConfirmar !== null}
        titulo={usuarioAConfirmar?.activo ? 'Desactivar usuario' : 'Activar usuario'}
        mensaje={`¿Seguro que quieres ${usuarioAConfirmar?.activo ? 'desactivar' : 'activar'} a "${usuarioAConfirmar?.nombre}"?`}
        onConfirmar={confirmarCambioEstado}
        onCancelar={() => setIdConfirmar(null)}
      />
    </div>
  );
}

// Exportamos la pagina para usarla en la ruta /dashboard/usuarios
export default UsuariosPage;

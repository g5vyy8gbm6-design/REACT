// ============================================================
// ConfirmModal.jsx
// Pertenece a: Clase 05 - CRUD de usuarios (reutilizado en Clase 06 y 07)
// ------------------------------------------------------------
// Modal de confirmacion reutilizable (Bootstrap). Se usa antes de
// activar/desactivar un registro, para evitar clics accidentales.
// Es un componente "controlado": el padre decide cuando se
// muestra (prop "mostrar") y que pasa al confirmar (prop "onConfirmar").
// ============================================================

// mostrar: si se ve o no; titulo/mensaje: texto a mostrar;
// onConfirmar/onCancelar: funciones que el padre pasa para reaccionar al clic
function ConfirmModal({ mostrar, titulo, mensaje, onConfirmar, onCancelar }) {
  // Si "mostrar" es false, no renderizamos nada (el modal no existe en el DOM)
  if (!mostrar) return null;

  return (
    <>
      {/* Fondo oscuro semi-transparente detras del modal */}
      <div className="modal-backdrop fade show"></div>

      {/* Modal de Bootstrap mostrado "a mano" con display: block,
          en vez de usar el JS de Bootstrap, para controlarlo 100% desde React */}
      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{titulo}</h5>
              <button type="button" className="btn-close" onClick={onCancelar}></button>
            </div>
            <div className="modal-body">
              <p className="mb-0">{mensaje}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onCancelar}>
                Cancelar
              </button>
              <button type="button" className="btn btn-primary" onClick={onConfirmar}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Exportamos el componente para reutilizarlo en las 4 paginas de gestion
export default ConfirmModal;

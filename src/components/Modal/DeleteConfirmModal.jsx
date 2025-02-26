

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, campName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50">
      <div className="modal-box bg-base-100 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="font-bold text-lg text-error">Confirm Deletion</h3>
        <p className="py-4">
          Are you sure you want to delete <span className="font-semibold">{campName}</span>?
          This action cannot be undone.
        </p>
        <div className="modal-action flex justify-end gap-2">
          <button 
            onClick={onClose}
            className="btn btn-outline"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm}
            className="btn btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
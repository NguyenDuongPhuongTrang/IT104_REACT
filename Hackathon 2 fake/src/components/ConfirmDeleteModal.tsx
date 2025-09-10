interface Props {
  onConfirm: () => void;
  onCancel: () => void;
}

function ConfirmDeleteModal({ onConfirm, onCancel }: Props) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-[400px]">
        <h2 className="text-xl font-bold mb-4 text-red-600">Xóa sách</h2>
        <p>Bạn có chắc chắn muốn xóa cuốn sách này?</p>

        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={onCancel}
            className="px-3 py-2 bg-gray-300 rounded"
          >
            Hủy
          </button>
          <button
            onClick={onConfirm}
            className="px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;

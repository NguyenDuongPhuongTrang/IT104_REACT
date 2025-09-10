import type { Word } from "../App";

interface Props {
  word: Word;
  onCancel: () => void;
  onConfirm: () => void;
}

function ConfirmDeleteModal({ word, onCancel, onConfirm }: Props) {
  return (
    <div className="modal d-block" tabIndex={-1} style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Xác nhận xóa</h5>
            <button className="btn-close" onClick={onCancel}></button>
          </div>
          <div className="modal-body">
            Bạn có chắc chắn muốn xóa từ <b>{word.english}</b> không?
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onCancel}>Hủy</button>
            <button className="btn btn-danger" onClick={onConfirm}>Xóa</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;

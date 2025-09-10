import { useState } from "react";
import type { Word } from "../App";

interface Props {
  word: Word;
  onCancel: () => void;
  onSave: (id: number, english: string, vietnamese: string) => void;
}

function EditWordModal({ word, onCancel, onSave }: Props) {
  const [english, setEnglish] = useState(word.english);
  const [vietnamese, setVietnamese] = useState(word.vietnamese);

  const handleSave = () => {
    if (!english || !vietnamese) {
      alert("Không được để trống!");
      return;
    }
    onSave(word.id, english, vietnamese);
  };

  return (
    <div className="modal d-block" tabIndex={-1} style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Chỉnh sửa từ</h5>
            <button className="btn-close" onClick={onCancel}></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control mb-2"
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              value={vietnamese}
              onChange={(e) => setVietnamese(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onCancel}>Hủy</button>
            <button className="btn btn-primary" onClick={handleSave}>Lưu</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditWordModal;

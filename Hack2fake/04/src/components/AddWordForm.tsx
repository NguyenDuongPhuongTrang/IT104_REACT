import { useState } from "react";

interface Props {
  onAdd: (english: string, vietnamese: string) => void;
}

function AddWordForm({ onAdd }: Props) {
  const [english, setEnglish] = useState("");
  const [vietnamese, setVietnamese] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(english.trim(), vietnamese.trim());
    setEnglish("");
    setVietnamese("");
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Từ tiếng Anh"
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Nghĩa tiếng Việt"
          value={vietnamese}
          onChange={(e) => setVietnamese(e.target.value)}
        />
        <button type="submit" className="btn btn-success">Thêm</button>
      </div>
    </form>
  );
}

export default AddWordForm;

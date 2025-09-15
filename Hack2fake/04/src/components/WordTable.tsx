import type { Word } from "../App";

interface Props {
  words: Word[];
  onEdit: (word: Word) => void;
  onDelete: (word: Word) => void;
}

function WordTable({ words, onEdit, onDelete }: Props) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Từ tiếng Anh</th>
            <th>Nghĩa tiếng Việt</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {words.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center">Chưa có từ vựng</td>
            </tr>
          ) : (
            words.map((w) => (
              <tr key={w.id}>
                <td>{w.english}</td>
                <td>{w.vietnamese}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2" onClick={() => onEdit(w)}>✏️ Sửa</button>
                  <button className="btn btn-danger btn-sm" onClick={() => onDelete(w)}>🗑️ Xóa</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default WordTable;

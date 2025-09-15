interface Props {
  title: string;
  value: number;
  color?: string; 
}

function StatsCard({ title, value, color = "bg-blue-500" }: Props) {
  return (
    <div className={`p-4 rounded-lg shadow text-white ${color}`}>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm">{title}</p>
    </div>
  );
}

export default StatsCard;

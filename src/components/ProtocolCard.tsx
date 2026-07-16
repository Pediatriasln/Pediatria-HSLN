interface Props {
  title: string;
  content: string;
}

export default function ProtocolCard({ title, content }: Props) {
  return (
    <div className="border rounded p-4 mb-4">
      <h2 className="text-lg font-bold text-blue-900">{title}</h2>
      <p className="mt-2 text-sm">{content}</p>
    </div>
  );
}

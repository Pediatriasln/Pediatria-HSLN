import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold text-blue-900">Pediatria HSLN</h1>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Link href="/protocolos"><button className="btn">Protocolos</button></Link>
        <Link href="/calculadoras"><button className="btn">Calculadoras</button></Link>
        <Link href="/search"><button className="btn">Busca</button></Link>
      </div>
    </Layout>
  );
}

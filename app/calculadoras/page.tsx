"use client";
import { useState } from "react";

export default function CalculadoraIMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || !alturaNum) {
      setResultado("Preencha os campos corretamente.");
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    setResultado(`IMC da criança: ${imc.toFixed(2)}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black p-8">
      <h1 className="text-2xl font-bold mb-6 text-black dark:text-zinc-50">
        Calculadora de IMC Infantil
      </h1>

      <div className="space-y-4 w-full max-w-sm">
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          className="w-full border rounded p-2"
        />
        <input
          type="number"
          placeholder="Altura (m)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          className="w-full border rounded p-2"
        />
        <button
          onClick={calcularIMC}
          className="w-full bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
        >
          Calcular
        </button>
      </div>

      {resultado && (
        <p className="mt-6 text-lg text-black dark:text-zinc-50">{resultado}</p>
      )}
    </main>
  );
}

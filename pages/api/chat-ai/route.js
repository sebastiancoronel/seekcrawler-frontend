// Recibir los datos del input aqui
// Importar NExt Response y agregar el objeto config{    runtime: edge} asi:
/**
 export const config = {
  runtime: "edge",
};

*/
import { NextResponse } from "next/server";

export default async function POST(req, res) {
  
  const response = await fetch("http://127.0.0.1:8000/rag-api/get-response", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({question:req.body}),
  });

  const data = await response.json();

  console.log("LA API DICE:" + " " + JSON.stringify(data));
}

// export const config = {
//   runtime: "edge",
// };

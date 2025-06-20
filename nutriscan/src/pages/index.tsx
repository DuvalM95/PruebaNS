import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NutriScan</title>
        <meta name="description" content="Bienvenido a NutriScan - Tu app de nutrición inteligente" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-blue-900 text-white font-sans">
        <img src="/imagenes/espe.png" alt="Foto espe" 
        className="object-cover w-32 h-32"/>
        <div className="bg-black/40 p-10 rounded-3xl shadow-2xl text-center max-w-md w-full flex flex-col items-center gap-6">
         
          <div className="flex flex-col items-center">
           
            <div className="font-semibold text-lg">
              Universidad de las Fuerzas Armadas ESPE
             
            </div>
          </div>
          <p className="text-base">
            <p>
            Duval Eduardo Muñoz Nuñez
            </p>
            <p>
            Estudiante de quinto semestre de ingeniería de software
            </p>
            Docente: Ing. Omar Quimbita
          </p>
        </div>
      </main>
    </>
  );
}
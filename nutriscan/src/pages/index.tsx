import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NutriScan</title>
        <meta name="description" content="Bienvenido a NutriScan - Tu app de nutrición inteligente" />
      </Head>
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
          color: "#fff",
          fontFamily: "Segoe UI, Arial, sans-serif",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.35)",
            padding: "2.5rem 2rem",
            borderRadius: "2rem",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            textAlign: "center",
            maxWidth: "420px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", margin: 0, letterSpacing: "1.5px" }}>
            DESARROLLO WEB AVANZADO
          </h1>
          <div>
          
            <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              Duval Eduardo Muñoz Nuñez
            </div>
          </div>
          <p style={{ fontSize: "1.1rem", margin: 0 }}>
            Estudiante de segundo semestre de ingenieria de software<br />
            
          </p>
        </div>
      </main>
    </>
  );
}
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luiz Henrique | Software Engineer & Systems Architect",
  description:
    "Portfólio & Manifesto de Engenharia de Luiz Henrique da Silva de Oliveira. Engenharia de alta complexidade: de drivers C#/C++ embarcados a monolitos modulares resilientes em NestJS, Bun e Postgres.",
  keywords: [
    "Luiz Henrique da Silva de Oliveira",
    "Software Engineer",
    "Systems Architect",
    "NestJS",
    "Bun",
    "PostgreSQL",
    "Drizzle ORM",
    "Better Auth",
    "Curitiba",
    "Full-Stack",
    "C++",
    "C#",
    ".NET",
  ],
  authors: [{ name: "Luiz Henrique da Silva de Oliveira" }],
  openGraph: {
    title: "Luiz Henrique | Software Engineer & Systems Architect",
    description:
      "410+ commits em produção no lyx-monolith, 86 PRs mergeadas, 4 módulos do zero, 714 testes reais com WASM Postgres e engenharia de baixo nível.",
    url: "https://github.com/Luiz-Henrique03",
    siteName: "Luiz Henrique Portfolio",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen bg-[#060709] text-slate-100 font-sans antialiased selection:bg-brand-lime selection:text-black">
        {children}
      </body>
    </html>
  );
}

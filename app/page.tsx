import Branding from "../components/Login/Branding";
import LoginForm from "../components/Login/LoginForm";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="flex bg-white/90 rounded-xl shadow-xl overflow-hidden w-full max-w-6xl min-h-[720px]">
        {/* Kiri: Branding.tsx */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-b from-black to-blue-950 text-white w-1/2 p-10">
          <Branding />
        </div>
        {/* Kanan: LoginForm.tsx */} 
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
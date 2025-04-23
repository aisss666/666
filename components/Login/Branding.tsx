import platform from "@/contents/platform.json";

export default function Branding() {
    return (
      <div className="flex flex-col items-center mb-8">
        <img src="/loginavatar.png" alt="Logo" className="w-20 h-20 mb-4" />
        <h1 className="text-4xl font-extrabold tracking-tight mb-1 sriracha-regular">Welcome To {platform.companyName}</h1>
        <p className="text-white text-xl">Sign in to your account</p>
      </div>
    );
  }
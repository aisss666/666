import MatchList from "./MatchList";
import platform from "@/contents/platform.json";

export default function MatchPage() {
  const today = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // Format the date to "Day, Date Month Year"
  const formattedDate = `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
  return (
    <main className="min-h-screen text-white py-8 px-2 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-5xl text-center font-bold mb-2.5">{platform.companyName} x SCORE</h1>
          <p className="text-gray-300 md:text-xl text-center">{formattedDate}</p>
        </div>
        <MatchList />
      </div>
    </main>
  );
}
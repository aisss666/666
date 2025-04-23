type Match = {
  home: { name: string; logo: string };
  away: { name: string; logo: string };
  time: string;
};

type MatchCardProps = {
  match: Match;
};

export default function MatchCard({ match }: MatchCardProps) {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-lg p-6 max-w-lg mx-auto my-6 transition-transform hover:scale-[1.02] hover:shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center min-w-[110px]">
          <img
            src={match.home.logo}
            alt={match.home.name}
            width={44}
            height={44}
            className="rounded-full border-2 border-gray-300 shadow-sm mb-2"
          />
          <span className="font-semibold text-gray-900 text-sm text-center">{match.home.name}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="bg-gray-200 text-gray-700 font-bold text-xs px-3 py-1 rounded-full mb-2 shadow-inner">
            {match.time}
          </span>
          <span className="text-gray-900 font-bold text-lg tracking-widest">VS</span>
        </div>
        <div className="flex flex-col items-center min-w-[110px]">
          <img
            src={match.away.logo}
            alt={match.away.name}
            width={44}
            height={44}
            className="rounded-full border-2 border-gray-300 shadow-sm mb-2"
          />
          <span className="font-semibold text-gray-900 text-sm text-center">{match.away.name}</span>
        </div>
      </div>
    </div>
  );
}
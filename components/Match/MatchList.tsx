import MatchCard from "./MatchCard";

type Match = {
  home: { name: string; logo: string };
  away: { name: string; logo: string };
  time: string;
};

async function getMatches(): Promise<Match[]> {
  const res = await fetch("https://staging.lxscore.com/api/match/live?timezone=7", {
    headers: {
      'Authorization': 'Bearer e7ac2c110f7acdb732c21b94eaa6e9cf802f8e0fc74c2df875d4d3b8fbdcd4a0',
    },
  });
  if (!res.ok) throw new Error("Failed to fetch matches");
  const data = await res.json();
  return (data.data || []).map((item: any) => ({
    home: {
      name: item.home_team.name,
      logo: item.home_team.logo,
    },
    away: {
      name: item.away_team.name,
      logo: item.away_team.logo,
    },
    time: item.start_at,
  }));
}

export default async function MatchList() {
  const matches = await getMatches();
  console.log(matches);

  return (
    <div className="space-y-6">
      {matches.map((match, idx) => (
        <MatchCard key={idx} match={match} />
      ))}
    </div>
  );
}
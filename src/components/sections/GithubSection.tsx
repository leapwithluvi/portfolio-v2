"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Code, Terminal, Users, Calendar, ExternalLink } from "lucide-react";

export const GithubSection = () => {
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
    yearJoined: 0,
    contributions: 0,
  });
  
  const username = "leapwithluvi";

  useEffect(() => {
    async function fetchStats() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (userRes.ok) {
          const userData = await userRes.json();
          setStats((prev) => ({
            ...prev,
            repos: userData.public_repos || 0,
            followers: userData.followers || 0,
            yearJoined: userData.created_at ? new Date(userData.created_at).getFullYear() : 0,
          }));
        }

        const contribRes = await fetch(`https://github-contributions-api.deno.dev/${username}.json`);
        if (contribRes.ok) {
          const contribData = await contribRes.json();
          let total = 0;
          if (contribData.totalContributions) {
            total = contribData.totalContributions;
          } else if (contribData.contributions) {
            const currentYear = new Date().getFullYear();
            const yearData = contribData.contributions.find((y: { year: number, totalContributions: number }) => y.year === currentYear);
            if (yearData) total = yearData.totalContributions;
          }
          setStats((prev) => ({ ...prev, contributions: total }));
        }
      } catch (error) {
        console.error("Error fetching github stats:", error);
      }
    }
    fetchStats();
  }, []);

  return (
    <section id="github" className="relative py-24 md:py-36 overflow-hidden bg-background border-y border-border">
      <div className="max-container flex flex-col">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 px-2">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
              <span className="text-accent">✦</span> GARDEN / PUBLIC RHYTHM
            </div>
            <h2 className="text-6xl md:text-8xl font-serif font-bold text-foreground leading-[0.9] tracking-tighter">
              Public proof of <br /> steady execution.
            </h2>
          </div>
          <div className="max-w-sm text-left md:text-right flex flex-col md:items-end gap-6">
            <p className="text-muted-foreground text-[15px] font-light leading-relaxed">
              Repository activity is not the whole story, but it helps show consistency, iteration, and how often I ship technical work.
            </p>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors flex items-center gap-2 border-b border-foreground/20 pb-1"
            >
              @{username.toUpperCase()} <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* The Main Card Box - 3 Column Layout to match L-shape request and image */}
        <div className="border border-border bg-card grid grid-cols-1 md:grid-cols-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
          
          {/* Column 1: Repos & Follow */}
          <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-border">
             <StatBox 
                title="REPOS" 
                value={stats.repos} 
                label="PUBLIC REPOS" 
                icon={<Code size={14} />} 
                borderBottom
             />
             <StatBox 
                title="FOLLOW" 
                value={stats.followers} 
                label="FOLLOWERS" 
                icon={<Users size={14} />} 
             />
          </div>

          {/* Column 2: Total & Since */}
          <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-border">
             <StatBox 
                title="TOTAL" 
                value={stats.contributions.toLocaleString()} 
                label="CONTRIBUTIONS" 
                icon={<Terminal size={14} />} 
                borderBottom
             />
             <StatBox 
                title="SINCE" 
                value={stats.yearJoined || "2025"} 
                label="YEAR JOINED" 
                icon={<Calendar size={14} />} 
             />
          </div>

          {/* Column 3: Contribution Map (Middle/Main content) */}
          <div className="md:col-span-8 p-8 md:p-12 flex flex-col bg-background-secondary/50">
             <div className="flex justify-between items-start mb-10 w-full">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Contribution Map</div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Last 12 months</h3>
                </div>
                <div className="bg-muted text-muted-foreground px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-full">
                  {stats.contributions > 0 ? stats.contributions.toLocaleString() : "-"} TOTAL
                </div>
             </div>

             <div className="w-full h-px bg-border mb-10" />

             <div className="w-full flex justify-end overflow-x-auto pb-6 scrollbar-hide">
                <div className="shrink-0">
                  <GitHubCalendar
                    username={username}
                    theme={{
                      light: ["#E2EAF0", "#A8D8EA", "#7EC8E3", "#4FA3C7", "#0D1B26"],
                      dark: ["#1A3A4A", "#2A5068", "#4FA3C7", "#7EC8E3", "#E8F4FF"],
                    }}
                    blockSize={10}
                    blockMargin={3}
                    fontSize={10}
                  />
                </div>
             </div>

             {/* Custom Legend to match image */}
             <div className="mt-6 flex justify-between items-center text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                <span>LESS</span>
                <div className="flex gap-1.5">
                   <div className="w-3 h-3 bg-muted" />
                   <div className="w-3 h-3 bg-accent/30" />
                   <div className="w-3 h-3 bg-accent/60" />
                   <div className="w-3 h-3 bg-accent" />
                   <div className="w-3 h-3 bg-primary" />
                </div>
                <span>MORE</span>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

interface StatBoxProps {
  title: string;
  value: string | number;
  label: string;
  icon: React.ReactNode;
  borderBottom?: boolean;
}

const StatBox = ({ title, value, label, icon, borderBottom }: StatBoxProps) => (
  <div className={`p-8 flex flex-col justify-between h-50 bg-card ${borderBottom ? "border-b border-border" : ""}`}>
    <div className="flex items-center justify-between">
       <div className="flex items-center gap-3 text-muted-foreground">
          {icon}
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{title}</span>
       </div>
    </div>
    <div className="flex flex-col gap-1">
       <div className="text-5xl font-serif font-bold text-foreground tracking-tight">{value || "-"}</div>
       <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mt-2">{label}</div>
    </div>
  </div>
);

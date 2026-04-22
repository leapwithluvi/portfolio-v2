"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Code, Terminal, Users, Calendar, ExternalLink } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

interface GitHubStats {
  repos: number;
  followers: number;
  yearJoined: number;
  contributions: number;
}

interface ContributionYear {
  year: number;
  totalContributions: number;
}

export const GithubSection = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState<GitHubStats>({
    repos: 0,
    followers: 0,
    yearJoined: 0,
    contributions: 0,
  });
  const [mounted, setMounted] = useState(false);
  
  const username = "leapwithluvi";

  useEffect(() => {
    // Avoid synchronous setState in effect to prevent cascading render warning
    const frame = requestAnimationFrame(() => setMounted(true));
    
    async function fetchStats() {
      // Try to load from cache first
      const cached = localStorage.getItem(`github-stats-${username}`);
      if (cached) {
        try {
          setStats(JSON.parse(cached));
        } catch {
          // Silent catch for invalid JSON
        }
      }

      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        let githubData: Partial<GitHubStats> = {};

        if (userRes.ok) {
          const userData = await userRes.json();
          githubData = {
            repos: userData.public_repos || 0,
            followers: userData.followers || 0,
            yearJoined: userData.created_at ? new Date(userData.created_at).getFullYear() : 0,
          };
        }

        const contribRes = await fetch(`https://github-contributions-api.deno.dev/${username}.json`);
        if (contribRes.ok) {
          const contribData = await contribRes.json();
          let total = 0;
          if (contribData.totalContributions) {
            total = contribData.totalContributions;
          } else if (contribData.contributions) {
            const currentYear = new Date().getFullYear();
            const yearData = contribData.contributions.find((y: ContributionYear) => y.year === currentYear);
            if (yearData) total = yearData.totalContributions;
          }
          githubData.contributions = total;
        }

        setStats((prev) => {
          const updated = { ...prev, ...githubData };
          localStorage.setItem(`github-stats-${username}`, JSON.stringify(updated));
          return updated;
        });
      } catch (error) {
        console.error("Error fetching github stats:", error);
      }
    }
    fetchStats();
    
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="github" className="relative py-16 md:py-32 overflow-hidden bg-background border-y border-border">
      <div className="max-container flex flex-col">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 px-2">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-[1.1] tracking-tighter">
              {t.github.title}
            </h2>
          </div>
          <div className="max-w-sm text-left md:text-right flex flex-col md:items-end gap-6">
            <p className="text-muted-foreground text-[15px] font-light leading-relaxed">
              {t.github.description}
            </p>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors flex items-center gap-2 border-b border-foreground/20 pb-1"
              aria-label={`Visit my GitHub profile @${username}`}
            >
              @{username.toUpperCase()} <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* The Main Card Box */}
        <div className="border border-border bg-card grid grid-cols-1 md:grid-cols-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]">
          
          {/* Column 1: Repos & Follow */}
          <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-border">
             <StatBox 
                title={t.github.repos} 
                value={stats.repos} 
                label={t.github.publicRepos} 
                icon={<Code size={14} aria-hidden="true" />} 
                borderBottom
             />
             <StatBox 
                title={t.github.follow} 
                icon={<Users size={14} aria-hidden="true" />} 
                value={stats.followers} 
                label={t.github.followers} 
             />
          </div>

          {/* Column 2: Total & Since */}
          <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-border">
             <StatBox 
                title={t.github.total} 
                value={stats.contributions.toLocaleString()} 
                label={t.github.contributions} 
                icon={<Terminal size={14} aria-hidden="true" />} 
                borderBottom
             />
             <StatBox 
                title={t.github.since} 
                value={stats.yearJoined || "2025"} 
                label={t.github.yearJoined} 
                icon={<Calendar size={14} aria-hidden="true" />} 
             />
          </div>

          {/* Column 3: Contribution Map */}
          <div className="md:col-span-8 p-8 md:p-12 flex flex-col bg-background-secondary/50">
             <div className="flex justify-between items-start mb-10 w-full">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/80 mb-2">{t.github.contributionMap}</div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">{t.github.last12Months}</h3>
                </div>
                <div className="bg-muted text-foreground/80 px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-full">
                  {stats.contributions > 0 ? stats.contributions.toLocaleString() : "-"} {t.github.total.toUpperCase()}
                </div>
             </div>

             <div className="w-full h-px bg-border mb-10" />

             <div className="w-full flex justify-end overflow-x-auto pb-6 scrollbar-hide">
                <div className="shrink-0 min-w-full">
                  {mounted && (
                    <GitHubCalendar
                      username={username}
                      theme={{
                        light: ["#E2EAF0", "#A8D8EA", "#7EC8E3", "#4FA3C7", "#3A5568"],
                        dark: ["#1A3A4A", "#2A5068", "#4FA3C7", "#7EC8E3", "#E8F4FF"],
                      }}
                      blockSize={12}
                      blockMargin={4}
                      fontSize={11}
                    />
                  )}
                </div>
             </div>

             {/* Custom Legend */}
             <div className="mt-6 flex justify-between items-center text-[10px] font-bold tracking-widest text-foreground/80 uppercase">
                <span>{t.github.less}</span>
                <div className="flex gap-2" aria-hidden="true">
                   <div className="w-3.5 h-3.5 rounded-sm border border-border/50 bg-[#E2EAF0] dark:bg-[#1A3A4A]" />
                   <div className="w-3.5 h-3.5 rounded-sm border border-border/50 bg-[#A8D8EA] dark:bg-[#2A5068]" />
                   <div className="w-3.5 h-3.5 rounded-sm border border-border/50 bg-[#7EC8E3] dark:bg-[#4FA3C7]" />
                   <div className="w-3.5 h-3.5 rounded-sm border border-border/50 bg-[#4FA3C7] dark:bg-[#7EC8E3]" />
                   <div className="w-3.5 h-3.5 rounded-sm border border-border/50 bg-[#3A5568] dark:bg-[#E8F4FF]" />
                </div>
                <span>{t.github.more}</span>
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
  <div className={`p-8 flex flex-col justify-between h-48 bg-card ${borderBottom ? "border-b border-border" : ""}`}>
    <div className="flex items-center justify-between">
       <div className="flex items-center gap-3 text-foreground/70">
          {icon}
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{title}</span>
       </div>
    </div>
    <div className="flex flex-col gap-1">
       <div className="text-5xl font-serif font-bold text-foreground tracking-tight">{value || "-"}</div>
       <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/60 mt-2">{label}</div>
    </div>
  </div>
);

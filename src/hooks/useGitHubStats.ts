"use client";

import { useState, useEffect } from "react";
import { githubApi } from "@/lib/api/github";

interface GitHubStats {
  user: {
    name: string;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
    bio: string;
    location: string;
    company: string;
    blog: string;
    avatar_url: string;
  };
  repos: Array<{
    name: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    created_at: string;
    updated_at: string;
    topics: string[];
  }>;
  totalStars: number;
  totalForks: number;
  topLanguages: { [key: string]: number };
  recentActivity: number;
  yearsOfCoding: number;
}

interface UseGitHubStatsReturn {
  data: GitHubStats | null;
  loading: boolean;
  error: string | null;
  refresh: () => void;
}

export function useGitHubStats(): UseGitHubStatsReturn {
  const [data, setData] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const stats = await githubApi.getCompleteStats();
      setData(stats);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido";
      setError(`Não foi possível carregar os dados do GitHub: ${errorMessage}`);
      console.error("Erro ao carregar dados do GitHub:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = () => {
    // Limpa o cache do localStorage
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (key.startsWith("github-")) {
        localStorage.removeItem(key);
      }
    });
    fetchData();
  };

  return { data, loading, error, refresh };
}

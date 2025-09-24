interface GitHubUser {
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
}

interface GitHubRepo {
  name: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  created_at: string;
  updated_at: string;
  topics: string[];
}

interface GitHubStats {
  user: GitHubUser;
  repos: GitHubRepo[];
  totalStars: number;
  totalForks: number;
  topLanguages: { [key: string]: number };
  recentActivity: number;
  yearsOfCoding: number;
}

export class GitHubAPI {
  private readonly baseUrl = "https://api.github.com";
  private readonly username: string;

  constructor(username: string) {
    this.username = username;
  }

  private async fetchWithCache<T>(url: string, cacheKey: string): Promise<T> {
    // Verifica se existe cache válido (5 minutos)
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const fiveMinutes = 5 * 60 * 1000;
      if (Date.now() - timestamp < fiveMinutes) {
        return data;
      }
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();

    // Salva no cache
    localStorage.setItem(
      cacheKey,
      JSON.stringify({
        data,
        timestamp: Date.now(),
      }),
    );

    return data;
  }

  async getUserData(): Promise<GitHubUser> {
    return this.fetchWithCache<GitHubUser>(
      `${this.baseUrl}/users/${this.username}`,
      `github-user-${this.username}`,
    );
  }

  async getUserRepos(): Promise<GitHubRepo[]> {
    return this.fetchWithCache<GitHubRepo[]>(
      `${this.baseUrl}/users/${this.username}/repos?sort=updated&per_page=100`,
      `github-repos-${this.username}`,
    );
  }

  async getCompleteStats(): Promise<GitHubStats> {
    try {
      const [user, repos] = await Promise.all([
        this.getUserData(),
        this.getUserRepos(),
      ]);

      // Calcula estatísticas agregadas
      const totalStars = repos.reduce(
        (sum, repo) => sum + repo.stargazers_count,
        0,
      );
      const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

      // Conta linguagens mais usadas
      const languageCount: { [key: string]: number } = {};
      repos.forEach((repo) => {
        if (repo.language) {
          languageCount[repo.language] =
            (languageCount[repo.language] || 0) + 1;
        }
      });

      // Ordena linguagens por uso
      const topLanguages = Object.fromEntries(
        Object.entries(languageCount)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5),
      );

      // Calcula atividade recente (repos atualizados nos últimos 6 meses)
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

      const recentActivity = repos.filter(
        (repo) => new Date(repo.updated_at) > sixMonthsAgo,
      ).length;

      // Calcula anos de programação
      const createdAt = new Date(user.created_at);
      const yearsOfCoding = new Date().getFullYear() - createdAt.getFullYear();

      return {
        user,
        repos,
        totalStars,
        totalForks,
        topLanguages,
        recentActivity,
        yearsOfCoding,
      };
    } catch (error) {
      console.error("Erro ao buscar dados do GitHub:", error);
      throw error;
    }
  }
}

// Instância padrão para o usuário usrmaia
export const githubApi = new GitHubAPI("usrmaia");

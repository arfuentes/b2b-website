import { ref } from "vue";
import { useI18n } from "vue-i18n";

export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface Author {
  id: number;
  name: string;
  image: Image;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  abstract: string;
  content: string;
  image: Image;
  category: Category;
  author: Author;
  publishedAt: string;
}

export interface PaginationData {
  currentPage: number;
  perPage: number;
  from: number;
  to: number;
  total: number;
  lastPage: number;
}

export interface BlogResponse {
  data: BlogPost[];
  pagination: PaginationData;
  links: {
    first?: string;
    prev?: string;
    next?: string;
    last?: string;
  };
}

export interface PlanCurrency {
  currency: string;
  symbol: string;
  htmlEntity: string;
  monthlyPrice: number;
  yearlyPrice: number;
  candidatePrice: number;
  userMonthlyPrice: number;
}

export interface Plan {
  id: number;
  name: string;
  description: string;
  items: string[];
  users: number;
  candidatesPerMonth: number;
  candidatesPerYear: number;
  currencyDetails: PlanCurrency[];
}

export interface PlansResponse {
  data: Plan[];
}

export const useApi = () => {
  const { locale } = useI18n();
  const loading = ref(false);
  const error = ref<string | null>(null);

  const API_KEY = useRuntimeConfig().public.apiKey;
  const BASE_URL = useRuntimeConfig().public.apiBaseUrl;

  const headers = {
    "X-Api-Key": API_KEY,
    "Accept-Language": locale.value,
    "Content-Type": "application/json",
  };

  const getBlogPosts = async (
    page = 1,
    size = 6,
    query = "",
    filters = {}
  ): Promise<BlogResponse> => {
    loading.value = true;
    error.value = null;

    try {
      const searchParams = new URLSearchParams({
        page: page.toString(),
        size: size.toString(),
        ...filters,
      });

      if (query) {
        searchParams.append("query", query);
      }

      const response = await $fetch(`${BASE_URL}/posts?${searchParams}`, {
        headers,
      });

      return response;
    } catch (e) {
      error.value =
        e instanceof Error
          ? e.message
          : "An error occurred while fetching blog posts";
      throw error.value;
    } finally {
      loading.value = false;
    }
  };

  const getBlogPostBySlug = async (slug: string): Promise<BlogPost> => {
    loading.value = true;
    error.value = null;

    try {
      const response = await $fetch(`${BASE_URL}/posts/slug/${slug}`, {
        headers,
      });

      return response;
    } catch (e) {
      error.value =
        e instanceof Error
          ? e.message
          : "An error occurred while fetching the blog post";
      throw error.value;
    } finally {
      loading.value = false;
    }
  };

  return {
    getBlogPosts,
    getBlogPostBySlug,
    loading,
    error,
    headers,
  };
};

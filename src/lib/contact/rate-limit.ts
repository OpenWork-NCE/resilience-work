const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 3;

type Entry = {
  count: number;
  resetAt: number;
};

const contactRateLimitStore = new Map<string, Entry>();

export interface ContactRateLimitResult {
  allowed: boolean;
  retryAfterSeconds: number;
}

// This in-memory limiter is a lightweight fallback and is not distributed.
export function checkContactRateLimit(identifier: string): ContactRateLimitResult {
  const now = Date.now();
  const current = contactRateLimitStore.get(identifier);

  if (!current || current.resetAt <= now) {
    contactRateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + WINDOW_MS,
    });

    return {
      allowed: true,
      retryAfterSeconds: Math.ceil(WINDOW_MS / 1000),
    };
  }

  if (current.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  contactRateLimitStore.set(identifier, current);

  return {
    allowed: true,
    retryAfterSeconds: Math.ceil((current.resetAt - now) / 1000),
  };
}

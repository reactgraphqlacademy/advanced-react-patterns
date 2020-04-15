export function hashGql(query, variables) {
  const body = JSON.stringify({ query, variables });

  return body.split("").reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
}

export function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const hit = args.reduce((acc, arg) => acc && acc.get(arg), cache);
    if (hit) {
      return hit;
    } else {
      let result = fn(...args);
      const lastArgIndex = args.length - 1;
      args.reduce((accCache, arg, i) => {
        const resultOrCache =
          i === lastArgIndex ? result : accCache ? accCache : new Map();
        accCache.set(arg, resultOrCache);
        return resultOrCache;
      }, cache);

      return result;
    }
  };
}

export const createClient = ({ url }) => {
  return {
    query: async ({ query, variables }) => {
      const body = JSON.stringify({ query, variables });
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });

      return response.json();
    },
  };
};

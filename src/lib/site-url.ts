const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const configuredUrl = process.env.SITE_URL || (productionDomain && `https://${productionDomain}`);

export const siteUrl = configuredUrl ? new URL("/", configuredUrl).href : undefined;

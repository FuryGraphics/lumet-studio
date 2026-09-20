/**
 * Unsplash attribution helpers.
 *
 * The API guidelines require that a photographer's full name and Unsplash are
 * both credited and linked back, and that those links carry UTM parameters
 * naming the application. Everything that builds those links lives here so the
 * app name is set in exactly one place.
 *
 * UNSPLASH_APP_NAME must match the application name registered at
 * https://unsplash.com/oauth/applications, otherwise the referral traffic is
 * not attributed to this app.
 */
export const UNSPLASH_APP_NAME = "lc-studio";

const UTM = `utm_source=${UNSPLASH_APP_NAME}&utm_medium=referral`;

export type UnsplashPhoto = {
  /** Unsplash photo id, so a photo can be re-fetched or pinned later. */
  id: string;
  /** Unsplash's own description, used as the img alt text. */
  alt: string;
  /** Dominant color, painted behind the image so there is no flash on load. */
  color: string;
  width: number;
  height: number;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  photographer: {
    /** Full name, which is what the credit line must display. */
    name: string;
    username: string;
    profileUrl: string;
  };
};

/** Photographer profile link, UTM-tagged as the guidelines require. */
export function photographerUrl(photo: UnsplashPhoto): string {
  return `${photo.photographer.profileUrl}?${UTM}`;
}

/** Link back to Unsplash itself, UTM-tagged. */
export function unsplashUrl(): string {
  return `https://unsplash.com/?${UTM}`;
}

/**
 * Convert a news title to a URL-safe slug
 */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s\u4e00-\u9fff-]/g, '') // remove special chars but keep CJK
    .replace(/\s+/g, '-')                   // spaces to hyphens
    .replace(/-+/g, '-')                   // multiple hyphens to one
    .slice(0, 80)                          // limit length
}

/**
 * Decode a slug back to a search key (used to find original title in news list)
 */
export function decodeSlug(slug: string): string {
  return slug.replace(/-/g, ' ')
}

export function findSlug(slugsList, prefix) {
  let slug = slugsList.find(item => typeof item === 'string' && item.startsWith(prefix));
  if (slug) {
    slug = slug.substring(prefix.length);
  }
  return slug;
}

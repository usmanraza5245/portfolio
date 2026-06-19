export const PROFILE_QUERY = `*[_type == "profile"][0] {
  name, title, tagline, location, email, phone, github, linkedin, bio
}`;

export const SKILLS_QUERY = `*[_type == "skills"] | order(order asc) {
  category, items
}`;

export const PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  "id": id.current, title, description, tags, url, github, featured, year
}`;

export const EXPERIENCE_QUERY = `*[_type == "experience"] | order(order asc) {
  company, role, period, location, description, highlights
}`;

export const CERTIFICATIONS_QUERY = `*[_type == "certification"] | order(order asc) {
  title, issuer, url
}`;

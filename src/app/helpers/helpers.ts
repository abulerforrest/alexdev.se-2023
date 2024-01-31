export const slugify = (projectName: string) =>
  projectName.trim().toLocaleLowerCase().replace(" ", "-");

export * from './default-tags';

export const stripAndFilterTags = (tags: string) => {
  const commaSeparatedTags = tags.replace(/(;|\n)+/g, ',');

  const filteredTags = commaSeparatedTags.split(',')
    .filter(tag => tag.toString().trim())
    .filter(tag => !Number.isNaN(Number(tag)))
    .map(tag => Number(tag));

  return filteredTags;
};

export const tagsToString = (tags: number[]) => {
  return tags.join(',');
};

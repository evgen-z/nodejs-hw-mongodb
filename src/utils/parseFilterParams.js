const parseContactType = (contactType) => {
  const isString = typeof contactType === "string";
  if (!isString) return;

  const isType = (contactType) =>
    ["work", "home", "personal"].includes(contactType);

  if (isType(contactType)) return contactType;
};

const parseIsFavourite = (isFavourite) => {
  const isString = typeof isFavourite === "string";
  if (!isString) return;

  const string = isFavourite.toLowerCase();

  if (string === "true") return true;
  if (string === "false") return false;

  return;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    isFavourite: parsedIsFavourite,
    contactType: parsedContactType,
  };
};

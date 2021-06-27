const mapDBToModel = ({ id, title, body, tags, created_at, updated_at }) => {
  const newTags = tags;
  return {
    id,
    title,
    body,
    tags: newTags,
    createdAt: created_at,
    updatedAt: updated_at,
  };
};

module.exports = { mapDBToModel };

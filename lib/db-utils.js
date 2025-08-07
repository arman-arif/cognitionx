export function sanitizeModel(modelInstance) {
  const modelObject = modelInstance.toObject();

  const { _id, __v, ...updatedObj } = {
    id: modelObject._id.toString(),
    ...modelObject,
  };

  return updatedObj;
}

export function sanitizeModelArray(modelArray) {
  return modelArray.map((modelObj) => sanitizeModel(modelObj));
}

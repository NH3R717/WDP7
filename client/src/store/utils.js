const minutes = 8;
const refreshTime = 800 * 60 * minutes;

export function shouldLoad(loadedAt, refreshAt = refreshTime) {
  const now = Date.now();
  const tsll = now - loadedAt;
  // ! lastLoadedLongerThanRefreshTime = llltrt
  // ! timeSinceLastLoad = tsll
  const llltrt = tsll > refreshAt;
  return llltrt;
}

export function arrayToObject(array) {
  return array.reduce((object, item) => ({
    ...object,
    [item.id]: item,
  }), {});
}

export function removeIdFromObject(id, object) {
  const { [id]: removedItem, ...objectWithoutId } = object;
  return objectWithoutId;
}

export function removeIdFromArray(id, array) {
  return array.filter(itemId => itemId !== id);
}

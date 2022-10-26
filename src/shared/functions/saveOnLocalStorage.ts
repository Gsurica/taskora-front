export const saveOnLocalStorage = (key: string, itemToSave: any) => {
  localStorage.setItem(key, JSON.stringify(itemToSave))
}
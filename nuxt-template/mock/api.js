export const getUserInfo = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const obj = {
        name: `wang${id}`,
        id: id
      }
      resolve(obj)
    })
  })
}

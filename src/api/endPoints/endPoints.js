export const baseURL = 'https://wtsacademy.dedicateddevelopers.us/api'

//Access to product image
export const image = (media) => {
  return (
    `https://wtsacademy.dedicateddevelopers.us` + `/uploads/product/${media}`
  )
}

//Access to profile_pic
export const profile_pic = (media) => {
  return (
    `https://wtsacademy.dedicateddevelopers.us` +
    `/uploads/user/profile_pic/${media}`
  )
}

export const endPoints = {
  user: {
    singup: '/user/signup',
    signin: '/user/signin',
    profileDetails: '/user/profile-details',
  },
  product: {
    create: '/product/create',
    lists: '/product/list',
    delete: '/product/remove',
    productDetails:(id)=>`/product/detail/${id}`,
    update: '/product/update',
  },
}

const backendDomain = "http://localhost:8080"
const AllApi = {
    signUp :{
        url : `${backendDomain}/api/signup`,
        method : "post"
    },
    signIn :{
        url : `${backendDomain}/api/login`,
        method : "post"
    },
    current_user:{
         url : `${backendDomain}/api/user-details`,
        method : "get"
    },
    logout_user:{
        url:`${backendDomain}/api/logout`,
        method:"get"
    },
    allUser:{
        url:`${backendDomain}/api/all-users`,
        method:"get"
    },
    updateUser : {
        url : `${backendDomain}/api/update-user`,
        method : "post"
    },
    uploadProduct : {
        url : `${backendDomain}/api/upload-product`,
        method : 'post'
    },
    allProduct : {
        url : `${backendDomain}/api/get-product`,
        method : 'get'
    },
    updateProduct : {
        url : `${backendDomain}/api/update-product`,
        method : "post"
    },
    categoryProduct : {
        url : `${backendDomain}/api/get-categoryProduct`,
        method : 'get'
    },
    categoryWiseProduct : {
        url : `${backendDomain}/api/category-product`,
        method : 'post'
    },
    filterProduct : {
        url : `${backendDomain}/api/filter-product`,
        method : 'post'
    }
}
export default AllApi
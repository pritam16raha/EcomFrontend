const BackendDomain = "https://ecom-backend-pritam16rahas-projects.vercel.app"

const SummaryApi = {
    signUP : {
        url : `${BackendDomain}/ecom/register`,
        method : "post"
    },

    signIn : {
        url : `${BackendDomain}/ecom/login`,
        method : "post"
    },

    addNewProduct: {
        url: `${BackendDomain}/ecom/product/upload`,
        method: "post"
    },


    allProduct : {
        url : `${BackendDomain}/ecom/product/getAll`,
        method : 'get'
    },

    productDetails : {
        url : `${BackendDomain}/ecom/product/getOne/`,
        method : 'post'
    },

    addToCartProduct : {
        url : `${BackendDomain}/api/addtocart`,
        method : 'post'
    },

    addToCartProductView : {
        url : `${BackendDomain}/api/view-card-product`,
        method : 'get'
    },

    updateCartProduct : {
        url : `${BackendDomain}/api/update-cart-product`,
        method : 'post'
    },

    deleteCartProduct : {
        url : `${BackendDomain}/api/delete-cart-product`,
        method : 'post'
    },

    searchProduct : {
        url : `${BackendDomain}/api/search`,
        method : 'get'
    },

    filterProduct : {
        url : `${BackendDomain}/api/filter-product`,
        method : 'post'
    },

    userLogout : {
        url: `${BackendDomain}/ecom/logout`,
        method: "post"
    },

    userInfo: {
        url: `${BackendDomain}/ecom/getUser`,
        method: "get"
    },

    getAllUser: {
        url: `${BackendDomain}/ecom/getalluser`,
        method: "get"
    },

    deleteUser: {
        url: `${BackendDomain}/ecom/deleteuser/`,
        method: "delete"
    }
}

export default SummaryApi;
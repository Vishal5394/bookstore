import axios from "axios";

const headerConfig = {
    headers: { "x-access-token": localStorage.getItem('token') }
}
export const getBooksList = () => {
    let response = axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book', headerConfig)
    return response
    console.log('from datasrvice ')
}
export const addToCart = (id) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id.product_id}`,id, headerConfig)
    return response
    console.log('from datasrvice ')
}
export const addToAddress = (id) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`, headerConfig)
    return response
    console.log('from datasrvice ')
}

export const getCartList = () => {
    let response = axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items`, headerConfig)
    return response
    console.log('from datasrvice ')
}

export const UpdateCart = (id,input) => {
        let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`,input, headerConfig)
        return response
        console.log('from datasrvice ')
    }

export const addToWishlist = (id) => {
        let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`,id, headerConfig)
        return response
        console.log('from datasrvice ')
    }


    export const getWishlist = (id) => {
        let response = axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items`, headerConfig)
        return response
        console.log('from datasrvice ')
    }

    export const putAddress = (id) => {
        let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`,id, headerConfig)
        return response
        console.log('from datasrvice ')
    }

    export const addToOrder = (inputobj) => {
        let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order`,inputobj, headerConfig)
        return response
        console.log('from datasrvice ')
    }

    export const RemoveBookFromCart = (id) =>{
        let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`,headerConfig);
        return response;
        console.log('from datasrvice ')
      }

      export const RemoveBookFromWishlist = (id) =>{
        let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${id}`,headerConfig);
        return response;
        console.log('from datasrvice ')
      }
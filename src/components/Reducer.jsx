import { ADD_TO_CART_LIST, ADD_TO_CART_WISHLIST, SET_TOTAL_PRICE, REMOVE_SINGLE_ITEM, INCREACE_QUANTITY, PRODUCT_SUCCESS, DECREACE_QUANTITY, REMOVE_SINGLE_FROM_WISHLIST, SHOW_ONLY_SINGLE, INCREACE_DETAILS_SINGLEI_ITEM, DECREACE_DETAILS_SINGLEI_ITEM, ADD_TO_CART_LIST_FROM_SINGLE_DETAILS } from './Typed';


const Reducer = (state, action) => {
    const { type } = action

    if (type === PRODUCT_SUCCESS) {
        return {
            ...state,
            productItems: action.payload,
            dislayLoading: false

        }
    }


    if (type === ADD_TO_CART_LIST) {

        const UserCart = state.productItems.filter(item => {
            return item.id === action.payload

        })

        const userExists = function (passid) {
            return state.cartItem.some(function (el) {
                return el.id === passid;
            });
        }

        if (userExists(action.payload)) {
            return {
                ...state,
                cartItem: [...state.cartItem]
            }
        }
        return {
            ...state,
            cartItem: [...state.cartItem, ...UserCart]
        }
    }






    if (type === ADD_TO_CART_WISHLIST) {
        const UserCart = state.productItems.filter(item => {
            return item.id === action.payload

        })

        const userExists = function (passid) {
            return state.wishItem.some(function (el) {
                return el.id === passid;
            });
        }


        if (userExists(action.payload)) {
            return {
                ...state,
                wishItem: [...state.wishItem]
            }
        }

        return {
            ...state,
            wishItem: [...state.wishItem, ...UserCart]
        }

    }

    if (type === INCREACE_QUANTITY) {
        const newItem = state.cartItem.map(e => {
            if (e.id === action.payload) {

                let newAmount = e.amount + 1
                return {
                    ...e,
                    amount: newAmount
                }
            }
            return e
        })
        return {
            ...state,
            cartItem: newItem
        }
    }

    if (type === DECREACE_QUANTITY) {
        const newItem = state.cartItem.map(e => {
            if (e.id === action.payload && e.amount > 1) {

                let newAmount = e.amount - 1
                return {
                    ...e,
                    amount: newAmount
                }
            }
            return e
        })
        return {
            ...state,
            cartItem: newItem
        }
    }


    if (action.type === SET_TOTAL_PRICE) {
        let { total, amount } = state.cartItem.reduce(
            (cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const itemTotal = price * amount

                cartTotal.total += itemTotal
                cartTotal.amount += amount
                return cartTotal
            },
            {
                total: 0,
                amount: 0,
            }
        )
        total = parseFloat(total.toFixed(2))

        return { ...state, total, amount }
    }

    if (type === SHOW_ONLY_SINGLE) {
        const SingleItem = state.productItems.filter(e => {
            return e.id === action.payload
        })

        return {
            ...state,
            singleItem: SingleItem
        }

    }

    if (type === REMOVE_SINGLE_ITEM) {
        const RemainCartItem = state.cartItem.filter(cart => (cart.id) !== action.payload)
        return {
            ...state,
            cartItem: RemainCartItem
        }
    }
    if (type === REMOVE_SINGLE_FROM_WISHLIST) {
        const RemainWishItem = state.wishItem.filter(cart => (cart.id) !== action.payload)
        return {
            ...state,
            wishItem: RemainWishItem
        }
    }


    if (type === ADD_TO_CART_LIST_FROM_SINGLE_DETAILS) {


        const userExists = function (passid) {

            return state.cartItem.some(function (el) {
                return el.id === passid;
            });
        }

        if (userExists(action.payload)) {
            return {
                ...state,
                cartItem: [...state.cartItem]
            }
        }
        return {
            ...state,
            cartItem: [...state.cartItem, ...state.singleItem]
        }
    }



    if (type === INCREACE_DETAILS_SINGLEI_ITEM) {
        const newItem = state.singleItem.map(e => {
            if (e.id === action.payload) {

                let newAmount = e.amount + 1
                return {
                    ...e,
                    amount: newAmount
                }
            }
            return e
        })
        return {
            ...state,
            singleItem: newItem
        }
    }


    if (type === DECREACE_DETAILS_SINGLEI_ITEM) {
        const newItem = state.singleItem.map(e => {
            if (e.id === action.payload && e.amount > 1) {

                let newAmount = e.amount - 1
                return {
                    ...e,
                    amount: newAmount
                }
            }
            return e
        })
        return {
            ...state,
            singleItem: newItem
        }
    }

    return state
}

export default Reducer

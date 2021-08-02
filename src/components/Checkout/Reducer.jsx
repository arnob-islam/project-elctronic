import { COUNTRY_INFO_SUCCESS, SELECTOR_INFORMATION } from './Type';


const Reducer = (state, action) => {

    if (action.type === COUNTRY_INFO_SUCCESS) {
        return {
            ...state,
            selector: action.payload,
            setCheckoutLoading: false
        }
    }
    if (action.type === SELECTOR_INFORMATION) {
        return {
            ...state,
            userForm: action.payload
        }
    }

    return state
}
export default Reducer

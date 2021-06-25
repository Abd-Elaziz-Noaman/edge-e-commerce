import { getItems } from './items'
import { getInitialData } from '../Api'


export const handleInitialData = () => async (dispatch) => {
    const {items} = await getInitialData()
    console.log('items shared', items)
    dispatch(getItems(items))
    return {items}
}


// export function handleInitialData() {
//     return dispatch => {
//         return getInitialData().then(({ items }) => {
//             console.log('items shared', items)
//             dispatch(getItems(items));
//             return {items}
//         });
//     };
// }
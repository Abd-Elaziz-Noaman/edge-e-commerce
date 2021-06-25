import { _getItems } from './_DATA'



export const getInitialData= async ()=>{
    /* const response =  Promise.all([ _getItems() ])
            .then (( items ) => {
                console.log('itemsssssssssssssss', items)
                return {
                    items
                }
            } ); */
    const {items} = await _getItems()
    console.log('items Api', items)

    return {items}
}

import { useDispatch } from 'react-redux'
import { deleteAddress } from '../features/addresses/addressSlice'

function AddressItem({ address }) {
    const dispatch = useDispatch()

    return (
        <div className='address'>
            <h2>{address.street}</h2>
            <button onClick={() => dispatch(deleteAddress(address._id))} className='close'>
                X
            </button>
        </div>
    )
}

export default AddressItem
import React from 'react'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createAddress} from "../features/addresses/addressSlice";


function AddressForm() {
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        zip: '',
        county: '',
        country: '',
    })

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()
        dispatch(createAddress({address}));
         setAddress({
            street: '',
            city: '',
            state: '',
            zip: '',
            county: '',
            country: '',}
        )
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input id="street"
                           type="text"
                           name={address.street}
                           value={address.street}
                           placeholder='Street'
                           onChange={(e) =>
                               setAddress({...address, street: e.target.value})}
                    />

                    <input id='city'
                           type="text"
                           name={address.city}
                           value={address.city}
                           placeholder="City"
                           onChange={(e) =>
                               setAddress({...address, city: e.target.value})}
                    />

                    <input id='state'
                           type="state"
                           name={address.state}
                           value={address.state}
                           placeholder="State"
                           onChange={(e) =>
                               setAddress({...address, state: e.target.value})}
                    />

                    <input id='zip'
                           type="text"
                           name={address.zip}
                           value={address.zip}
                           placeholder="zip"
                           onChange={(e) =>
                               setAddress({...address, zip: e.target.value})}
                    />
                    <input id='county'
                           type="county"
                           name={address.county}
                           value={address.county}
                           placeholder="county"
                           onChange={(e) =>
                               setAddress({...address, county: e.target.value})}
                    />
                    <input id='country'
                           type="country"
                           name={address.country}
                           value={address.country}
                           placeholder="country"
                           onChange={(e) =>
                               setAddress({...address, country: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <button className='btn btn-block' type='submit'>
                        Add Address
                    </button>
                </div>
            </form>
        </section>
    )
}

export default AddressForm
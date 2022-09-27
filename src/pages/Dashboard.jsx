import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import AddressForm from "../components/AddressForm";
import Spinner from "../components/Spinner";
import {getAddresses, reset} from "../features/addresses/addressSlice";

function Dashboard(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const {addresses, isLoading, isError, message} = useSelector((state) =>
    state.addresses
    )

    useEffect(() => {
        if(isError){
            console.log(message);
        }
        if(!user) {
            navigate('/login')
        }

        dispatch(getAddresses())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, isError, message, dispatch])

    if(isLoading){
        return <Spinner />
    }
    return(
        <>
            <section className="heading">
                <h1>Welcome {user && user.name}</h1>
                <p>Properties Dashboard</p>
            </section>

            <AddressForm />
        </>
    )
}

export default Dashboard
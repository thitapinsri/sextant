import { useState, useEffect } from 'react';

const AddressDisplay = ({url}) => {
    const [ ipAddress, setIpAddress ] = useState(null)

    useEffect(()=> {
        fetch(url)
            .then(response => response.json())
            .then(data => setIpAddress(data.ip));
    }, [])

    return (
        <span className="AddressDisplay">
            {ipAddress}
        </span>
    )
}

export default AddressDisplay;

import { useState, useEffect } from "react";

export default function SelectedContact( {selectedContactId, setSelectedContactId }) {
// MAKE SURE THERE IS A BACK BUTTON FOR USER TO RETURN TO FULL CONTACT LIST 
// data from api is an object
// figure out what data you want to include
const [contact, setContact] = useState({});

useEffect(() => {
    async function fetchContact() {
    try {
        const response = await fetch (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const json = await response.json();
        setContact(json);

    } catch(error) {
        console.log(error);
    }
    }
    fetchContact();
}, [])

return (
    <div>
    {/* {console.log(contact.name)} */}
    
    <table>
        <thead>
            <tr>
                <th colSpan = "6">Contact info for {contact.name}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> </td>
            </tr>
        </tbody>

    </table>
    <button onClick={() => {
        setSelectedContactId(null);
    }}>Return</button>
    </div>
);

}

// {
//     "name": "Mrs. Jerald Schulist",
//     "username": "Antwan",
//     "email": "Coby_Zieme@libby.tv",
//     "address": {
//       "street": "Morissette Heights",
//       "suite": "Apt. 633",
//       "city": "Port Liashire",
//       }
//     },
//     "phone": "(663)839-3814 x845",
//     "website": "arvel.io",
//     "company": {
//       "name": "D'Amore-Krajcik",
//     }
//   }
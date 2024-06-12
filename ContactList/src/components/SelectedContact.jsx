import { useState, useEffect } from "react";

// deconstruct passed down selectedContactId and setSelectedContactId from props
export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState({});
  useEffect(() => {
    async function fetchContact() {
      try {
        // fetch user with selectedContactID as their id
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const json = await response.json();
        // set contact state
        setContact(json);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContact();
  }, []);
  return (
    <div>
      <table className="selected-contact-table">
        <thead>
          <tr>
            <th colSpan="6">
              Contact Info For{" "}
              <span className="contact-name">{contact.name}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="col-head">Username</td>
            <td className="col-head">Email</td>
            <td className="col-head">Address</td>
            <td className="col-head">Phone</td>
            <td className="col-head">Website</td>
            <td className="col-head">Company</td>
          </tr>
          <tr>
            <td>{contact.username}</td>
            <td>{contact.email}</td>
            <td>
              {/* will only access contact.address once data is loaded into contact from fetch */}
              {contact.address ? (
                <div>
                  <p>{contact.address.suite}</p>
                  <p>{contact.address.street}</p>
                  <p>{contact.address.city}</p>
                </div>
              ) : (
                ""
              )}
            </td>
            <td>{contact.phone}</td>
            <td>{contact.website}</td>
            {/* will only access contact.company once data is loaded into contact from fetch */}
            <td>{contact.company ? contact.company.name : ""}</td>
          </tr>
        </tbody>
      </table>
      {/* will reset selectedContactId to null and rerender full contact list from logic in App */}
      <button
        onClick={() => {
          setSelectedContactId(null);
        }}
      >
        Return
      </button>
    </div>
  );
}

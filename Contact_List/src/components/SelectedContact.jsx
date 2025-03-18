import { useEffect, useState } from "react";

export default function SelectedContact({ contactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}`
        );
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    }
    fetchContact();
  }, [contactId]);

  if (!contact) return <p>Loading contact details...</p>;

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Phone:</strong> {contact.phone || "No Phone Available"}
      </p>
      <p>
        <strong>Username:</strong> {contact.username}
      </p>
      <p>
        <strong>Address:</strong> {contact.address?.street},{" "}
        {contact.address?.city}
      </p>

      <button onClick={() => setSelectedContactId(null)}>Back to List</button>
    </div>
  );
}

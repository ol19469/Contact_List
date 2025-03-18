import React from "react";

export default function ContactRow({ contact, setSelectedContactId }) {
  return (
    <tr
      onClick={() => setSelectedContactId(contact.id)}
      style={{ cursor: "pointer" }}
    >
      <td>{contact.name || "N/A"}</td>
      <td>{contact.email || "N/A"}</td>
      <td>{contact.phone || "No Phone Available"}</td>
    </tr>
  );
}

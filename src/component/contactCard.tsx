import React from "react";

type ContactCardProps = {
  name: string;
  email: string;
  phone?: string; // optional
};

const ContactCard: React.FC<ContactCardProps> = ({ name, email, phone }) => {
  return (
    <div className="border p-4 rounded shadow-md w-80 bg-white">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700">📧 {email}</p>
      {phone && <p className="text-gray-700">📞 {phone}</p>}
    </div>
  );
};

export default ContactCard;

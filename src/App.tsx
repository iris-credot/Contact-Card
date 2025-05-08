import React from "react";
import ContactCard from "./component/contactCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 w-screen flex  justify-center items-center ">
      <ContactCard
        name="Alice Johnson"
        email="alice@example.com"
        phone="123-456-7890"
      />
    </div>
  );
}

export default App;

import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const getTicketById = async (id) => {
  const options = {
    cache: "no-store",
  };
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, options);

  if (!res.ok) {
    throw new Error("Failed to get ticket.");
  }

  return res.json();
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;

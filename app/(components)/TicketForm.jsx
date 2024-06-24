"use client";

import { useRouter } from "next/router";
import React, { useState } from "react";

const TicketForm = () => {
  //initial form
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  //set initial form by the variable
  const [formData, setFormData] = useState(startingTicketData);
  return <div>TicketForm</div>;
};

export default TicketForm;

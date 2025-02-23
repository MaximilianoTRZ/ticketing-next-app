import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/Tickets`, {
      cache: "no-store", // update data every time
    });
    return res.json();
  } catch (error) {
    console.log("Filed to get Tickets: ", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)), // Set removes the duplicates
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="md:grid grid-cols-2 xl:grid-cols-4 xs:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;

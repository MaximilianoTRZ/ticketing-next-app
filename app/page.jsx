import TicketCard from "./(components)/TicketCard";

const Dashboard = () => {
  return (
    <div className="p-5 ">
      <div className="md:grid grid-cols-2 xl:grid-cols-4 xs:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;

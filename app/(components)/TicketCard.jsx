import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
      </div>
      <div className="ml-auto">
        <DeleteBlock />
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        this is the ticket description, please do this to solve the problem!
      </p>
      <div className="flex grow"></div>
      <div className="flex flex-col">
        <p className="text-xs my-1">10/11/24 13:50pm </p>
        <ProgressDisplay />
      </div>
      <div className="ml-auto items-end">
        <StatusDisplay />
      </div>
    </div>
  );
};

export default TicketCard;

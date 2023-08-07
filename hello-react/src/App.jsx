import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskCard from "./TaskCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-white-500 p-4 text-left">
        <h2 className="text-black text-3xl font-bold mb-2">Smarter Tasks</h2>
        <p className="text-black">
          <strong>Project:</strong>{" "}
          <span>Graduation Final Year project (Revamp College Website)</span>
        </p>
      </div>

      <section className="flex flex-row flex-wrap justify-between font-bold mt-4">
        <div className="border-2 border-gray-500 md:w-5/12 rounded-3xl p-4 pb-32 mb-4">
          <h1 className="text-center text-gray-500 text-2xl">pending</h1>
          <TaskCard
            title="Build website with static content"
            dueDate="10th April"
            assigneeName="Rohit S"
          />
          <TaskCard
            title="Add Blog"
            dueDate="22nd March"
            assigneeName="Rohit M"
          />

          <div className="bg-gray-300 p-2 rounded">
            <h3 className="font-semibold text-xl text-gray-500 ">+ New Task</h3>
          </div>
        </div>
        <div className="border-2 border-gray-500 md:w-5/12 rounded-3xl p-4">
          <h1 className="text-center text-gray-500 text-2xl">done</h1>
          <TaskCard
            title="Design the mockup"
            completedAtDate="10th April"
            assigneeName="Rohit M"
          />
          <TaskCard
            title="Get Approval from principal"
            completedAtDate="20th April"
            assigneeName="Ajay S"
          />
        </div>
      </section>
      {/* <div className="flex px-2.5">
        <div className="w-1/2 border border-white-10 rounded-2xl p-4 mr-4 text-left fill-c">
          <h2 className="text-black text-2xl font-bold mb-2 text-center">
            Pending
          </h2>
          <TaskCard
            title="Build the website with static content"
            dueDate="10th April"
            assigneeName="Rohit S"
          />
          <TaskCard
            title="Add a Blog"
            dueDate="22nd March"
            assigneeName="Rohit M"
          />

          <div className="button">
            <button
              type="button"
              className=" hover:bg-white-600 text-black font-bold py-2 px-4 rounded "
            >
              <p>+ New Task</p>
            </button>
          </div>
        </div>
        <div className="w-1/2 border border-white-10 rounded-2xl p-4 ml-4 text-left">
          <h2 className="text-black text-2xl font-bold mb-2 text-center">
            Done
          </h2>
          <TaskCard
            title="Design the mockup"
            completedAtDate="10th April"
            assigneeName="Rohit M"
          />
          <TaskCard
            title="Get the approval from principal"
            completedAtDate="20th April"
            assigneeName="Ajay S"
          />
        </div>
      </div> */}
    </>
  );
}

export default App;

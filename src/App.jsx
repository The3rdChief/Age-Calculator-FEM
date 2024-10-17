/* eslint-disable no-unused-vars */
import "./App.css";
import { useState, useRef } from "react";

function App() {
  // inputs
  const dayInputRef = useRef(null);
  const monthInputRef = useRef(null);
  const yearInputRef = useRef(null);
  // // error messages
  const errorYr = useRef(null);
  const errorMonth = useRef(null);
  const errorDay = useRef(null);
  // // displays
  const dayDisp = useRef(null);
  const monthDisp = useRef(null);
  const yearDisp = useRef(null);
  // // calculate button
  const calcBtn = useRef(null);

  const calculateAge = () => {
    checkDate(dayInputRef, errorDay);
    checkDate(monthInputRef, errorMonth);
    checkDate(yearInputRef, errorYr);

    if (
      dayInputRef.current.dataset.state == "valid" &&
      yearInputRef.current.dataset.state == "valid" &&
      monthInputRef.current.dataset.state == "valid"
    ) {
      let birthday = `${monthInputRef.current.value}/${dayInputRef.current.value}/${yearInputRef.current.value}`;
      let birthdayObj = new Date(birthday);
      let ageDiffInMs = Date.now() - birthdayObj;
      let ageDate = new Date(ageDiffInMs);

      let ageDay = ageDate.getUTCDay();
      let ageMonth = ageDate.getUTCMonth();
      let ageYear = ageDate.getUTCFullYear() - 1970;

      dayDisp.current.textContent = ageDay;
      monthDisp.current.textContent = ageMonth;
      yearDisp.current.textContent = ageYear;
    } else {
      return;
    }
  };

  let [currentDate, setCurrentDate] = useState(new Date());
  let currentYear = currentDate.getFullYear();

  const checkDate = (input, error) => {
    if (!input.current.checkValidity()) {
      input.current.style.borderColor = "hsl(0, 100%, 67%)";
      input.current.dataset.state = "invalid";
      if (+input.current.value.length < 1 || input.current.value === 0) {
        error.current.textContent = "This field is required";
      } else {
        error.current.textContent = "Must be a valid date";
      }
      return;
    } else {
      if (input.current.value == "") {
        error.current.textContent = "This field is required";
        input.current.style.borderColor = "hsl(0, 100%, 67%)";
        return;
      } else {
        input.current.style.borderColor = "";
        error.current.textContent = "";

        input.current.dataset.state = "valid";
      }
    }
  };

  return (
    <main className="h-dvh bg-Off_white grid place-items-center py-12">
      <section className="bg-white p-10 rounded-xl rounded-br-[8rem] flex flex-col gap-6 w-11/12 max-w-xl">
        {/* input form */}
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(4rem,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(6rem,_1fr))] gap-6 [&_label]:uppercase [&_label]:tracking-widest [&_label]:font-medium [&_label]:text-xs [&_label]:text-Smokey_grey [&_input]:text-lg sm:[&_input]:text-xl sm:[&_input]:max-w-36 [&_input]:max-w-24 [&_input]:font-medium [&_input]:rounded-md [&_input]:border [&_input]:border-Light_grey [&_input]:px-2 sm:[&_input]:px-5 [&_input]:py-2.5 [&_input]:outline-none">
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="day">Day</label>
            <input
              type="number"
              id="day"
              placeholder="DD"
              min={1}
              max={31}
              ref={dayInputRef}
              data-state="invalid"
              onChange={() => checkDate(dayInputRef, errorDay)}
              className="focus-within:border-Purple"
            />
            <p
              id="error-day"
              ref={errorDay}
              className="absolute top-[105%] italic text-Light_red text-[0.6rem]"
            ></p>
          </div>
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="month">Month</label>
            <input
              type="number"
              id="month"
              placeholder="MM"
              min={1}
              max={12}
              data-state="invalid"
              ref={monthInputRef}
              onChange={() => checkDate(monthInputRef, errorMonth)}
              className="focus-within:border-Purple"
            />
            <p
              id="error-month"
              ref={errorMonth}
              className="absolute top-[105%] text-[0.6rem] text-Light_red"
            ></p>
          </div>
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="year">Year</label>
            <input
              type="number"
              id="year"
              placeholder="YYYY"
              min={1}
              max={currentYear}
              maxLength={4}
              ref={yearInputRef}
              data-state="invalid"
              className="focus-within:border-Purple"
              onChange={() => checkDate(yearInputRef, errorYr)}
            />
            <p
              id="error-year"
              ref={errorYr}
              className="absolute top-[105%] text-[0.6rem] text-Light_red"
            ></p>
          </div>
        </div>
        {/* end of input form */}

        {/* fn button */}
        <div className="flex justify-center sm:justify-end relative isolate before:-z-10 before:absolute before:content-[''] before:border-t before:border-Light_grey before:top-1/2 before:left-0 before:right-0 before:-translate-y-1/2">
          <button
            id="calc-btn"
            ref={calcBtn}
            onClick={() => calculateAge()}
            className="rounded-full p-4 bg-Purple size-[4rem] overflow-hidden relative group active:scale-95 active:shadow-xl"
          >
            <img
              src="../public/images/icon-arrow.svg"
              alt=""
              className="size-9 absolute transition-all duration-300 -top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:top-1/2"
            />
            <img
              src="../public/images/icon-arrow.svg"
              alt=""
              className="size-9 absolute transition-all duration-300 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:top-[200%]"
            />
          </button>
        </div>
        {/* end of fn button */}

        {/* display section */}
        <div className="flex flex-col text-5xl sm:text-6xl italic font-bold [&_span]:pr-2 [&_span]:text-Purple">
          <p>
            <span id="year-display" ref={yearDisp}>
              --
            </span>
            years
          </p>
          <p>
            <span id="month-display" ref={monthDisp}>
              --
            </span>
            months
          </p>
          <p>
            <span id="day-display" ref={dayDisp}>
              --
            </span>
            days
          </p>
        </div>
        {/* end of display section */}
      </section>
      {/* <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </main>
  );
}

export default App;

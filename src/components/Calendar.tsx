import { createSignal, For } from "solid-js";
import { dayInfo, daysCurrentMonth, numberDaysByMonth } from "../utils/calendar.utils";

export const Counter = () => {
  console.log(dayInfo())

  return (
    <div>
      <For each={dayInfo()}>
        {(item, index) =>
          <li
            style={{
              color: index() % 2 === 0 ? "red" : "blue"
            }}
          >
            {item.day}
          </li>
        }
      </For>
    </div>
  );
}
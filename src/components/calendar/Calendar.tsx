import { createSignal, For, onMount, Show } from "solid-js";
import { currentDayID, currentMonth, currentYear, dayInfo, MONTHS } from "../../utils/calendar.utils";

export const Calendar = () => {

  let refDay: HTMLElement;
  const [selectedDate, setSelectedDate] = createSignal(currentDayID);

  onMount(() => {
    refDay?.scrollIntoView({
      inline: 'center',
      behavior: 'instant',
      block: 'nearest',
    })
  })

  const onSelectDate = (elementId: string) => {
    setSelectedDate(elementId)
    document.getElementById(elementId)?.scrollIntoView({
      inline: 'center',
      behavior: 'smooth',
      block: 'nearest',
    })
  }

  return (
    <div class='pt-5 w-full'>
      <div class='relative flex items-center py-3 h-full'>
        <p class='text-2xl font-bold relative text-center w-full'>
          {currentYear}
        </p>
        <Show
          when={selectedDate() !== currentDayID}
          fallback={<button class='absolute right-5 hidden cursor-pointer'>Today</button>}
        >
          <button class='absolute right-5 cursor-pointer' onclick={() => onSelectDate(currentDayID)}>Today</button>
        </Show>
      </div>

      <p class='text-center text-md tracking-wide'>{MONTHS[currentMonth]}</p>

      <div class='flex overflow-x-scroll overflow-y-hidden px-9 py-4'>
        <For each={dayInfo()}>
          {(item) =>
            <li
              id={item.id}
              accessKey={item.id}
              onclick={() => onSelectDate(item.id)}
              class={`
                ${item.isCurrentDate && 'bg-sky-950 text-white font-semibold'} 
                ${item.id === selectedDate() && !item.isCurrentDate && 'bg-sky-300'} 
                flex rounded-xl flex-col list-none text-center p-3 cursor-pointer mx-2 hover:bg-sky-300
              `}
              ref={el => {
                if (item.isCurrentDate) refDay = el
              }}
            >
              <span>
                {item.label.slice(0, 3)}
              </span>
              <span>
                {item.day}
              </span>
            </li>
          }
        </For>
      </div>
    </div>

  );
}
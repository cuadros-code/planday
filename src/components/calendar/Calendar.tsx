import styles from './calendar.module.css'
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

  const onSelectDate = ( elementId: string ) => {
    setSelectedDate(elementId)
    document.getElementById(elementId)?.scrollIntoView({
      inline: 'center',
      behavior: 'smooth',
      block: 'nearest',
    })
  }

  return (
    <div class={`${styles.container}`}>
      <div class={`${styles.yearContainer}`}>
          <p class={`${styles.year}`}>{ currentYear }</p>
            <Show 
              when={selectedDate() !== currentDayID} 
              fallback={<button class={`${styles.today}`}>Today</button>}
            >
              <button onclick={() => onSelectDate(currentDayID)}>Today</button>
            </Show>
      </div>
      <p class={`${styles.month}`}>{ MONTHS[currentMonth] }</p>
      <div class={`${styles.calendar}`}>
        <For each={dayInfo()}>
          {(item) =>
            <li
              id={item.id}
              accessKey={item.id}
              onclick={() => onSelectDate(item.id)}
              class={`
                ${item.isCurrentDate && styles.currentDay} 
                ${item.id === selectedDate() && !item.isCurrentDate && styles.selected} 
                ${styles.listItem}
              `}
              ref={el => { 
                if(item.isCurrentDate) refDay = el
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
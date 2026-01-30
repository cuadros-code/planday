import { useStore } from "@nanostores/solid";
import { createEffect } from "solid-js";
import { isNewHabit } from '../store/new-habit.store';

export const NewHabitModal = () => {

  let modalRef!: HTMLDialogElement;
  const $isNewHabit = useStore(isNewHabit);

  createEffect(() => {
    if ($isNewHabit()) {
      modalRef?.showModal();
    }
  });

  const closeModal = () => {
    isNewHabit.set(false)
    modalRef.close();
  }


  return(
    <dialog
      ref={el => modalRef = el}
    >
      <p>I'm a dialog.</p>
    <button onclick={closeModal}>Close</button>
    </dialog>
  )
}
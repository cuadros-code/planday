import styles from './modal.module.css'
import { useStore } from "@nanostores/solid";
import { isNewHabit } from "../../store/new-habit.store";
import { createEffect } from "solid-js";

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
      class={` ${styles.modal}`}
      ref={el => modalRef = el}
    >
      <p>I'm a dialog.</p>
    <button onclick={closeModal}>Close</button>
    </dialog>
  )
}
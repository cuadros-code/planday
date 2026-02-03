import { useStore } from '@nanostores/solid';
import { CheckItem } from './CheckItem';
import { menuState } from '../store/menu.store';


export const ToDoSection = () => {

  const isOpenMenu = useStore(menuState)

  const toggleMenu = () => {
    menuState.set({
      ...menuState.get(),
      todoSection: !menuState.get().todoSection
    })
  }

  return (
    <div class="h-full w-full flex justify-end p-2">
      <aside class="relative flex gap-2 bg-indigo-950 rounded-xl w-4/5 sm:w-2/12 p-4 h-full flex-col">
        <button onclick={toggleMenu} class='text-white font-bold w-7 h-10 bg-indigo-950 rounded-sm cursor-pointer'>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFF">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M4 6H20M4 12H14M4 18H9" stroke="#FFF" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"></path>
            </g>
          </svg>
        </button>
        <p class="text-zinc-300 text-xs font-bold text-center">TODAY</p>
        
        <div class="flex flex-col gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-sm max-w-md w-full p-3">
          <CheckItem checked={true} />
          <CheckItem checked={false} />

          <section class="flex justify-center border-t border-amber-50/15 mt-1 pt-1">
            <button class="text-2xl text-teal-50 cursor-pointer transition-all duration-300 hover:scale-125">
              +
            </button>
          </section>
        </div>
      </aside>
    </div>
  )
}
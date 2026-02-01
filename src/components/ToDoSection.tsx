import { CheckItem } from './CheckItem';


export const ToDoSection = () => {
  return (
    <div class="h-full w-full flex justify-end p-2">
      <aside class="flex gap-2 bg-indigo-950 rounded-xl w-2/12 p-4 h-full flex-col">
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
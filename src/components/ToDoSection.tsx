

export const ToDoSection = () => {
  return (
    <div class="h-full w-full flex justify-end p-2">
      <aside class="flex gap-2 bg-indigo-950 rounded-xl w-2/12 p-4 h-full flex-col">
        <p class="text-zinc-300 text-xs font-bold text-center">TODAY</p>
        
        <div class="flex flex-col gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-sm max-w-md w-full p-3">
          <label class="flex items-center gap-2 cursor-pointer text-white">
            <input
              type="checkbox"
              name="newsletter"
              checked={true}
              class="appearance-none w-4 h-4 border-2 border-gray-400 rounded
                    grid place-content-center
                    before:content-[''] before:w-2.5 before:h-2.5
                    before:scale-0 before:transition-transform before:duration-150
                    before:bg-green-200
                    before:[clip-path:polygon(14%_44%,0_65%,50%_100%,100%_16%,80%_0%,43%_62%)]
                    checked:before:scale-100 checked:border-green-200"
            />
            <span>Subscribe to newsletter</span>
          </label>

          <label class="flex items-center gap-2 cursor-pointer text-white">
            <input
              type="checkbox"
              name="newsletter"
              class="appearance-none w-4 h-4 border-2 border-gray-400 rounded
                    grid place-content-center
                    before:content-[''] before:w-2.5 before:h-2.5
                    before:scale-0 before:transition-transform before:duration-150
                    before:bg-green-200
                    before:[clip-path:polygon(14%_44%,0_65%,50%_100%,100%_16%,80%_0%,43%_62%)]
                    checked:before:scale-100 checked:border-green-200"
            />
            <span>Make the bed</span>
          </label>

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
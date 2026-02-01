
interface CheckboxItemProps {
  checked: boolean
}

export const CheckItem = (props: CheckboxItemProps) => {

  return (
    <label class="flex items-center gap-2 cursor-pointer text-white">
      <input
        type="checkbox"
        checked={props.checked}
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
  )
}
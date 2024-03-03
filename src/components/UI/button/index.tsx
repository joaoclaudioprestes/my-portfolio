type ButtonProps = {
  content: any
  important?: boolean
  link?: string
}


export const Button = ({content, important, link}: ButtonProps) => {
  return (
    <button className={`w-fit py-3 px-5 bg-white border border-1 border-black rounded-[15px] text-md ${important && `bg-black text-white`}`}>
      <a href={link} className="decoration-none">{content}</a>
    </button>
  )
}

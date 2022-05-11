import React from "react"

export default function Button({
  children,
  customClass,
  onClick,
  btnType = "default",
}) {
  const buttonType = [
    {
      type: "primary",
      cssClass: "text-white bg-theme hover:bg-theme-hover",
    },
    { type: "default", cssClass: "bg-gray-100 hover:bg-gray-200 " },
  ]
  return (
    <button
      className={`border-0 py-2 px-6 focus:outline-none rounded text-lg ${customClass} ${
        buttonType.filter((btn) => btn.type === btnType)[0].cssClass
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

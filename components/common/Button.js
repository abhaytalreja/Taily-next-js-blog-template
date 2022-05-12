import React from "react"

export default function Button({
  children,
  customClass,
  onClick,
  disabled,
  btnType = "default",
}) {
  const buttonType = [
    {
      type: "primary",
      cssClass: "text-white bg-theme hover:bg-theme-hover",
    },
    { type: "default", cssClass: "bg-gray-100 hover:bg-gray-200 " },
    {
      type: "outline",
      cssClass: `text-theme bg-white border-2 outline border-theme ${
        disabled
          ? "disabled:opacity-100 text-slate-300 bg-slate-50"
          : "hover:bg-theme hover:text-white"
      }`,
    },
  ]
  return (
    <button
      className={`border-0 py-2 px-6 focus:outline-none rounded text-lg ${customClass} ${
        buttonType.filter((btn) => btn.type === btnType)[0].cssClass
      } ${disabled && "disabled:opacity-100"}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

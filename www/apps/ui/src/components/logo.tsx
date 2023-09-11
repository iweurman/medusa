import * as React from "react"

type LogoProps = React.SVGProps<SVGSVGElement>

const Logo = (props: LogoProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.245 3.92183L12.1691 1.57686C10.8355 0.807712 9.20137 0.807712 7.86778 1.57686L3.77309 3.92183C2.45829 4.69098 1.63184 6.11673 1.63184 7.63627V12.345C1.63184 13.8833 2.45829 15.2903 3.77309 16.0594L7.84899 18.4231C9.18258 19.1923 10.8167 19.1923 12.1503 18.4231L16.2262 16.0594C17.5598 15.2903 18.3674 13.8833 18.3674 12.345V7.63627C18.405 6.11673 17.5786 4.69098 16.245 3.92183ZM10.009 14.1834C7.69873 14.1834 5.82044 12.3075 5.82044 10C5.82044 7.69255 7.69873 5.81657 10.009 5.81657C12.3193 5.81657 14.2164 7.69255 14.2164 10C14.2164 12.3075 12.3381 14.1834 10.009 14.1834Z"
        fill="currentColor"
      />
    </svg>
  )
}

export { Logo }
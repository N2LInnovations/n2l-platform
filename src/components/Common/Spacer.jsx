const Spacer = ({ xxl, xl, lg, md, sm, unique }) => {
  if (unique) {
    xxl = xl = lg = md = sm = unique
  }
  return (
    <div
      className="ptf-spacer"
      style={{
        '--ptf-xxl': `${xxl}rem`,
        '--ptf-xl': `${xl}rem`,
        '--ptf-lg': `${lg}rem`,
        '--ptf-md': `${md}rem`,
        '--ptf-sm': `${sm}rem`,
      }}
    ></div>
  )
}

export default Spacer

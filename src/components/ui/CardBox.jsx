const CardBox = ({ children, className }) => {
  return (
    <div className={`px-8 py-4 bg-darkBlue-100 rounded-lg border border-darkBlue-200 ${className}`}>
        {children}
    </div>
  )
}

export default CardBox
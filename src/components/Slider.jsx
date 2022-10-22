const Slider = ({ onclick, nav, className, index, setIndex, thumbImages, mainImages }) => {
      
      const changeIndex = (type) => {

        if(type === 'inc') setIndex( index => (index === 3 ? 0 : index + 1) );
        else setIndex( index => (index === 0 ? 3 : index - 1) );  
    }

  return (
    <>
        <div className='main-img'>
            <img src={mainImages[index]} alt="" onClick={onclick}  />
            {<div className={`${className ? 'large' : ''}`}><span onClick={() =>changeIndex('dec')} className='prev'>
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
            </span>
            <span className='next' onClick={() =>changeIndex('inc')}>
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
            </span></div>}
        </div>
        <ul className='img-items'>
            {
            thumbImages.map( (image, i) => (
                <li key={i} className={i === index ? 'active' : ''}>
              <img onClick={() => setIndex(i)} src={image} />
            </li>
            ))}
        </ul>
    </>
  )
}

export default Slider
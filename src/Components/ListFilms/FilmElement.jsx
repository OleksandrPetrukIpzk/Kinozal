
export const FilmElement = (item) => {

    return (<div className='element' key={item.title}>
        <img className='img' src={item.img}/>
        <div>
            <p>{item.title}</p>
            <p>{item.price} Грн</p>
            <button className='order'>Замовити білет</button>
        </div>
    </div>)
}
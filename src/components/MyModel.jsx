
const MyModel = ({btnText}) => {
    return (
        <>
            <div className="container mx-auto">
                <button className='bg-pink-600 text-white px-6 py-3 rounded-sm cursor-pointer my-5 text-[20px] transition-all delay-150 duration-300 ease-in-out hover:bg-pink-800 hover:shadow-lg/40 hover:shadow-gray-950'>{btnText}</button>
                <p className='text-lg/8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veritatis ut neque adipisci explicabo pariatur, repudiandae saepe distinctio odit molestiae odio, iure dolor? Officia enim nostrum nesciunt rerum cum distinctio voluptatibus fuga maiores perferendis, iure perspiciatis rem, ut laboriosam sit obcaecati numquam aut ex quae! Error autem amet magnam ratione.</p>
            </div>
        </>
    )
}

export default MyModel
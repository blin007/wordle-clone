
const EndGameModal = (props) => {

    return (
        //set the background
        <div className='fixed backdrop-blur-sm h-full w-full flex items-center'>
            {/*Modal container*/}
            <div className='bg-white w-96 h-96 flex flex-col rounded-lg shadow-xl mb-72 mt-12 ml-80'>
                {/*Display game result*/}
                <div className='text-center m-6 font-bold text-2xl'>
                    {props.result}
                    <div className='text-center mt-24'>
                        {props.message}
                    </div>
                </div>
                {/*footer for buttons*/}
                <div className='mt-24 flex justify-around items-center'>
                    <button className='h-10 w-24 cursor-pointer bg-red-500 rounded-lg hover:shadow-lg hover:bg-red-400'
                        onClick={() => props.close(false)}>Close</button>
                    <button className='h-10 w-24 cursor-pointer bg-blue-500 rounded-lg hover:shadow-lg hover:bg-blue-400'
                        onClick={() => window.location.reload()}>Play again</button>
                </div>
            </div>
        </div>
    )
}

export default EndGameModal;

import Layout from "./Layout";

const TutorialModal = (props) =>{
    return (
        <>
            <div className='backdrop-blur-sm h-full w-full flex justify-center items-center'>
                {/*Modal container*/}
                <div className='bg-white w-11/12 h-96 flex flex-col rounded-lg shadow-xl mb-72 py-2'>
                    <div className='text-center py-2 font-bold text-2xl'>
                        HOW TO PLAY
                    </div>
                    <p className='text-center py-4'>
                        Guess the word in 6 tries.
                        <br />
                        The word must be 5 letters.
                        <br />
                        After each guess, the color of the tiles will change to show how close your guess was to the word.
                    </p>
                    <div className='flex justify-center items-center'>
                        <p className='mr-2 font-bold'>Example:</p>
                        <Layout value={'w'} eval={'Correct'}/>
                        <Layout value={'e'} eval={'Present'}/>
                        <Layout value={'a'} eval={'Present'}/>
                        <Layout value={'r'} eval={'Present'}/>
                        <Layout value={'y'} eval={'Wrong'}/>
                    </div>
                    <p>
                        The letter W is in the correct spot!
                        <br/>
                        The letters E, A, and R are not in the correct spot!
                        <br/>
                        The letter Y is not in the word!
                        <br/>
                        A possible solution for this example could be WAGER
                    </p>
                    {/*footer for buttons*/}
                    <div className='py-6 flex justify-around items-center'>
                        <button className='h-10 w-32 cursor-pointer bg-red-500 rounded-lg hover:shadow-lg hover:bg-red-400'
                                onClick={() => props.close(false)}>MAKES SENSE!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TutorialModal;

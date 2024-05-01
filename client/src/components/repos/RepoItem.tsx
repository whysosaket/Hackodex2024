

const RepoItem = () => {
  return (
    <>
    <div className='w-4/5 mx-auto flex justify-center align-middle border-b-2 border-blue-200 pt-8 pb-4'>
        <div className='left w-1/2'>
            <h1 className='text-[1.2rem] font-semibold my-2'>ayush-Shandilya/STILLLEARN</h1>
            <div>
                <span className='text-[#FFC700]'>Lang: </span> HTML
                <span className='text-[#FF7A00] ml-3'>Stars: </span> 1
            </div>
        </div>
        <div className='right w-1/2 flex justify-end align-middle'>
            <button className='bg-[#5457A1] my-auto text-white px-4 py-1 rounded-xl font-semibold hover:bg-[#5443A1] border border-[#5457A1]'>
                5 Issues
            </button>
        </div>
    </div>
    </>
  )
}

export default RepoItem
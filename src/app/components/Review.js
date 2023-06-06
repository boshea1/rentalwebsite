import Image from 'next/image';

const Review = ({name,rev, stars}) => {
 
      var a = []
      for (let i = 0; i < `${stars}`; i++){
        a.push(
          <Image src='/star.png'
          width={30}
          height={30}
          alt='alt'/>
    )} 
      
  return (
    <div className='p-2 h-60 w-72 border m-3 border-gray-300 shadow-lg border-2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
        <div className='flex justify-end'>
 {a}
    </div>
        <b>
            {name}
        </b>
            <br/>
        {rev}
    </div>
  )
}

export default Review
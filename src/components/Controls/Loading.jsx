import spinner from '../../assets/spinner.svg'

export default function Loading(){
    return(
        <div className='w-full flex flex-row justify-center items-center'>
            <img src={spinner} alt="spinner" width='60px' className='' />
        </div>
    )
}
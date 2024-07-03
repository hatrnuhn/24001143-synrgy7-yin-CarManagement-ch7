import { Dispatch, FC, SetStateAction } from "react"

const imageUrl = 'https://s3-alpha-sig.figma.com/img/61d5/c607/9b0783eff0746faff42854124b28e16c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D1A6lvMTKSqyG0Mz3soC~-eBeU4SLY81RkKnBQI0vU~zww-aubyYMqtIplRM6CTMlWCHPpCG~u0H4QCAbNGe5ZHtT83tWwuCi88HVAUSIqfHKTz60muBpvxUqYRu0tNsRWwRW--EQQaXELANPVa-C0obekacUeoE1tCjhg6gtv5vQYQjlqej9NoFo7VyHs9MICoMHSHUAX8gn81hG53nLtmPuajVvVgwMTOa1pPhEqjyZ955UuYLGlby0DHaoQQMjL7wiaOLr8~wtCaiNsvRZNq0hUOnqnz0Z2ULqIBSVEfKi961mMZuc6BZYvrACIecpO7YZITMI21y3H6H1zmGRg__'

type CarAddEditFailProp = {
    context: {
        isShowingSavingFail: boolean,
        setIsShowingSavingFail: Dispatch<SetStateAction<boolean>>,
        htmlFor: 'add' | 'edit'
    }
}

const CarAddEditFail: FC<CarAddEditFailProp> = ({context}) => {
    const {isShowingSavingFail, setIsShowingSavingFail, htmlFor } = context
    
    return (
        <div className={`${isShowingSavingFail ? 'flex' : 'hidden'} h-screen w-screen top-0 left-0 fixed justify-center items-center`} style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <div className="w-88 h-88 p-6 flex-col flex items-center justify-center bg-white rounded-md shadow-md gap-2 sm:w-68">
                <div className="w-full h-32 car-image" style={{backgroundImage: `url(${imageUrl})`}}/>
                <p className="font-bold mt-2">Oops!</p>
                <p>Gagal {htmlFor === 'add' ? 'menambahkan' : 'mengedit'}, silahkan coba lagi.</p>
                <div className="flex font-bold gap-2 mt-2">
                    <button onClick={() => setIsShowingSavingFail(false)} className="bg-bcr-danger text-white rounded-md px-3 py-2">Kembali {htmlFor === 'add' ? 'input data' : 'mengedit'}</button>
                </div>
            </div>
        </div>
    )
}

export default CarAddEditFail
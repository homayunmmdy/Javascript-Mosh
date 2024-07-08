import GradientBtn from '@/app/components/elements/GradientBtn'

export default function NotFound() {
    return (

        <div className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 text-blue-500">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">چیزی اشتباه شده</p>
                    <p className="mb-4 text-lg font-light text-gray-500">متأسفانه ما نمی توانیم این صفحه را پیدا کنیم اما مقالات بسیار شگفت انگیزی در صفحه اصلی داریم</p>
                    <div className='flex justify-center'>
                        <GradientBtn title="برگشت به خانه" link="/" />
                    </div>
                </div>
            </div>
        </div>
    )
}
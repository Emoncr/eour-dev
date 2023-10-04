import Image from "next/image"
import profile from '../public/assets/images/hero image.png'
const Home = () => {
    return (
        <section className="w-full section bg-brand-bg pb-0">
            <div className="inner md:grid gap-2 grid-cols-1 md:grid-cols-2 md:!pb-0 flex flex-col-reverse items-center content-center
             ">
                <div className="content_container md:grid items-start">
                    <div className="hero_content">
                        <p className="text-center text-primary-black font-semibold md:text-left">Hi there, My name is</p>
                        <h1 className="head_text text-center mt-0 md:text-left ">Biplob Hasan Emon</h1>
                        <p className="desc text-center md:text-left md:max-w-lg" >Create stunning portfolios and websites with Airfolio's UI/UX design and Webflow development services.</p>
                    </div>

                    {/* ==============Couple btn ========= */}
                    <div className="btn-container flex items-center justify-around md:justify-start max-w-[270px] md:max-w-[100%] mx-auto md:mr-auto md:ml-0">
                        <button className="brand_btn">Hire me</button>
                        <button className="brand_btn outline_brand_btn ml-3">Portfolio</button>
                    </div>
                </div>
                <div className="hero_image_cotainer">
                    <Image src={profile}
                        width={616}
                        height={581} />
                </div>
            </div>
        </section>
    )
}

export default Home
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slides from "./Slides";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay"
import SlidesSeclton from "./SlidesSeclton";

const MainSlider = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [recentSize] = useState(-5);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`/api/Posts`);
                setData(response.data.posts.slice(recentSize));
                setLoading(false)
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false)
            }
        };

        fetchData();
    }, [recentSize]);

    return (
        <div className="sm:p-3">
            {loading ? <SlidesSeclton /> : (
                <Swiper
                    modules={[Navigation, EffectFade, Autoplay]}
                    effect="fade"
                    spaceBetween={5}
                    slidesPerView={1}
                    navigation
                    loop={true}
                >
                    {data.map((filteredData, _index) => (
                        <SwiperSlide key={_index}>
                            <Slides id={_index} post={filteredData} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default MainSlider;
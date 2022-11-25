import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full" style={{ maxHeight: '550px' }}>
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://1.bp.blogspot.com/-6j0O7KLU44g/VycGES9Gr4I/AAAAAAAAAWY/IT8jC_2lDMQKuCFUrwMpudemZVYVDjeEwCLcB/s1600/country-wise-mobile-phones-import.png" className="w-full" alt='banner' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://3.imimg.com/data3/LJ/YA/MY-4197492/mobile-phones-500x500.jpeg" className="w-full" alt='Banner' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://www.melbournemobiles.com.au/media/wysiwyg/mobile-phones-banner.JPG" className="w-full" alt='Banner' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://dailytimes.com.pk/assets/uploads/2021/09/25/54-549724_new-all-mobile-png-transparent-png.jpg" className="w-full" alt='Banner' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
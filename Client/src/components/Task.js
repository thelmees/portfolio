import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';

function Task({ images = [], title, description }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-white rounded-lg shadow-lg p-4 md:p-8">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8 md:mb-12 text-[red] mt-5">
                {title}
            </h2>

            {/* Carousel */}
            <div className="w-full mx-auto mb-4 md:mb-8 p-4 md:p-8">
                <Slider {...settings}>
                    {(images || []).map((image, index) => (
                        <div key={index} className="px-1 md:px-2">
                            <img
                                src={image}
                                alt={`slide-${index}`}
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="w-full flex flex-col justify-center px-4 md:px-10 lg:px-20">
                <p className="text-lg md:text-xl leading-relaxed m-4 md:m-8">{description}</p>
                <ol className="list-disc pl-6 space-y-2 text-base md:text-xl m-4 md:m-10 mt-2 flex flex-col justify-center">
                    <li>
                        <strong className='text-[red]'>Hands-on experience in building responsive user interfaces with React.js:</strong> 
                        I leveraged React.js to create dynamic and interactive components that adapt seamlessly to 
                        different screen sizes. My familiarity with React components, props, state management, and 
                        Axios allowed me to implement a modular architecture, ensuring that each component was reusable 
                        and efficient. This not only improved development speed but also enhanced the overall user experience 
                        by providing smooth transitions and real-time updates.
                    </li>
                    <li>
                        <strong className='text-[red]'>Implemented state management techniques:</strong> 
                        To manage complex application state efficiently, I utilized state management techniques such as the 
                        Context API and Redux. By employing these techniques, I ensured that state changes were predictable 
                        and easily traceable, which is essential for debugging and maintaining the application. The centralized 
                        state management system enabled different parts of the application to communicate effectively, reducing 
                        the risk of bugs and improving the maintainability of the codebase.
                    </li>
                    <li>
                        <strong className='text-[red]'>Designed UI with UI libraries:</strong> 
                        I integrated popular UI libraries like Material-UI and Bootstrap to accelerate the design process and 
                        ensure a polished, professional look for the application. These libraries provided a wide range of 
                        pre-built components and styling options, which allowed for rapid prototyping and consistent design 
                        patterns across the application. By utilizing these tools, I was able to focus more on functionality 
                        while ensuring that the user interface was visually appealing and aligned with modern design principles.
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Task;
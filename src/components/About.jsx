import img1 from '../assets/header-img.svg'

import img3 from '../assets/309974230_474664721358281_4046496570687214642_n.jpg'
import img2 from '../assets/serverIcon.jpeg'
import img4 from '../assets/326191861_1144008916261788_892909400709766113_n.jpg'


const About = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-black via-black to-gray-800 rounded-lg pt-36 font-signature1">
      <div className="flex items-center">
        <img
          src={img1}
          alt="Me sitting with a laptop"
          className="w-1/3 ml-52"
        />
        <ul className="text-white flex flex-col gap-8 ml-16 font-semibold">
          <li className="flex items-center">
            <img src={img2} alt="Cursor icon" className=" w-12 mr-4" />
            <div>
              <h3 className="text-3xl font-semibold">Tribhuvan University</h3>
              <p className="text-gray-600 font-semibold">Bachelors in Computer Engineering</p>
        <p className="text-gray-600">2020 - 2024</p>
            </div>
          </li>
          <li className="flex items-center">
            <img src={img3} alt="Server icon" className="w-12 mr-4" />
            <div>
              <h3 className="text-3xl font-semibold">High School</h3>
              <p className="text-gray-600">Kathmandu Model College</p>
        <p className="text-gray-600">2018 - 2020</p>
            </div>
          </li>
          <li className="flex items-center">
            <img src={img4} alt="UI icon" className="w-12 mr-4" />
            <div>
              <h3 className="text-3xl font-semibold">School</h3>
              <p className="text-gray-600">Saipal Academy</p>
        <p className="text-gray-600">up to 2018</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

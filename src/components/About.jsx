import img1 from '../assets/aboutImage.png';
import img2 from '../assets/cursorIcon.jpeg';
import img3 from '../assets/serverIcon.png';
import img4 from '../assets/uiIcon.png';


const About = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-black via-black to-gray-800 rounded-lg pt-32 font-signature1">
      <div className="flex items-center">
        <img
          src={img1}
          alt="Me sitting with a laptop"
          className="w-1/3 ml-20"
        />
        <ul className="text-white flex flex-col gap-8 ml-8">
          <li className="flex items-center">
            <img src={img2} alt="Cursor icon" className=" w-12 mr-4" />
            <div>
              <h3 className="text-3xl font-semibold">Tribhuvan University</h3>
              <p className="text-gray-600 font-bold">Bachelors in Computer Engineering</p>
        <p className="text-gray-600">2020 - 2024</p>
            </div>
          </li>
          <li className="flex items-center">
            <img src={img3} alt="Server icon" className="w-8" />
            <div>
              <h3 className="text-3xl font-semibold">Backend Developer</h3>
              <p className="text-lg">
                I have experience developing fast and optimized back-end systems and APIs
              </p>
            </div>
          </li>
          <li className="flex items-center">
            <img src={img4} alt="UI icon" className="w-8" />
            <div>
              <h3 className="text-3xl font-semibold">UI Designer</h3>
              <p className="text-lg">
                I have designed multiple landing pages and have created design systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

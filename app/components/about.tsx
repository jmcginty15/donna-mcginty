// import about from "../assets/about.jpeg";
import photo1 from "~/assets/gallery/photo-1.jpeg";
import photo2 from "~/assets/gallery/photo-2.jpeg";
import photo4 from "~/assets/gallery/photo-4.jpeg";
import photo5 from "~/assets/gallery/photo-5.jpeg";
import photo3 from "~/assets/gallery/photo-6.jpg";

export default function About() {
  return (
    <div className="About">
      <div className="About-content">
        <h2 className="About-title">
          Donna J. McGinty: Christian, wife, mother, grandmother, educator,
          board of education member, lover of this great Republic of the United
          States.
          {/* She enjoys spending time with her family, reading, sewing, and
          hiking. */}
        </h2>
        <p className="About-p">
          Born the middle of eleven children, I learned the value of hard work
          and became an adept problem solver. After earning my BA in education,
          I pursued my career teaching Title I and Physical Education in rural
          Kansas. After a successful seven years, I was accepted at Washburn
          University School of Law where I earned my Juris Doctor.
        </p>
        <p className="About-p">
          I met and married my husband Chris and together we raised two sons. I
          now also have one daughter-in-law, and recently welcomed my first
          grandchild. After our sons were of school age, I returned to the
          classroom for twenty-three years. Additionally, she provides office
          assistance for her husband&apos;s small business. In the spring of
          2021, I ran for the Board of Education seat in Seaman USD 345 in
          Topeka, where I am now in my third year of service.
        </p>
        <p className="About-p">
          In May 2024, I finished my career in the classroom after nineteen
          years teaching Math at Eisenhower Middle School, Topeka USD 501.
          Believing I could make a difference in the governmental realm of the
          Great State of Kansas, I decided to run for Kansas Representative for
          District 57. My goal as a representative is to educate and empower my
          constituents to live to their fullest potential as provided in the
          Constitution of the United States.
        </p>
        <p className="About-p About-ul">
          To ensure quality of life for all Kansans, I stand for:
        </p>
        <ul className="About-ul">
          <li className="About-li">
            <span className="About-li-start">L</span> imited government
            <ul className="About-sub-ul">
              <li className="About-sub-li">
                Protect earnings & property of citizens
              </li>
              <li className="About-sub-li">Less taxes</li>
            </ul>
          </li>
          <li className="About-li">
            <span className="About-li-start">I</span> ndividual constitutional
            rights
            <ul className="About-sub-ul">
              <li className="About-sub-li">Life</li>
              <li className="About-sub-li">Liberty</li>
              <li className="About-sub-li">Pursuit of happiness</li>
            </ul>
          </li>
          <li className="About-li">
            <span className="About-li-start">F</span> ree enterprise
            <ul className="About-sub-ul">
              <li className="About-sub-li">Pro-consumer, pro-business</li>
              <li className="About-sub-li">
                Employee/employer - hard work & skill rewarded
              </li>
              <li className="About-sub-li">Less government regulation</li>
            </ul>
          </li>
          <li className="About-li">
            <span className="About-li-start">T</span> imeless truths
            <ul className="About-sub-ul">
              <li className="About-sub-li">There are moral absolutes</li>
              <li className="About-sub-li">
                Our government derives its authority from the consent of the
                governed
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="About-content About-galleryContainer">
        <img
          id="photo1"
          className="galleryPhoto"
          src={photo1}
          alt={"chris-and-donna-1"}
        />
        <img
          id="photo2"
          className="galleryPhoto"
          src={photo2}
          alt={"swearing-in"}
        />
        <img
          id="photo3"
          className="galleryPhoto"
          src={photo3}
          alt={"chris-and-donna-2"}
        />
        <img id="photo4" className="galleryPhoto" src={photo4} alt={"quilt"} />
        <img
          id="photo5"
          className="galleryPhoto"
          src={photo5}
          alt={"barn-quilt"}
        />
      </div>
    </div>
  );
}

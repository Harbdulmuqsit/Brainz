import { FaGifts } from "react-icons/fa";
import gifted from "../../src/img/Gifted-Brainz.png";
import picture from "../../src/img/image.jpg";
import { RiFlag2Fill } from "react-icons/ri";
import { BsFillCloudArrowUpFill } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Dashboardheader from "./Dashboardheader";

const Quiz = () => {
  return (
    <>
      <Dashboardheader />
      <section className="quiz-board">
        <div className="quiz-name">
          <div className="start-quiz">
            <div className="button">
              <button className="start-quiz-btn">Start Quiz</button>
            </div>

            <img src={gifted} alt="quiz-img" className="quiz-img" />
          </div>

          <div className="profile">
            <div className="img">
              <img src={picture} alt="profile-img" className="profile-img" />
            </div>

            <div className="profile-name">
              <h1>John Willis</h1>
              <p>Bonus Booster, 24 iv</p>

              <div className="progress-bar">
                <div className="bar-cover">
                  <div className="bar"></div>
                </div>

                <div className="winning-board">
                  <div className="wins">
                    <div className="game">
                      <RiFlag2Fill className="icons" />
                    </div>

                    <div className="game-wins">
                      <h2>27</h2>
                      <p>Game Wins</p>
                    </div>
                  </div>

                  <div className="wins">
                    <div className="game">
                      <BsFillCloudArrowUpFill className="icons" />
                    </div>
                    <div className="game-wins">
                      <h2>910</h2>
                      <p>Highest Score</p>
                    </div>
                  </div>

                  <div className="wins">
                    <div className="game">
                      <IoIosCheckmarkCircle className="icons" />
                    </div>

                    <div className="game-wins">
                      <h2>218</h2>
                      <p>Correct Answers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="achievement-board">
            <div className="achievement">
              <div>
                <h1>Achievements</h1>
              </div>

              <div className="achievement-bar-cover">
                <div className="achievement-bar"></div>
              </div>
            </div>

            <div className="boxes">
              <div className="boxx">
                <p class="box">
                  <FaGifts className="box-icon" />
                </p>
                <h4>Comeback</h4>
              </div>

              <div className="boxx1">
                <p class="box1">
                  <FaGifts className="box-icon" />
                </p>
                <h4>Lucky</h4>
              </div>

              <div className="boxx2">
                <p class="box2">
                  <FaGifts className="box-icon" />
                </p>
                <h4>Leader</h4>
              </div>
            </div>
          </div>

          <div className="inventory"></div>
        </div>
      </section>
    </>
  );
};

export default Quiz;

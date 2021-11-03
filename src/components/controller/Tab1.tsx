import "./Tab1.css";
import { Link } from "react-router-dom";
import ControlBlock from "./ControlBlock";
import Carousel from "react-elastic-carousel";

const Tab1: React.FC = () => {
  return (
    <div className="Tab1-body__background">
      <Carousel isRTL={false} itemsToShow={1}>
        <div>
          <div className="Tab1-body__blockWrapper">
            <ControlBlock imgURL="../assets/controller/thumnail-01-on.png" />
            <ControlBlock imgURL="../assets/controller/thumnail-02-on.png" />
            <ControlBlock imgURL="../assets/controller/thumnail-03-on.png" />
          </div>
          <div className="Tab1-body__blockWrapper">
            <ControlBlock imgURL="../assets/controller/thumnail-04-on.png" />
            <ControlBlock imgURL="../assets/controller/thumnail-05-on.png" />
            <ControlBlock imgURL="../assets/controller/thumnail-06-on.png" />
          </div>
          <div className="Tab1-body__blockWrapper">
            <ControlBlock imgURL="../assets/controller/thumnail-07-on.png" />
            <ControlBlock imgURL="../assets/controller/thumnail-08-on.png" />
            <ControlBlock imgURL="../assets/controller/thumnail-09-on.png" />
          </div>
          <div className="Tab1-body__blockWrapper">
            <ControlBlock imgURL="../assets/controller/thumnail-10-on.png" />
            <ControlBlock imgURL="../assets/controller/thumnail-11-on.png" />
            <ControlBlock imgURL="../assets/controller/thumnail-12-on.png" />
          </div>
        </div>
        <div>2</div>
        <div>3</div>
      </Carousel>

      <div className="Tab1-body__content--controller-wrapper">
        <div className="Tab1-body__content--controller">
          <div className="Tab1-body__content--controller-topWrapper">
            <div className="Tab1-body__content--controller-title">자연</div>
            <div className="Tab1-body__content--controller-buttons">
              <div className="Tab1-body__content--controller-buttons-heart">
                <img
                  src="../assets/controller/bar-button-heart-on.png"
                  alt=""
                />
              </div>
              <div className="Tab1-body__content--controller-buttons-prev">
                <img src="../assets/controller/bar-button-past-on.png" alt="" />
              </div>
              <div className="Tab1-body__content--controller-buttons-playPause">
                <img src="../assets/controller/bar-button-play-on.png" alt="" />
              </div>
              <div className="Tab1-body__content--controller-buttons-next">
                <img src="../assets/controller/bar-button-next-on.png" alt="" />
              </div>
            </div>
          </div>
          <div className="Tab1-body__content--controller-timeline">
            <input
              className="Tab1-body__content--controller-timeline-input"
              type="range"
              defaultValue={0}
            />
          </div>
          <div className="Tab1-body__content--controller-bottomWrapper">
            <div className="Tab1-body__content--controller-currentTime">
              0:00
            </div>
            <div className="Tab1-body__content--controller-maxTime">3:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab1;

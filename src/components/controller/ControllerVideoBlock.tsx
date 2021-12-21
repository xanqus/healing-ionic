import './ControllerVideoBlock.css';
import {Link} from 'react-router-dom';
import {executeCommand} from '../../socket/socket';

const ControllerVideoBlock: any = ({category, content, imgURL, currentIndex, socketCommand, index}: any) => {
  //console.log('category', category[currentIndex]);
  //console.log('content', content[currentIndex]);
  //console.log('imgURL', imgURL[currentIndex]);
  if (imgURL[currentIndex] === null) {
    return <></>;
  } else {
    return (
      <div className="ControllerVideoBlock-body__background">
        <Link
          className="videoLink"
          to={{
            pathname: '/controller/ControllerHealingVideoDetail',
            state: {
              imgURL: imgURL[currentIndex],
              category: category[currentIndex],
              content: content[currentIndex],
            },
          }}
          onClick={() => {
            executeCommand('BB', socketCommand[currentIndex]);
          }}
        >
          <div className="ControllerVideoBlock-body__block--wrapper" onClick={() => {}}>
            <div className="ControllerVideoBlock-body__block--imgCover">
              <img className="ControllerVideoBlock-body__block--img" src={imgURL[currentIndex]} alt="" />
              <div>{index + 1}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
};

export default ControllerVideoBlock;

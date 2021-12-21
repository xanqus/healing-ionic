import './ControllerVideoBlock.css';
import {Link} from 'react-router-dom';
import {executeCommand} from '../../socket/socket';

const ControllerVideoBlock: any = ({category, content, imgURL, currentTab, socketCommand, index}: any) => {
  //console.log('category', category[currentTab]);
  //console.log('content', content[currentTab]);
  //console.log('imgURL', imgURL[currentTab]);
  if (imgURL[currentTab] === null) {
    return <></>;
  } else {
    return (
      <div className="ControllerVideoBlock-body__background">
        <Link
          className="videoLink"
          to={{
            pathname: '/controller/ControllerHealingVideoDetail',
            state: {
              imgURL: imgURL[currentTab],
              category: category[currentTab],
              content: content[currentTab],
            },
          }}
          onClick={() => {
            executeCommand('BB', socketCommand[currentTab]);
          }}
        >
          <div className="ControllerVideoBlock-body__block--wrapper" onClick={() => {}}>
            <div className="ControllerVideoBlock-body__block--imgCover">
              <img className="ControllerVideoBlock-body__block--img" src={imgURL[currentTab]} alt="" />
              <div>{index + 1}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
};

export default ControllerVideoBlock;

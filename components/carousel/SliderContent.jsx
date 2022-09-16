import {css} from '@emotion/react'

function SliderContent(props) {
    const {width,translate} = props;
    const SliderContentCss = css`width:${props.width*3}px; height:100%; overflow:hidden; display:flex;transition:${props.transition}s;transform:translateX(${translate}px)`;
  return (
    <div className="SliderContent" css={SliderContentCss} >
      {
          props.children
      }
    </div>
  );
}



export default SliderContent;

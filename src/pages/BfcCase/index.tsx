import React from "react";
import "./index.less";

const BfcCase = (): JSX.Element => {
  return (
    <>
      {/* 1. 解决浮动元素导致的高度塌陷问题 */}
      {/* <div className="container">
       <div className="float-element">浮动的元素</div>
     </div> */}

      {/* 2. 清除浮动影响 */}
      {/* <div className="container">
       <div className="float-element">浮动的元素</div>
       <div className="normal-element">正常的元素</div>
     </div> */}

      {/* 3. 解决外边距重叠问题 */}
      <div className="container">
        <div className="element1">元素1</div>
        <div className="element2">元素2</div>
      </div>
    </>
  );
};

export default BfcCase;

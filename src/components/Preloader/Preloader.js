import React, { useRef, useEffect } from "react";
import {
  StyledPreloader,
  StyledPreloaderText,
  StyledPreloaderWrapper,
  StyledPreloaderLoader
} from "./Preloader.style";
import { animatePreloader } from "../../animation/preloader";

function Preloader() {
  const refMainContainer = useRef();
  const refTextContainer = useRef();
  const refText = useRef();

  useEffect(() => {
    animatePreloader(refText, refTextContainer, refMainContainer);
  }, []);

  return (
    <StyledPreloader ref={refMainContainer}>
      <StyledPreloaderWrapper ref={refTextContainer}>
        <StyledPreloaderText ref={refText}>
          Preparing the page builder.
        </StyledPreloaderText>
        <StyledPreloaderLoader className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </StyledPreloaderLoader>
      </StyledPreloaderWrapper>
    </StyledPreloader>
  );
}

export default Preloader;

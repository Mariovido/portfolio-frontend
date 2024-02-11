import { SpecialZoomLevel, Viewer } from '@react-pdf-viewer/core';
import { PdfProps } from '../../../models/interfaces/shared/Common/PdfProps';
import { CONSTANTS } from '../../../config/constants';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

import '@react-pdf-viewer/core/lib/styles/index.css';

function Pdf(props: Readonly<PdfProps>) {
  const { width } = useWindowDimensions();

  const { pdf } = props;

  const defaultScale =
    width >= CONSTANTS.minWidthPc
      ? SpecialZoomLevel.PageWidth
      : SpecialZoomLevel.ActualSize;

  return <Viewer fileUrl={pdf} defaultScale={defaultScale} />;
}

export default Pdf;

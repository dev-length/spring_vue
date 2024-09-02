import axios from 'axios';
export const downloadFile = async (fileUrl) => {
  try {
    const link = document.createElement('a'); // a 노드생성
    link.href = fileUrl; // a노드의href에다운로드파일url설정
    document.body.appendChild(link); // dom에추가
    link.click(); // click 이벤트강제발생
    document.body.removeChild(link); // dom에서제거
  } catch (error) {
    console.error(error);
  }
};

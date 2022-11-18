import React from 'react'
import { IoMdCheckmarkCircle, IoMdRefresh } from "react-icons/io";
import '../styles/DetailPage.scss'

function DetailPage() {
  return (
    <div className='detailpage'>
        <div className='container'>
            <p className='detailview'>detail view</p> 
            <span className='refresh'>
                <IoMdRefresh/>
            </span>
            <div className='leftbox'>
                <span>100%</span>
                <span>PASS</span>
                <div className='textbox'>
                    <h3>W3C 유효성 검사</h3>
                    <p>W3C HTML 유효성 검사와 CSS 유효성 검사를 통과하고 웹 표준에 맞게 개발되었다는 사실을 증명하는 인증마크를 획독했습니다.</p>
                </div>
            </div>
            <div className='rightbox'>
                <div className='imagebox'>
                    <div className='image1'>
                        <img src="../img/w3c_html.png" alt="W3C HTML 통과 인증" />
                        <IoMdCheckmarkCircle/>
                    </div>                
                    <div className='image2'>
                        <img src="../img/w3c_css.png" alt="W3C CSS 통과 인증" />
                        <IoMdCheckmarkCircle/>
                    </div>
                    <div className='image3'>
                        <img src="../img/2022_11_08.png" alt="인증서" />
                        <IoMdCheckmarkCircle/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailPage
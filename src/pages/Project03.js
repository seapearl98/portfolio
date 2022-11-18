import React from 'react'

function Project03() {
  return (
<div className='project'>
        <h2>project<span>KA-TALK</span></h2>
        <div className='boxes'>
            <div className='leftbox'>
                <div className='desktop'>
                    <img src="img/desktop.png" alt="데스크탑 목업" />
                    <div className='inner'>
                    <img src="img/cj_desk.jpeg" alt="" />  
                    </div>
                </div>
                <div className='tablet'>
                    <img src="img/tablet.png" alt="타블렛 목업" />
                    <div className='inner'>
                    <img src="img/cj_tablet.jpeg" alt="cj타블렛사이즈이미지"/>  
                    </div>
                </div>
                <div className='mobile'>
                    <img src="img/mobile.png" alt="모바일 목업 이미지" />
                    <div className='inner'>
                    <img src="img/cj_mobile.jpeg" alt="cj모바일사이즈" />  
                    </div>
                </div>
                <div className='button'>
                    <span><a href="https://seapearl98.github.io/kakaotalk/" target={'_blank'}>detail view</a></span>
                    <span>visit website</span>
                </div>
            </div>
            <div className='rightbox'>
                <dl>
                    <div>
                        <dt>작업기간</dt>
                        <dd>2022-nn-nn~2022-nn-nn</dd>
                    </div>
                    <div>
                        <dt>기여도</dt>
                        <dd>100%</dd>
                    </div>
                    <div>
                        <dt>사용언어</dt>
                        <dd>HTML, CSS, Javascript</dd>
                    </div>
                    <div>
                        <dt>프로젝트 개요</dt>
                        <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quod molestiae nisi! Alias qui deserunt repudiandae veniam omnis cupiditate nesciunt minima similique, modi aliquid esse tempore obcaecati est iure exercitationem?</dd>
                    </div>
                    <div>
                        <dt>주요업무</dt>
                        <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sit autem reprehenderit tenetur vero magni, quasi fuga! Repellat nam ea iusto sit ipsam magni, optio voluptatibus est nisi hic sunt!</dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
  )
}

export default Project03
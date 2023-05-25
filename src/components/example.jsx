import React  from 'react';

function Example(p){
        const n1=p.name1;
        const n2=p.name2;
        const n3=p.name3;

        const img1=p.img1;
        const img2=p.img2;
        const img3=p.img3;
    return(
        
        <div className='language'>
            <div className='language-content'>
            <div className="language-img">
               <a href={"#/"+n1}><img src={img1} alt="code" /></a> 
            </div>
            <div className="language-author">
                <h3>{n1}</h3>
                <h4>Python</h4>
            </div>
            <p>
                Discription : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, molestiae.
            </p>
            </div>
            <div className='language-content'>
            <div className="language-img">
               <a href={"#/"+n2}><img src={img2} alt="code" /></a> 
            </div>
            <div className="language-author">
                <h3>{n2}</h3>
                <h4>Pavan Kalyan</h4>
            </div>
            <p>
                Discription : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, molestiae.
            </p>
            </div>
            <div className='language-content'>
            <div className="language-img">
               <a href={"#/"+n3}><img src={img3} alt="code" /></a> 
            </div>
            <div className="language-author">
                <h3>{n3}</h3>
                <h4>Pavan Kalyan</h4>
            </div>
            <p>
                Discription : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, molestiae.
            </p>
            </div>
        </div>
    )
};

export default Example
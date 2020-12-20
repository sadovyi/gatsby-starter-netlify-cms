import React from 'react';
import tw from "twin.macro";

const Input = tw.div`
  bg-green-500
`;

const Logo = () => {
  return (
    <div>
      {/*<div className='logo-el'>&npsp;</div>*/}
      {/*<div className='w-50px h-50px m-auto bg-green-900'>&npsp;</div>*/}
      {/*<div className='w-100 h-100 m-auto'>&npsp;</div>*/}
      {/*<div className='w-100 h-100 m-auto'>&npsp;</div>*/}
      <Input>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea fuga id inventore laborum maxime quasi. Autem delectus dolor excepturi illo laboriosam maiores mollitia necessitatibus nesciunt optio quam quisquam, quod voluptatem.</Input>
    </div>
  );
};

export default Logo;
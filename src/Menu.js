import React from 'react';
import naughty from './BrownSugar.jpeg'

function Menu(props) {
    return (
        <div>
    <div
  class="block overflow-hidden group"
    >
  <img 
    class="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-[350px] sm:h-[450px]"
    src={naughty}
    alt="Basic Tee Product"
    id='naughtea'
  />

  <div class="relative pt-4 bg-white">
    <h3 id='h3menu' class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
      Naughtea Brown Sugar 
    </h3>

    <p className="mt-2">
      <span className="sr-only"> Regular Price </span>

      <span className="tracking-wider">
        $5.49
      </span>
    </p>
  </div>
</div>
        </div>
    );
}

export default Menu;
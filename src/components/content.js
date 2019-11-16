import React from 'react';
import Heading from "./heading"
import Card from "./card"

function Content() {
  return (
    <div className='max-h-full overflow-y-auto px-12 py-6 mt-10'>
      <Heading title="Recently played" />
      <div class="flex mb-16 mt-4">
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="Your saved songs" ></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4 hidden xl:block" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 hidden xl:block" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
      </div>  
      <Heading title="Your top podcasts" />
      <div class="flex mb-16 mt-4">
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="Your saved songs" ></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4 hidden xl:block" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 hidden xl:block" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
      </div>
      <Heading title="Your heavy rotation" subtitle="The music you're had on repeat this month." />
      <div class="flex mb-16 mt-4">
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="Your saved songs" ></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4 hidden xl:block" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 hidden xl:block" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
      </div>
      <Heading title="Made for you" subtitle="Get better recommendations the more you listen." />
      <div class="flex mb-16 mt-4">
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="Your saved songs" ></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4 hidden xl:block" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 hidden xl:block" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
      </div>
      <Heading title="Based on your recent listening" subtitle="Inspired by your recent activity." />
      <div class="flex mb-16 mt-4">
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="Your saved songs" ></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4 hidden xl:block" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 hidden xl:block" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
      </div>
      <Heading title="Best of artists" subtitle="Bringing together the top songs from an artist." />
      <div class="flex mb-16 mt-4">
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="Your saved songs" ></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4 hidden xl:block" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 hidden xl:block" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
      </div>
      <Heading title="New releases for you" subtitle="Brand new music from artists you love." />
      <div class="flex mb-16 mt-4">
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="Your saved songs" ></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 mr-4 hidden xl:block" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
        <Card className="w-1/4 xl:w-1/6 hidden xl:block" title="El Programa de los Simios" subtitle="Desde las entrañas del universo geek para el mundo: El Programa de los Simios..."></Card>
      </div>
    </div>
  );
}

export default Content;

import React from 'react'

const About = () => {
  return (
    <section id="about" class="bg-white text-gray-800 py-20 px-6 md:px-12">
  <div class="max-w-5xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 text-[#1a365d]">
      About Bangalore Academic Club
    </h2>
    <p class="text-lg md:text-xl leading-relaxed mb-6">
      The Bangalore Academic Club is a community dedicated to nurturing 
      curiosity, fostering creativity, and promoting academic excellence. 
      We bring together students, educators, and professionals who share 
      a passion for learning and growth. 
    </p>
    <p class="text-base md:text-lg leading-relaxed mb-6">
      Our mission is to create an inspiring environment where members 
      can exchange knowledge, collaborate on projects, and develop 
      the skills required to thrive in a fast-changing world. Whether 
      you are a beginner exploring new subjects or an advanced learner 
      polishing your expertise, the Club offers something for everyone.
    </p>
    <div class="grid md:grid-cols-3 gap-8 mt-10">
      <div class="bg-[#f8fafc] shadow-md p-6 rounded-xl">
        <h3 class="text-xl font-semibold text-[#1a365d] mb-3">Our Vision</h3>
        <p>
          To be a hub of innovative learning and a platform where 
          knowledge meets creativity.
        </p>
      </div>
      <div class="bg-[#f8fafc] shadow-md p-6 rounded-xl">
        <h3 class="text-xl font-semibold text-[#1a365d] mb-3">Our Mission</h3>
        <p>
          To empower students and professionals with resources, 
          guidance, and opportunities to excel in academics 
          and beyond.
        </p>
      </div>
      <div class="bg-[#f8fafc] shadow-md p-6 rounded-xl">
        <h3 class="text-xl font-semibold text-[#1a365d] mb-3">Our Values</h3>
        <p>
          Integrity, collaboration, inclusivity, and lifelong 
          learning form the core values of our community.
        </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default About
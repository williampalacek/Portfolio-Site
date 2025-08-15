import React from 'react';

function Skills() {
  const skills = {
    Programming: ['Python, Java, C/C++, C#, MATLAB, Verilog, NIOS 2, Assembly, JavaScript, HTML/CSS, Robot Operating System 2 (ROS2)'],
    Tools: ['Linux, AWS, Google Cloud, Google Colab, React.js, Node.js, Git, Firebase, Unity, UVM'],
    Designing: ['SOLIDWORKS CAD, Quartus II CAD software (VHDL), Figma, Adobe Creative Cloud, Blender']
  };

  return (
    <section className="skills space-y-4">
      <h2 className='font-DMMono font-medium'>| Skills</h2>
      <div className="space-y-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="flex flex-col md:flex-row md:gap-4">
            <p className="font-bold text-sm md:text-sm  md:w-1/4">{category}</p>
            <ul className="font-light text-sm md:text-sm md:w-3/4 mt-1 md:mt-0">
              {skillList.map((skill, index) => (
                <li key={index} className="mb-1">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
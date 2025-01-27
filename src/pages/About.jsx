import { useEffect } from "react";
import './App.css';
import { NavLink } from "react-router-dom";
import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  // Scroll to the top on component load
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Sandeep
        </span>{" "}
        👋
      </h1>
      <div className="swipe-container">
        <p className="swipe-text">Swipe down</p>
      </div>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p style={{ textAlign: 'justify' }}>
          Innovative Software Engineer from Cleveland, OH,
          with a passion for transforming complex ideas into impactful applications.
          Driven by extensive research, hands-on development, and a commitment to continuous learning, I specialize in delivering technical excellence that stands out.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p style={{ textAlign: 'justify' }}>
            While my professional journey started with Tata Consultancy Services (TCS), I quickly transformed challenges into opportunities, mastering key skills and evolving into an indispensable contributor to the team’s success.
            <br />
            <br />
            From there I moved to Cleveland State University (CSU), where I honed my expertise in research work related to language models, computer vision, reinforcement Learning algorithms, while also gaining valuable experience in research and teaching as working as graduate assistant.
            <br />
            <br />
            Here is the rundown of my professional journey so far.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <p className="text-black-500 font-medium text-base" style={{ margin: 0 }}>
        Know more about my &emsp;
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          <b className="button-look">Projects</b>
        </NavLink>
      </p>

      <br />

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;

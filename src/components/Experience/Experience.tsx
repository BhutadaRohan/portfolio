import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import data from "../../assets/data.json"

const Experience = () => {
  return (
    <section style={{backgroundColor:"#1c1d24"}} className='section' id="Experience">
      <h2 className='col-7 mx-auto text-center pt-4'>Experience</h2>
      <div className='py-3'>
      <VerticalTimeline lineColor='#f0932b' animate={false}>
        {
          data.experience.list.map((obj)=>(
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#131416', color: '#b2bec3',boxShadow:"0 3px 0 #f0932b" }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={obj.period}
                iconStyle={{ background: '#131416', color: '#fff',boxShadow:"0 0 0 4px #f0932b, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)" }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title text-white">{obj.role}</h3>
                <h5 className="vertical-timeline-element-subtitle">{obj.company}</h5>
                <ul className='mt-3'>
                  {
                    obj.desc.length > 0 && obj.desc.map((val)=>(
                      <li>{val}</li>
                    ))
                  }
                </ul>
              </VerticalTimelineElement>
          ))
        }
        <VerticalTimelineElement
          iconStyle={{ borderRadius:0,background: '#131416', color: '#fff',boxShadow:"0 0 0 4px #f0932b, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)" }}
          // icon={<p className='text-center mt-2 pt-2'>Start</p>}
        />
      </VerticalTimeline>
      </div>
    </section>
  )
}

export default Experience
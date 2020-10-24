import React from 'react';
import PageHeading from '../commons/PageHeading';
import SectionSubheading from "../commons/SectionSubheading";
import HistroyItem from "./HistoryItem";
import SkillItem from "./SkillItem";
import '../css/Resume.css';


const Resume = () => { 
    return (
        <div className="page-block">
            <PageHeading title="My Resume" icon="lnr-license"></PageHeading>
            <div className="history-container">
                <div className="experience-container">
                    <SectionSubheading title="Experience" />
                    <ul className="history-item">
                        <HistroyItem
                            title="LEAD UI DESIGNER"
                            short_description="BIG DESIGN COMPANY, NY, USA"
                            info="Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima">
                        </HistroyItem>
                        <HistroyItem
                            title="WEB DESIGNER"
                            short_description="BIG DESIGN COMPANY, NY, USA"
                            info="Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima">
                        </HistroyItem>
                        <HistroyItem
                            title="WEB DEVELOPER"
                            short_description="BIG DESIGN COMPANY, NY, USA"
                            info="Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima">
                        </HistroyItem>
                    </ul>
                </div>
                <div className="education-container">
                    <SectionSubheading title="Education" />
                        <ul className="history-item">
                            <HistroyItem
                                title="LEAD UI DESIGNER"
                                short_description="BIG DESIGN COMPANY, NY, USA"
                                info="Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima">
                            </HistroyItem>
                            <HistroyItem
                                title="WEB DESIGNER"
                                short_description="BIG DESIGN COMPANY, NY, USA"
                                info="Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima">
                            </HistroyItem>
                            <HistroyItem
                                title="WEB DEVELOPER"
                                short_description="BIG DESIGN COMPANY, NY, USA"
                                info="Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima">
                            </HistroyItem>
                        </ul>
                    </div>
                </div>
            <div className="skills-container">
                <div className="programming-container">
                    <SectionSubheading title="Programming Skills" />
                    <SkillItem>

                    </SkillItem>
                    <SkillItem>
                        
                    </SkillItem>
                    <SkillItem>
                        
                    </SkillItem>
                </div>
                <div className="coding-container">
                    <SectionSubheading title="Coding Skills" />
                    <SkillItem>
                        
                    </SkillItem>
                    <SkillItem>
                        
                    </SkillItem>
                    <SkillItem>
                        
                    </SkillItem>
                </div>
            </div>
        </div>
    );
}
 


export default Resume;

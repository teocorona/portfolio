import { Skill } from "./Skill"


export const Skills = () => {

    const devSkills = [
        {
            name: 'JavaScript',
            logoSrc: 'assets/skills/js-logo.svg',
            style: {
                skill: {
                    width: '75%',
                    backgroundColor: '#f0db4f'
                },
                skillText: {
                    color: '#f0db4f',
                    fontSize: '1.5rem'
                }
            }
        },
        {
            name: 'React',
            logoSrc: 'assets/skills/react-logo.svg',
            style: {
                skill: {
                    width: '60%',
                    backgroundColor: '#61DAFB'
                },
                skillText: {
                    color: '#61DAFB',
                    fontSize: '1.5rem'
                }
            }
        },
        {
            name: 'Redux',
            logoSrc: 'assets/skills/redux-logo.svg',
            style: {
                skill: {
                    width: '50%',
                    backgroundColor: '#764ABC'
                },
                skillText: {
                    color: '#764ABC',
                    fontSize: '1.5rem'
                }
            }
        },
        {
            name: 'NodeJS',
            logoSrc: 'assets/skills/nodejs-logo.svg',
            style: {
                skill: {
                    width: '25%',
                    backgroundColor: '#8CC84B'
                },
                skillText: {
                    color: '#8CC84B',
                    fontSize: '1.5rem'
                }
            }
        },
        {
            name: 'HTML',
            logoSrc: 'assets/skills/html-logo.svg',
            style: {
                skill: {
                    width: '90%',
                    backgroundColor: '#e34f26'
                },
                skillText: {
                    color: '#e34f26',
                    fontSize: '1.5rem'
                }
            }
        },
        {
            name: 'CSS',
            logoSrc: 'assets/skills/css-logo.svg',
            style: {
                skill: {
                    width: '90%',
                    backgroundColor: '#1b73ba'
                },
                skillText: {
                    color: '#1b73ba',
                    fontSize: '1.5rem'
                }
            }
        },
    ]


    return (
        <div className="row mb-5">
            <h2 className="subtitle">Dev Skills &nbsp; ( Junior+ &nbsp;? )</h2>
            {
                devSkills.map(s => (
                    <Skill
                        key={s.name}
                        text={s.name}
                        logoSrc={s.logoSrc}
                        styleSkill={s.style.skill}
                        styleSkillText={s.style.skillText}
                    />
                ))
            }


        </div>
    )
}
